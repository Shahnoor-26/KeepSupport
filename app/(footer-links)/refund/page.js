import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen max-md:text-sm max-sm:text-xs font-semibold text-wrap text-center">
      <div className="h-1 bg-slate-400"></div>
      <article className="text-slate-400">
        <h1 className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text font-bold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl mt-10 mb-5">
          Cancellation and Refund Policy
        </h1>
        <p className="mb-2 text-slate-200 text-lg max-md:text-base max-sm:text-sm">
          Effective Date : September 22, 2024
        </p>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          At KeepSupport, we prioritize your satisfaction and aim to provide a
          transparent experience. Below are our policies regarding cancellations
          and refunds.
        </p>
        <h4 className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base text-slate-300 mb-4">
          For Contributors
        </h4>
        <h6 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-neutral-300 mb-2">
          Non-Refundable Contributions
        </h6>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-5">
          Contributions made to crowdfunding campaigns are typically
          non-refundable. Your support directly aids the projects you believe
          in.
        </p>
        <h6 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-neutral-300 mb-2">
          Reporting Fraudulent Campaigns
        </h6>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          If you suspect that you've contributed to a fraudulent campaign,
          please contact us immediately at - (
          <Link
            href={"mailto:support@keepsupport.com"}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            support@keepsupport.com
          </Link>
          ) . We take these matters seriously and will assist you promptly.
        </p>
        <h4 className="text-2xl max-md:text-xl text-slate-300 mb-5">
          For Campaign Creators
        </h4>
        <h6 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-neutral-300 mb-2">
          Campaign Cancellation
        </h6>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-5">
          If you decide to cancel your campaign, please notify our support team
          as soon as possible. We'll guide you through the process to ensure
          everything is handled smoothly.
        </p>
        <h6 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-neutral-300 mb-2">
          Funds Already Distributed
        </h6>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-5">
          Please be aware that any funds already disbursed to you may not be
          refundable.
        </p>
        <h6 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-neutral-300 mb-2">
          Refund Exceptions
        </h6>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          If a campaign does not meet its funding target, contributions may be
          eligible for refunds. This ensures that supporters are protected.
        </p>
        <h5 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-neutral-300 mb-2">
          Need Assistance?
        </h5>
        <p className="w-9/12 max-lg:w-[90%] mx-auto mb-10">
          If you have any questions or require further clarification regarding
          our cancellation and refund policies, don't hesitate to reach out to
          us at - (
          <Link
            href={"mailto:support@keepsupport.com"}
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            support@keepsupport.com
          </Link>
          ) . We're here to help!
        </p>
      </article>
    </main>
  );
};

export default page;

export const metadata = {
  title: "Refund and Cancellation Policy - KeepSupport",
  description:
    "Understand our Refund and Cancellation Policy at KeepSupport. Learn about the process and terms for cancellations and refunds to ensure a seamless experience on our crowdfunding platform. Your satisfaction is our priority!",
};
