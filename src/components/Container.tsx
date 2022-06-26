import Head from "next/head";

import HeaderNav from "./HeaderNav";
import ThemeToggle from "./ThemeToggle";

interface Props {
  children: JSX.Element;
  [key: string]: any;
}

export default function Container({ children, ...customMeta }: Props) {
  const meta = {
    title: "Hieu Nguyen",
    description: "Front-end dev and Typescript enthusiast",
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Hieu Nguyen" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <main>
        <div className="flex items-center justify-between">
          <HeaderNav />
          <ThemeToggle />
        </div>
        {children}
      </main>
    </div>
  );
}
