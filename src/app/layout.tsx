import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Home from "./page";

import LeftNav from "../components/navBar/LeftNav/page";
import TopNav from "../components/navBar/TopNav/page";
import RightNav from "../components/navBar/RightNav/page";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import Childrenwrapper from "./Childrenwrapper";
import ReduxProvider from "@/store/Reduxprovider";

export const metadata: Metadata = {
  title: "ChainaaS",
  description: "Chain as a Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AntdRegistry>
            <section className="w-[100vw] h-[100vh] flex">
              <LeftNav />
              <section className="w-[93vw] h-full flex flex-col">
                <TopNav />
                <div className="w-full h-[94vh] overflow-hidden">
                  <Childrenwrapper>{children}</Childrenwrapper>
                </div>
              </section>
              <RightNav />
            </section>
          </AntdRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
