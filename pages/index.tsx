import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../component/AboutUs";
import ContactUs from "../component/ContactUs";
import Footer from "../component/Footer";
import MastHead from "../component/Masthead";
import NavigationBar from "../component/Navbar";
import PrivacyPolicy from "../component/PrivacyPolicy";
import Works from "../component/Works";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Funtravia</title>
        <meta name="description" content="Funtravia's Landing Page" />
        <link rel="icon" href="/vercel.svg" />
      </Head>

      <main>
        <NavigationBar />
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
