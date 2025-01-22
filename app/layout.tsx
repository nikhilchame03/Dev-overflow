import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";

import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "DevOverflow",
  description:
    "DevOverflow is the ultimate platform for developers and programmers to solve problems, share expertise, and grow their knowledge. It’s a collaborative Q&A site where users can ask technical questions, receive accurate answers from the global developer community, and engage in discussions across a wide range of programming topics. What makes DevOverflow stand out is its powerful tagging system, which makes finding relevant answers quick and intuitive, and its reputation-based system that rewards meaningful contributions, encouraging high-quality content. With millions of questions and answers already available, it’s an indispensable resource for anyone looking to overcome challenges or deepen their understanding of technology.",
  icons: "/assets/images/site-logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} `}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              formFieldActionLink:
                "primary-text-gradient hover:text-primary-500  ",
            },
          }}
        >
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
