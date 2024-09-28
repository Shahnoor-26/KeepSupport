import React from "react";
import Link from "next/link";

const Terms = () => {
  return (
    <main className="min-h-screen max-md:text-sm max-sm:text-xs font-semibold text-wrap text-center">
      <div className="h-1 bg-slate-400"></div>
      <article className="text-slate-400">
        <h1 className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text font-bold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl mt-10 mb-5">
          Terms and Conditions
        </h1>
        <p className="mb-2 text-slate-200 text-lg max-md:text-base max-sm:text-sm">
          Effective Date : September 22, 2024
        </p>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          Welcome to KeepSupport. By using our website, you agree to comply with
          and be bound by the following terms and conditions:
        </p>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          User Responsibilities
        </h4>
        <ul className="w-1/2 max-lg:w-9/12 mx-auto text-start list-disc space-y-2 mb-10">
          <li>
            You must provide accurate and complete information during
            registration.
          </li>
          <li>
            You agree to use the platform in accordance with all applicable laws
            and regulations.
          </li>
        </ul>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          Prohibited Activities
        </h4>

        <ul className="w-1/2 max-lg:w-9/12 mx-auto text-start list-disc space-y-2 mb-10">
          <li>Engaging in fraudulent activities or impersonation.</li>
          <li>Posting harmful, misleading, or illegal content.</li>
          <li>Disrupting the operation of the website or its services.</li>
        </ul>

        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          Intellectual Property
        </h4>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          All content on this site, including text, graphics, logos, and
          software, is the property of KeepSupport or its content suppliers and
          is protected by intellectual property laws. Unauthorized use of any
          content is prohibited.
        </p>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          Disclaimer
        </h4>
        <p className="w-9/12 mx-auto mb-10">
          KeepSupport does not guarantee the success of any campaigns or
          services offered through the platform. Contributions and use of the
          site are made at your own risk.
        </p>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          Changes to Terms
        </h4>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          We may update these terms from time to time. Continued use of the site
          constitutes acceptance of the revised terms. We encourage you to
          review this page periodically for the latest information.
        </p>
        <h6 className="text-slate-200 w-9/12 max-lg:w-[90%] mx-auto mb-10">
          For more details, please read our full{" "}
          <Link href={"/terms"} className="text-blue-400 hover:underline">
            Terms & Conditions
          </Link>
          .
        </h6>
      </article>
    </main>
  );
};

export default Terms;

export const metadata = {
  title: "Terms and Conditions - KeepSupport",
  description:
    "Review the Terms and Conditions for using KeepSupport. This page outlines your rights and responsibilities while engaging with our crowdfunding platform. Stay informed and ensure a smooth experience with us!",
};
