import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import "../../styles/globals.css";

export default function Camisas() {
  return (
    <>
      <Head>
        <title>Página de camisas</title>
        <meta name="keywords" content="Roupas, calçados, boné"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para voce"
        ></meta>
      </Head>
      <Navbar />
      <Image
        src="/images/rainbow.png"
        width="1400"
        height="1200"
        alt="Imagens ale"
      />
    </>
  );
}
