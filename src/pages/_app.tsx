import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-switch";
import { strEnv } from "@/lib/env";
import { inter } from "@/lib/fonts";
import PWAInstaller, { usePWAInstaller } from "@/components/PWAInstaller";

const siteTitle = strEnv("NEXT_PUBLIC_SITE_TITLE", "Next Whois UI");
const siteDescription = strEnv(
  "NEXT_PUBLIC_SITE_DESCRIPTION",
  "🧪 Your Next Generation Of Whois Lookup Tool With Modern UI. Support Domain/IPv4/IPv6/ASN/CIDR Whois Lookup And Powerful Features.",
);
const siteKeywords = strEnv(
  "NEXT_PUBLIC_SITE_KEYWORDS",
  "Whois, Lookup, Tool, Next Whois UI",
);

export default function App({ Component, pageProps }: AppProps) {
  const { install } = usePWAInstaller();

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="tags" content={siteKeywords} />
        <meta name="keywords" content={siteKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <PWAInstaller
          manifest-url="/manifest.json"
          name="Next Whois UI"
          description="🧪 Your Next Generation Of Whois Lookup Tool With Modern UI. Support Domain/IPv4/IPv6/ASN/CIDR Whois Lookup And Powerful Features."
        />
        <div className={cn(`relative w-full h-full`, inter.className)}>
          <div
            className={cn(
              `absolute w-full p-2 px-4 bg-background border-b select-none flex flex-row items-center z-50 space-x-2`,
            )}
          >
            <img
              src={`/icons/icon-192x192.png`}
              alt={``}
              className={`cursor-pointer w-10 h-10 p-1 shadow-sm bg-black border rounded-md transition hover:shadow`}
              onClick={() => {
                install(true);
              }}
            />
            <div className={`grow`} />
           
            
          </div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
