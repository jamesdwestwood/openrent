"use client";
import { Open_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/system";
import { alpha } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  interface Palette extends Palette {
    bg: { light: string; dark: string };
    white: { main: string };
    dark: { main: string };
  }

  interface PaletteOptions extends PaletteOptions {
    bg?: { light: string; dark: string };
    white?: { main: string };
    dark?: { main: string };
  }
}

const openSans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const defaultTheme = createTheme();

const theme: Theme = createTheme({
  typography: {
    fontFamily: openSans.style.fontFamily,
    allVariants: {
      color: "#12385e",
    },
  },
  shadows: [
    ...defaultTheme.shadows.map(
      (shadow, i) => `0 0 0 ${i}px ${alpha("#21384d", 0.2)}`,
    ),
  ],
  palette: {
    primary: {
      main: "#43aad3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#53df92",
    },
    bg: {
      light: "#f4faff",
      dark: "#21384d",
    },
    white: defaultTheme.palette.augmentColor({
      color: {
        main: "#fff",
      },
    }),
    dark: defaultTheme.palette.augmentColor({
      color: {
        main: "#21384d",
      },
    }),
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: { fontWeight: "bold", boxShadow: "none" },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          letterSpacing: 1.2,
        },
      },
    },
  },
});

export default theme;
