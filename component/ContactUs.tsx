import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-light-white py-8" id="contactus">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center text-center">
        <h1 className="lg:hidden text-4xl md:text-5xl pb-12 font-bold">
          Contact Us
        </h1>
        <h3 className="lg:hidden pb-8 text-xl uppercase">
          Have a question? Give us a call or fill out the contact form -
          we&apos;d love to hear from you
        </h3>

        <div className="hidden lg:block w-1/2 text-left mx-12 px-24">
          <h1 className="text-4xl md:text-5xl pb-12 font-bold text-gray">
            Want to ask our team directly?
          </h1>
          <h3 className="pb-8 text-xl">
            Ask anything here instead. Our team will get back to you within 24
            hours at maximum
          </h3>
        </div>

        <form
          className="flex flex-1 flex-col w-full"
          method="POST"
          action="https://formsubmit.co/data.funtravia@gmail.com"
          encType="multipart/form-data"
        >
          <input
            className="py-5 my-4 px-5 border-2 border-white rounded-md drop-shadow-[0_5px_3px_rgba(0,0,0,0.1)] focus:outline-none focus:border-light-green hover:border-light-green duration-300"
            type="text"
            name="Nama"
            placeholder="Name"
          />
          <input
            className="py-5 my-4 px-5 border-2 border-white rounded-md drop-shadow-[0_5px_3px_rgba(0,0,0,0.1)] focus:outline-none focus:border-light-green hover:border-light-green duration-300"
            type="email"
            name="Email"
            placeholder="Email"
          />
          <input
            className="py-5 my-4 px-5 border-2 border-white rounded-md drop-shadow-[0_5px_3px_rgba(0,0,0,0.1)] focus:outline-none focus:border-light-green hover:border-light-green duration-300"
            type="text"
            name="Judul"
            placeholder="Subject"
          />
          <textarea
            className="py-5 my-4 px-5 border-2 border-white rounded-md drop-shadow-[0_5px_3px_rgba(0,0,0,0.1)] focus:outline-none focus:border-light-green hover:border-light-green duration-300"
            placeholder="Message"
            name="Pesan"
            cols={5}
            rows={10}
          />
          <div className="w-full flex justify-center lg:justify-end">
            <input
              className="cursor-pointer duration-300 hover:bg-pink py-3 rounded-md px-32 bg-light-green text-white my-6"
              type="submit"
              placeholder="Submit"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
