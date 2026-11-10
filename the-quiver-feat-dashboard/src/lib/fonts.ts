import { Braah_One, Cal_Sans, Lato } from "next/font/google";

// shared fonts for the app (org + student dashboards)

// for the big title and big numbers
export const braahOne = Braah_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// card titles (same one the Button uses)
export const calSans = Cal_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

// small text
export const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});