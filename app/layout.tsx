import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontRoboto } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-roboto antialiased",
          fontRoboto.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "mytheme" }}>
          <div className="relative flex flex-col ">
            <main className="">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
