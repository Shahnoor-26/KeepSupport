import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen max-md:text-sm max-sm:text-xs font-semibold text-wrap text-center">
      <div className="h-1 bg-slate-400"></div>
      <article className="text-slate-400">
      <h1 className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text font-bold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl mt-10 mb-5">
          Contact Us
        </h1>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          We're here to help! If you have any questions, feedback, or need
          support, please reach out to us using the form below or through our
          other contact methods.
        </p>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          General Inquiries
        </h4>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-8">
          For general questions about our platform, features, or services, feel
          free to email us at :{" "}
          <Link
            href={"mailto:support@keepsupport.com"}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            support@keepsupport.com
          </Link>
        </p>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          Support Requests
        </h4>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          If you need assistance with your account or any technical issues,
          please submit a support ticket using the form below.
        </p>
      </article>
      <form
        method="POST"
        action="mailto:support@keepsupport.com"
        className="w-1/2 max-lg:w-9/12 max-md:w-[90%] rounded-xl bg-slate-950 border border-slate-600 mx-auto flex flex-col items-center text-slate-400 gap-4 mb-10"
      >
        <h4 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-slate-300 mt-5">
          Contact Form
        </h4>
        <label
          htmlFor="name"
          className="w-3/4 max-md:w-[90%] flex items-center"
        >
          <span className="w-1/5 max-md:w-1/4">Name :</span>
          <input
            className="w-full h-8 max-md:h-6 text-slate-200 rounded-sm px-2 bg-slate-900"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
        <label
          htmlFor="email"
          className="w-3/4 max-md:w-[90%] flex items-center"
        >
          <span className="w-1/5 max-md:w-1/4">Email :</span>
          <input
            className="w-full h-8 max-md:h-6 text-slate-200 rounded-sm px-2 bg-slate-900"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </label>
        <label htmlFor="msg" className="w-3/4 max-md:w-[90%] flex">
          <span className="w-1/5 max-md:w-1/4">Message :</span>
          <textarea
            className="w-full h-28 max-md:h-20 text-slate-200 rounded-sm px-2 bg-slate-900"
            name="msg"
            id="msg"
            placeholder="Your message"
            required
          ></textarea>
        </label>
        <div className="flex items-center justify-evenly w-1/2 max-md:w-4/5 mb-5">
          <button
            type="submit"
            className="flex justify-center items-center bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white hover:text-black py-2 px-6 border border-white hover:border-slate-400 rounded-xl"
          >
            Submit
          </button>
          <button
            type="reset"
            className="flex justify-center items-center bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white hover:text-black py-2 px-6 border border-white hover:border-slate-400 rounded-xl"
          >
            Reset
          </button>
        </div>
      </form>
      <article className="max-md:w-[90%] mx-auto text-slate-400 space-x-2 space-y-4 mb-10">
      <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          Social Media
        </h4>
        <p>
          Follow us on our social channels for updates, tips, and community
          support
        </p>
        <span className="text-slate-200">Twitter :</span>
        <Link
          target="_blank"
          href={"https://twitter.com/"}
          className="text-blue-400 hover:underline"
        >
          @KeepSupport
        </Link>
        <span className="text-slate-200">Facebook :</span>
        <Link
          target="_blank"
          href={"https://facebook.com/"}
          className="text-blue-400 hover:underline"
        >
          facebook.com/KeepSupport
        </Link>
        <span className="text-slate-200">Instagram :</span>
        <Link
          target="_blank"
          href={"https://instagram.com/"}
          className="text-blue-400 hover:underline"
        >
          @KeepSupport
        </Link>
        <p>
          Thank you for being a part of our community! We appreciate your
          support and look forward to hearing from you.
        </p>
        <p>
          Feel free to customize it to better match your branding and specific
          needs!
        </p>
      </article>
    </main>
  );
};

export default Contact;

export const metadata = {
  title: "Contact Us - KeepSupport",
  description:
    "Have questions or need assistance? Reach out to the KeepSupport team! We're here to help you with any inquiries about our crowdfunding platform, features, or support. Connect with us today!",
};
