import { NextSeo } from "next-seo";
import Head from "next/head";
import React, { Fragment } from "react";

import {Navbar} from "../components/navbar/navbar"


const Demo = () => {
  return (
    <Fragment>
      <Head>
        <title>Tailwind CSS Radix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title="Tailwind CSS Radix"
        description="Utilities and variants for styling Radix state"
        canonical={process.env.NEXT_PUBLIC_URL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Tailwind CSS Radix",
          description: "Utilities and variants for styling Radix state",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/static/og.png`,
              width: 1200,
              height: 630,
              alt: "Tailwind CSS Radix",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@ecklflorentin",
          site: "@ecklf",
          cardType: "summary_large_image",
        }}
      />

      <Navbar />
    </Fragment>
  );
};

export default Demo;
