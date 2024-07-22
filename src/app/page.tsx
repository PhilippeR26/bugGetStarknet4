"use client"
import Head from "next/head";
import { connect } from "get-starknet";

export default function MyPage() {
  async function handleClick() {
    const getWalletSWO = await connect({
      modalMode: "alwaysAsk",
      modalTheme: "light",
    });
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={handleClick}>Click me</button>
      </main>
    </>
  );
}