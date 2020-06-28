import React, { useEffect } from "react";
import Head from "next/head";

import { initGA, logPageView } from "../helpers/googleAnalytics";
import App from "../components/App";

export default function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Cancel CETs</title>
        <meta
          name="description"
          content="Cancel all CETs, this is an online protest to cancel all CETs in the covid pandemic"
        ></meta>
        <meta
          name="google-site-verification"
          content="GMukjUvzX7N_4jFCWt-Hu2lgJ4Xi1aDF5r0TZiciNHc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        body {
          background-color: #333;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
