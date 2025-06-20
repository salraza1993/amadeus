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
import Script from "next/script";
import { graphQLPromise } from "./common/CommonFunctions";
import { SchemaLocalBusiness, SchemaOrganization, SchemaWebSiteSearchAction } from "./scripts/scripts";

export const metadata = {
  title: {
    default: "Welcome to AOS",
    template: "%s | AOS",
  },
  description: "Welcome to AOS",
};

export default function RootLayout({ children }) {
  // let metadataData = await getPageMetadata();
  // metadataData = metadataData?.data?.pages?.edges[0]?.node?.homePageMetadata;

  return (
    <html lang="en" className={kanit.variable}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <meta name="keywords" content="Travel Technology, Travel Software, Travel technology Company, Online Travel Booking solution, Online Travel Solutions, Software Company, OnlineTravel Software Solutions, travel software company, travel agency software, travel agent software, travel agent software, hotel booking engine, travel technology solutions, agent software, travel agency software, Booking Engine, Grow Online, Grow travel business, go online, secure online solution" />
      </Head>
      <Script src="/js/microsoftClarity.js" id="clarity-script" strategy="afterInteractive"></Script>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WJ1LF70ELL"></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-WJ1LF70ELL');
        `}
      </Script>
      {/* <!-- Google Tag Manager --> */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-57LJWX84')
        `}
      </Script>
      {/* <!-- End Google Tag Manager --> */}
      
      <Script
        id="jsonld-localbusiness"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{__html: JSON.stringify(SchemaLocalBusiness)}}
      />

      {/* JSON-LD for WebSite */}
      <Script
        id="jsonld-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{__html: JSON.stringify(SchemaWebSiteSearchAction)}}
      />

      {/* JSON-LD for Organization */}
      <Script
        id="jsonld-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{__html: JSON.stringify(SchemaOrganization)}}
      />

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
        
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57LJWX84" height="0" width="0" style="display:none;visibility:hidden" />`,
          }}
        />
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}

// Newsletter Content Fetching