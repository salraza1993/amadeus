export const SchemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Amadeus Online Suite",
  "image":
    "https://amadeusonlinesuite.net/_next/image?url=https%3A%2F%2Fcmsadmin.amadeusonlinesuite.net%2Fwp-content%2Fuploads%2F2024%2F08%2FDad-having-fun-with-his-daughter-in-his-arms-Car-and-transfer-1200x675-128554e.jpg&w=1920&q=75",
  "@id": "",
  "url": "https://amadeusonlinesuite.net/",
  "telephone": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle de Salvador de Madariaga 1",
    "addressLocality": "Madrid",
    "postalCode": "28027",
    "addressCountry": "ES"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.linkedin.com/company/amadeus/",
    "https://www.facebook.com/AmadeusITGroup/",
    "https://x.com/AmadeusITGrou",
    "https://www.instagram.com/amadeusitgroup/",
    "https://www.youtube.com/user/AmadeusITGroup"
  ]
}

export const SchemaWebSiteSearchAction = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Amadeus Online Suite",
    "url": "https://amadeusonlinesuite.net/",
    "potentialAction": {
        "@type": "SearchAction",
        "target":
        "https://amadeusonlinesuite.net/{search_term_string}https://amadeusonlinesuite.net/",
        "query-input": "required name=search_term_string"
    }
}
export const SchemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Amadeus Online Suite",
    "alternateName": "Amadeus",
    "url": "https://amadeusonlinesuite.net/",
    "logo":
        "https://amadeusonlinesuite.net/_next/image?url=https%3A%2F%2Fcmsadmin.amadeusonlinesuite.net%2Fwp-content%2Fuploads%2F2024%2F08%2FDad-having-fun-with-his-daughter-in-his-arms-Car-and-transfer-1200x675-128554e.jpg&w=1920&q=75",
    "sameAs": [
        "https://x.com/AmadeusITGrou",
        "https://www.instagram.com/amadeusitgroup/",
        "https://www.youtube.com/user/AmadeusITGroup",
        "https://www.facebook.com/AmadeusITGroup/",
        "https://www.linkedin.com/company/amadeus/"
    ]
}