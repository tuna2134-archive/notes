import Document, { Html, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=optional"
                        rel="stylesheet"
                    />
                    <script src="https://embed.zenn.studio/js/listen-embed-event.js" async />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
