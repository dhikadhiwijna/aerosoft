import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../component/Home/AboutUs";
import ContactUs from "../component/Home/ContactUs";
import Footer from "../component/Footer";
import MastHead from "../component/Home/Masthead";
import NavigationBar from "../component/Navbar";
import PrivacyPolicy from "../component/Home/PrivacyPolicy";
import Works from "../component/Home/Works";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Funtravia</title>
        <meta name="description" content="Funtravia" />
        <link rel="icon" href="/assets/png/logo.png" />
      </Head>

      <main>
        {/* <NavigationBar /> */}
        <MastHead />
        <AboutUs />
        <PrivacyPolicy />
        <Works />
        <ContactUs />
        <Footer />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
