import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white" id="privacypolicy">
      <div className="container justify-center items-center mx-auto px-4 md:px-24 flex flex-1 flex-col py-12 bg-white text-center">
        <h1 className="text-4xl font-semibold pb-6">Privacy &amp; Policy</h1>

        <p
          style={{ textAlign: "justify", textJustify: "inter-word" }}
          className="text-lg text-justify lg:text-center"
        >
          Adanya Kebijakan Privasi ini adalah komitmen nyata dari Funtravia
          untuk menghargai dan melindungi setiap informasi pribadi Pengguna
          Aplikasi ini. Kebijakan ini menjadi acuan yang mengatur dan melindungi
          penggunaan data dan informasi penting para pengguna, yang telah
          dikumpulkan pada saat mendaftar, mengakses dan menggunakan layanan
          disini, seperti alamat email, nomor telepon, foto, gambar, dan
          lain-lain.
        </p>

        <Link href="/privacypolicy">
          <button className="py-3 px-12 rounded-md duration-300 hover:bg-pink bg-light-green text-white my-6">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
