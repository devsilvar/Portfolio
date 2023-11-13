import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-10-03",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

export const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
