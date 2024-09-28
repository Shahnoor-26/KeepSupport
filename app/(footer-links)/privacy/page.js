import Link from "next/link";
import React from "react";

const Privacy = () => {
  return (
    <main className="min-h-screen max-md:text-sm max-sm:text-xs font-semibold text-wrap text-center">
      <div className="h-1 bg-slate-400"></div>
      <article className="text-slate-400">
      <h1 className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text font-bold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl mt-10 mb-5">
          Privacy Policy
        </h1>
        <p className="mb-2 text-slate-200 text-lg max-md:text-base max-sm:text-sm">
          Effective Date : September 22, 2024
        </p>
        <p className="w-9/12 max-lg:w[90%] mx-auto mb-10">
          At KeepSupport, we prioritize your privacy and are dedicated to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and safeguard your data.
        </p>

        <h4 className="text-2xl max-md:text-xl text-slate-300 mb-4 text-center">
          Information We Collect
        </h4>
        <ul className="w-1/2 max-lg:w-9/12 mx-auto text-start list-disc space-y-2 mb-10">
          <li>
            We may collect personal details such as your name, email address,
            phone number, and other identifying information.
          </li>
          <li>
            Payments are processed securely through trusted payment processors
            like RazorPay, and we do not store your payment details.
          </li>
          <li>
            We collect information about how you interact with our platform,
            including your IP address, browser type, and access times.
          </li>
        </ul>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          How We Use Your Information
        </h4>
        <ul className="w-1/2 max-lg:w-9/12 mx-auto text-start list-disc space-y-2 mb-10">
          <li>We utilize your information for various purposes, including :</li>
          <li>Service Delivery : To provide and maintain our services.</li>
          <li>
            Updates : To notify you about changes to our services or your
            account.
          </li>
          <li>
            Customer Support : To respond to your inquiries and provide
            assistance.
          </li>
          <li>
            Improvement : To gather insights and data to enhance our services
            and user experience.
          </li>
        </ul>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          Data Security
        </h4>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          We implement industry-standard encryption and security measures to
          protect your personal information and payment data. We regularly
          review our practices to ensure your information remains secure.
        </p>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          Your Rights
        </h4>
        <ul className="w-1/2 max-lg:w-9/12 mx-auto text-start list-disc space-y-2 mb-10">
          <li>Access : Request a copy of your personal information.</li>
          <li>Update : Correct any inaccuracies in your data.</li>
          <li>Delete : Request the deletion of your personal information.</li>
        </ul>
        <div className="w-9/12 max-lg:w-[90%] text-lg max-lg:text-base max-md:text-sm max-sm:text-xs mx-auto mb-10">
          <p className="text-slate-200">
            To exercise any of these rights, please contact us at
          </p>
          <Link
            href={"mailto:support@keepsupport.com"}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            support@keepsupport.com
          </Link>
        </div>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          Changes to This Policy
        </h4>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-5">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and your continued use of our services after
          modifications indicates your acceptance of the new terms.
        </p>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-5">
          For further details, please read our full{" "}
          <Link
            href={"/privacy"}
            className="text-blue-400 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          Feel free to customize any sections further to align with your brand's
          voice!
        </p>
      </article>
    </main>
  );
};

export default Privacy;

export const metadata = {
  title: "Privacy & Policy - KeepSupport",
  description:
    "At KeepSupport, your privacy is our priority. Read our Privacy Policy to understand how we collect, use, and protect your information while ensuring transparency and security on our crowdfunding platform.",
};
