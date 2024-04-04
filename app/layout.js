import { Inter, Kanit } from "next/font/google";
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
        <link rel="apple-touch-icon" sizes="180x180" href="fav-icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="fav-icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="fav-icons/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
