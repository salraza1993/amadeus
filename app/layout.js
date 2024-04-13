import {
  amadeusLight,
  amadeusLightItalic,
  amadeusRegular,
  amadeusRegularItalic,
  amadeusMedium,
  amadeusMediumItalic,
  amadeusBold,
  amadeusBoldItalic,
  amadeusBlack,
  amadeusBlackItalic } from "./../public/Fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

// =========== [ css ] =========== //
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";
import kanit from "./Fonts";



export const metadata = {
  title: "Welocome to Amedeos",
  description: "Welcome to Amedeos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kanit.variable}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <body
        className={`
          ${amadeusLight.variable}
          ${amadeusLightItalic.variable}
          ${amadeusRegular.variable}
          ${amadeusRegularItalic.variable}
          ${amadeusMedium.variable}
          ${amadeusMediumItalic.variable}
          ${amadeusBold.variable}
          ${amadeusBoldItalic.variable}
          ${amadeusBlack.variable}
          ${amadeusBlackItalic.variable}
        `}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
