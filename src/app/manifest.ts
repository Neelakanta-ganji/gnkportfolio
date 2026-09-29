import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Neelakanta Ganji (Ganji Neelakanta) | Full-Stack & App Developer",
    short_name: "Neelakanta Ganji",
    description:
      "Official portfolio of Neelakanta Ganji (Ganji Neelakanta) - Full-Stack Web Developer & App Developer building modern digital products.",
    start_url: "/",
    display: "standalone",
    background_color: "#030508",
    theme_color: "#030508",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
