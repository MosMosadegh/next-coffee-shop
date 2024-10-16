import Footer from "@/component/module/Footer/Footer";
import Navbar from "@/component/module/Navbar/Navbar";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  );
}
