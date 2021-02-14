import Head from "next/head";
import Navbar from "../component/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Website | yerros.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen overflow-hidden bg-black">
        <Navbar />
        <div
          id="box"
          className="relative flex items-center justify-center w-xl"
        >
          <div
            id="box-neon"
            className="absolute top-0 left-0 z-10 w-2 h-full bg-white rounded-full"
          ></div>
          <div
            id="running"
            className="absolute top-0 left-0 w-full h-full bg-black"
          ></div>
          <h2
            id="text-neon"
            className="text-5xl font-bold tracking-widest text-white lg:text-8xl"
          >
            yerros.me
          </h2>
        </div>
      </div>
    </>
  );
}
