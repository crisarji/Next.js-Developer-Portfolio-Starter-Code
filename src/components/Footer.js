import React from "react";
import Layout from "./Layout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build by&nbsp;
          <Link
            href="https://crisarji.dev"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            crisarji
          </Link>
        </div>
        <Link
          href="https://crisarji.dev"
          className="underline underline-offset-2"
          target={"_blank"}
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
}
