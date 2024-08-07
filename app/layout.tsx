"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header, { Props as HeaderProps } from "@/app/components/header/Header";
import theme from "@/app/src/theme";
import { Box, ThemeProvider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const PRIMARY_NAV: HeaderProps["nav"] = [
  {
    label: "About",
    path: "www.openrent.co.uk/about",
  },
  {
    label: "Pricing & services",
    path: "www.openrent.co.uk/our-pricing",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <Box component="html" lang="en" sx={{ scrollBehavior: "smooth" }}>
        <body className={inter.className}>
          <Header
            nav={PRIMARY_NAV}
            sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }}
          />
          {children}
        </body>
      </Box>
    </ThemeProvider>
  );
}
