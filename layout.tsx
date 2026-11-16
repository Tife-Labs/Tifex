import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const email = process.env.CONTACT_EMAIL;
const phone = process.env.CONTACT_PHONE;

export const metadata: Metadata = {
  metadataBase: new URL("https://tifex.tifelabz.com"),
  title: {
    default: "Tifex by Tifelabz — Creative Technology Studio",
    template: "%s · Tifex by Tifelabz",
  },
  description:
    "Tifex by Tifelabz is a creative technology studio engineering software, web platforms, developer tools, and automation engines for ambitious brands. Founded by Tife Adejuwon and Oderinde Isaiah Oluwasegun.",
  keywords: [
    "Tifex",
    "Tifelabz",
    "creative technology studio",
    "software engineering",
    "web development",
    "automation",
    "developer tools",
  ],
  authors: [
    { name: "Tife Adejuwon" },
    { name: "Oderinde Isaiah Oluwasegun" },
  ],
  creator: "Tife Adejuwon",
  publisher: "Tifex by Tifelabz",
  openGraph: {
    title: "Tifex by Tifelabz — Creative Technology Studio",
    description:
      "Software, web platforms, tools, and automation engines — engineered for ambitious brands.",
    type: "website",
    siteName: "Tifex by Tifelabz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tifex by Tifelabz — Creative Technology Studio",
    description:
      "Software, web platforms, tools, and automation engines — engineered for ambitious brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Optional: structured contact data injected into <head> for search engines
  const contactSchema =
    email && phone
      ? {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tifex by Tifelabz",
          email,
          telephone: phone,
          founders: [
            { "@type": "Person", name: "Tife Adejuwon" },
            { "@type": "Person", name: "Oderinde Isaiah Oluwasegun" },
          ],
        }
      : null;

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        {contactSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(contactSchema),
            }}
          />
        )}
      </body>
    </html>
  );
}