"use client";
import Head from "next/head";
import { useMetadata } from "@/context/MetadataContext";

export function MetadataUpdater() {
  const { title, description } = useMetadata();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
