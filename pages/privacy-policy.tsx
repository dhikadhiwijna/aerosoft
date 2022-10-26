import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { Terms } from "../data/TermsAndPolicies";

const PrivacyPolicy: NextPage = () => {
  const listOfTerms: String[] = [
    "Privacy & Policy",
    "EULA",
    "Term & Condition",
    "Cookie Policy",
    "Disclaimer",
  ];
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleImageLoaded: () => void = useCallback(
    () => setImageLoaded(true),
    []
  );
  switch (activeIndex) {
    case 1:
      break;

    default:
      break;
  }
  return (
    <div>
      <Head>
        <title>Terms & policy</title>
        <meta name="description" content="Terms & policy" />
        <link rel="icon" href="/assets/png/logo.png" />
      </Head>
      <div
        className="flex flex-col justify-center items-center min-h-[75vh] bg-light-white sticky -mt-[3.7em] md:-mt-[4.7em] -z-10"
        id="header"
      >
        <Image
          src="/assets/png/bg-about.png"
          alt="header"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          onLoad={handleImageLoaded}
        />
        <div className="relative lg:absolute font-bold z-10 w-3/4 text-dark-gray text-center lg:text-left flex-1 flex flex-col lg:flex-row items-center justify-center xl:justify-between lg:top-0 lg:bottom-0">
          <div
            className={`z-50 w-4/6 duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            <h1 className="mb-6 text-6xl uppercase">
              Funtravia Term and Policies
            </h1>

            <div className="lg:mt-12">
              <h2 className="text-md lg:text-xl font-normal">
                Funtravia is committed to protecting your privacy. This Privacy
                Policy explains how your personal information is collected,
                used, and disclosed by Funtravia.
              </h2>
            </div>
          </div>
          <div
            className={`hidden lg:block duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
            }`}
          >
            <Image
              src="/assets/svg/icon-privacy.svg"
              alt="header"
              width={300}
              height={300}
              objectPosition="center"
              onLoad={handleImageLoaded}
            />
          </div>
        </div>
      </div>
      <div className="w-screen sticky top-[4.5rem] border-b border-gray bg-white">
        <div className="w-3/4 flex m-auto ">
          {listOfTerms.map((value, index) => (
            <div key={index}>
              <div
                className={`mr-10 my-10 text-lg cursor-pointer ${
                  activeIndex === index ? "text-light-green" : "text-dark-gray"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen">
        <div className={"w-3/4 m-auto pt-5 duration-300"}>
          {Terms(activeIndex)}
        </div>{" "}
      </div>

      {/* <div className="container mx-auto py-6 bg-white">
        <div className="flex flex-1 px-3 justify-between items-center ">
          <Link href="../">
            <div className="my-6 flex justify-center items-center gap-2 cursor-pointer">
              <Image
                src="/vercelblack.svg"
                alt="Funtravia-Logo"
                width={50}
                height={50}
              />
              <h3 className="text-3xl">funtravia</h3>
            </div>
          </Link>

          <p>
            Last update: <strong>Agustus 2022</strong>
          </p>
        </div>

        <div className="container px-6 lg:px-20 gap-5 my-12 text-lg text-justify">
          <div className="text-4xl my-12 text-center font-semibold">
            Privacy &amp; Policy
          </div>

          <div className="text-xl font-bold mt-6">PENGANTAR</div>
          <div className="my-3">
            Pihak Funtravia berkomitmen untuk melindungi privasi dan keamanan
            data pribadi Anda yang di proses atau kendalikan.
          </div>
          <div className="my-3">
            Funtravia dapat mengubah Kebijakan Privasi sewaktu-waktu dengan
            mempublikasikan ketentuan yang diubah pada situs ini. Semua
            ketentuan yang diubah akan berlaku secara otomatis sejak tanggal
            yang ditentukan pada Kebijakan Privasi yang dipublikasikan, kecuali
            ditentukan.
          </div>
          <div className="my-3">
            Adanya Kebijakan Privasi ini adalah komitmen nyata dari Funtravia
            untuk menghargai dan melindungi setiap informasi pribadi Pengguna
            Aplikasi ini. Kebijakan ini menjadi acuan yang mengatur dan
            melindungi penggunaan data dan informasi penting para pengguna, yang
            telah dikumpulkan pada saat mendaftar, mengakses dan menggunakan
            layanan disini, seperti alamat email, nomor telepon, foto, gambar,
            dan lain-lain.
          </div>
          <div className="my-3">
            Data pribadi disini mengacu pada informasi apapun yang terkait
            dengan seorang individu yang teridentifikasi atau dapat
            diidentifikasi (“Data Pribadi”). Data Pribadi termasuk data yang
            secara langsung mengidentifikasi Anda - seperti nama Anda, tanggal
            lahir,nomor telepon, jenis kelamin,termasuk informasi atau data lain
            yang dapat secara tidak langsung dan secara wajar digunakan untuk
            mengidentifikasi Anda.
          </div>
          <div className="my-3">
            Informasi yang dikumpulkan dan disimpan oleh Funtravia
          </div>

          <div className="text-xl font-bold ">
            Data yang diserahkan secara mandiri oleh Pengguna
          </div>
          <div className="my-3">
            Berikut data- data untuk diserahkan seperti email, nama, nomor
            telepon, jenis kelamin, tanggal lahir, negara dan kota tinggal.
          </div>

          <div className="font-bold mt-6">Penggunaan Informasi Anda </div>
          <div className="my-3">
            Kredensial Anda disimpan secara lokal dan digunakan secara ketat
            untuk membuat koneksi selama proses sinkronisasi dan mode online.
          </div>

          <div className="font-bold mt-6">
            Informasi apa yang kami kumpulkan?
          </div>
          <div className="my-3">
            Informasi yang dikumpulkan oleh pihak Funtravia adalah mengenai
            bagaimana anda menggunakan produk Funtravia. Seperti, Funtravia
            mengumpulkan informasi seperti postingan,trip perjalanan anda dan
            juga mengumpulkan beberapa informasi tentang Anda.{" "}
          </div>

          <div className="font-bold mt-6">Keamanan data</div>
          <div className="my-3">
            Password keamanan Anda dienkripsi berdasarkan kunci aplikasi. Kunci
            aplikasi dibuat (dibuat secara acak) ketika database dibuat dan
            dilindungi oleh kata sandi pengguna.
          </div>

          <div className="font-bold mt-6">Persetujuan</div>
          <div className="my-3">
            Dengan mengunduh dan menggunakan Funtravia, Anda setuju dengan
            Kebijakan Privasi yang disebutkan di atas. Kebijakan Privasi dapat
            berubah. Semua amandemen akan dipublikasikan di sini.
          </div>

          <div className="font-bold mt-6">Dasar Hukum</div>
          <div className="my-3">Kami mengakses,menyimpan informasi Anda:</div>
          <div className="my-3">
            Kami menanggapi permintaan hukum yang kami yakini bahwa kami
            diwajibkan oleh undang-undang untuk melakukannya.
          </div>

          <ul className="list-disc flex flex-col gap-3">
            <li>
              Menanggapi permintaan hukum,seperti surat perintah
              penggeledahan,perintah pangadilan,atau panggilan pengadilan.
            </li>
            <li>
              Kami menanggapi permintaan hukum yang kami yakini bahwa kami
              diwajibkan oleh undang-undang untuk melakukannya.
            </li>
            <li>Kami mentaati aturan pemerintah yang berlaku</li>
            <li>Demi meningkatkan keselamatan,keamanan dan integritas.</li>
          </ul>
          <div className="mt-6">
            Kami membagikan informasi Anda kepada aparat penegak hukum, otoritas
            pemerintah, pihak ketiga jika kami yakin dengan iktikad baik bahwa
            hal itu diperlukan untuk mendeteksi, mencegah, dan mengatasi
            berbagai situasi, seperti: Penggunaan tidak sah atas Produk
            kami,Pelanggaran ketentuan dan kebijakan kami,Menyelidiki aktivitas
            mencurigakan.
          </div>

          <div className="mt-6 font-bold">​Informasi Pihak Ketiga</div>
          <div className="mt-3">
            FUNTRAVIA TIDAK MENJAMIN KEAMANAN DATA PRIBADI DAN/ATAU INFORMASI
            LAINNYA YANG ANDA BERIKAN PADA SITUS PIHAK KETIGA. Kami menerapkan
            tindakan keamanan untuk menjaga keselamatan data pribadi Anda yang
            ada. Data pribadi Anda ditampung di balik jaringan aman dan hanya
            dapat diakses oleh sejumlah orang terbatas yang memiliki hak akses
            khusus ke sistem tersebut, dan diwajibkan untuk menjaga kerahasiaan
            data pribadi tersebut. mengakses data pribadi, kami menawarkan
            penggunaan server yang aman. Semua data pribadi atau informasi
            sensitif yang Anda berikan, dienkripsi ke dalam database kami dan
            hanya bisa diakses sebagaimana yang tertera di atas.
          </div>

          <div className="mt-6 font-bold">Hak Pengguna</div>
          <div className="mt-3">
            Kami ada beberapa fiture untuk siapa saja yang boleh melihat trip
            perjalanan anda disana ada pengaturan trip perjalalan privasi (anda
            dan teman trip perjalanan) dan publik (semua orang di
            Funtravia).anda boleh tidak mengizinkan untuk mengakses kontak di
            seluler atau perangkat lainnya dan lokasi saat ini.
          </div>

          <div className="mt-6 font-bold">Perubahan pada kebijakan privasi</div>
          <div className="mt-3">
            Kami memiliki hak untuk mengganti dan mengubah Pernyataan Privasi
            pada waktu kapan saja. Semua perubahan kebijakan akan diumumkan di
            situs kami.
          </div>

          <div className="mt-6 font-bold">Hubungi kami</div>
          <div className="mt-3">
            Jika Anda memiliki pertanyaan tambahan, jangan ragu untuk
            menghubungi kami di{" "}
            <span
              className="underline text-blue-600 cursor-pointer"
              onClick={(e) => {
                window.location.href = "mailto:support@funtravia.com";
                e.preventDefault();
              }}
            >
              support@funtravia.com
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PrivacyPolicy;
