import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

export default function Seo({ title, description }: Props) {
  return (
    <Head>
      <title>{`fdc notes | ${title}`}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
