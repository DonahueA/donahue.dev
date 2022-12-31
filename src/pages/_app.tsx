import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import { Manrope } from '@next/font/google'


const manrope = Manrope({ subsets: ['latin'] })

const MyApp: AppType = ({ Component, pageProps }) => {
  
  return <>
    <style jsx global>{`
    html {
      font-family: ${manrope.style.fontFamily};
    }
  `}</style><Component {...pageProps} />
  </>;
};

export default MyApp;
