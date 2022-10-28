import matter from "gray-matter"

import markdownToHtml from "zenn-markdown-html"
import 'zenn-content-css'

import dayjs from "dayjs"
import { promises as fs } from "fs"
import Seo from "../../components/seo"
import { MetaType, Props, ParamsType } from "../../types/note"


export default function NotePage({ content, meta }: Props) {
    return (
        <div className="note">
            <Seo title={meta.title} description={meta.description} />
            <div className="note__meta">
                <h1 className="note__meta-title">{meta.title}</h1>
                <time className="note__meta-date" dateTime={meta.date}>{dayjs(meta.date).format("YYYY/MM/DD hh:mm")}</time>
            </div>
            <article className="note__article">
                <div className="znc" dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </div>
    )
}

export async function getStaticPaths() {
    let files = await fs.readdir("pages/notes")
    files = files.filter((file) => file.endsWith(".md"))
    const paths = files.map((file: string) => {
        return {
            params: {
                slug: file.replace(".md", ""),
            },
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }: ParamsType) {
    const fileContent = await fs.readFile(`pages/notes/${params.slug}.md`, "utf8")
    const { content, data } = matter(fileContent)
    const html = markdownToHtml(content)
    return {
        props: {
            content: html,
            meta: data,
        },
    }
}
