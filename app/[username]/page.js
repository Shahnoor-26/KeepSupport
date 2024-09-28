import React from "react";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";

const username = async ({ params }) => {
  const checkUser = async () => {
    await connectDB();
    let you = await User.findOne({ username: params.username });
    if (!you) {
      return notFound();
    }
  };
  await checkUser();
  return (
    <>
      <PaymentPage username={params.username} />
    </>
  );
};

export default username;

export async function generateMetadata({params}) {
  return {
    title: `${params.username} - KeepSupport`,
    description:
      "Explore profile to learn more about their journey. Show your support by making a donation and help them achieve their goals. Your contribution makes a difference!",
  }
}