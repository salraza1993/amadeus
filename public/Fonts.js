import localFont from 'next/font/local';

// =========== [ Gilroy ] =========== //

const amadeusLight = localFont({
  src: './assets/fonts/AmadeusNeue-Light.woff2',
  weight: '300',
  style: 'normal',
  display: 'swap',
  variable: '--amadeus--light',
});
const amadeusLightItalic = localFont({
  src: './assets/fonts/AmadeusNeue-LightItalic.woff2',
  weight: '300',
  style: 'italic',
  display: 'swap',
  variable: '--amadeus--light-italic',
});

const amadeusRegular = localFont({
  src: './assets/fonts/AmadeusNeue-Regular.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--amadeus--regular',
});
const amadeusRegularItalic = localFont({
  src: './assets/fonts/AmadeusNeue-RegularItalic.woff2',
  weight: '400',
  style: 'italic',
  display: 'swap',
  variable: '--amadeus--regular-italic',
});


const amadeusMedium = localFont({
  src: './assets/fonts/AmadeusNeue-Medium.woff2',
  weight: '500',
  style: 'normal',
  display: 'swap',
  variable: '--amadeus--medium',
});
const amadeusMediumItalic = localFont({
  src: './assets/fonts/AmadeusNeue-MediumItalic.woff2',
  weight: '500',
  style: 'italic',
  display: 'swap',
  variable: '--amadeus--medium-italic',
});


const amadeusBold = localFont({
  src: './assets/fonts/AmadeusNeue-Bold.woff2',
  weight: 'bold',
  style: 'normal',
  display: 'swap',
  variable: '--amadeus--bold',
});
const amadeusBoldItalic = localFont({
  src: './assets/fonts/AmadeusNeue-BoldItalic.woff2',
  weight: 'bold',
  style: 'italic',
  display: 'swap',
  variable: '--amadeus--bold-italic',
});

const amadeusBlack = localFont({
  src: './assets/fonts/AmadeusNeue-Black.woff2',
  weight: 'bold',
  style: 'normal',
  display: 'swap',
  variable: '--amadeus--black',
});
const amadeusBlackItalic = localFont({
  src: './assets/fonts/AmadeusNeue-BlackItalic.woff2',
  weight: 'bold',
  style: 'italic',
  display: 'swap',
  variable: '--amadeus--black-italic',
});


export {
  amadeusLight,
  amadeusLightItalic,
  amadeusRegular,
  amadeusRegularItalic,
  amadeusMedium,
  amadeusMediumItalic,
  amadeusBold,
  amadeusBoldItalic,
  amadeusBlack,
  amadeusBlackItalic
};
