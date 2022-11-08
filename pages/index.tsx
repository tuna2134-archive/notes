import Seo from "../components/seo";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { useEffect } from "react";

import { MetaType } from "../types/note";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

interface MetaTypeExtended extends MetaType {
  slug: string;
  when: string;
}

type Props = {
  metas: MetaTypeExtended[];
};

export default function Home({ metas }: Props) {
  useEffect(() => {
    import("zenn-embed-elements");
  }, []);
  return (
    <>
      <Seo title="Home" description="ホーム" />
      <div className="home">
        <h2 className="home__title">Home</h2>
        <p>mc_fdcが何かメモするためのサイト</p>
        <h2 className="home__list-title">Notes</h2>
        <ul className="home__list">
          {metas.map((meta) => (
            <li key={meta.title} className="home__list-item">
              <div>
                <Link href={`/notes/${meta.slug}`}>
                  <a className="home__list-link">{meta.title}</a>
                </Link>
                <p className="home__list-date">{meta.when}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let files = await fs.readdir("pages/notes");
  files = files.filter((file) => file.endsWith(".md"));
  let metas = await Promise.all(
    files.map(async (file: string) => {
      let data = matter(await fs.readFile(`pages/notes/${file}`, "utf8")).data;
      data.slug = file.replace(".md", "");
      data.when = dayjs(data.date).fromNow();
      return data;
    })
  );
  metas = [...metas].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return {
    props: {
      metas: metas,
    },
  };
}
