"use client";
import { React, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchUser, updateProfile } from "@/actions/useraction";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [Form, setForm] = useState({});

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [router, session]);

  const getData = async () => {
    let u = await fetchUser(session.user.name);
    setForm(u);
  };

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    let a = await updateProfile(e, session.user.name);
    alert("Profile Updated");
  };

  return (
    <>
      <div className="h-1 bg-slate-400"></div>
      <main className="w-full min-h-screen max-md:text-sm max-sm:text-xs font-semibold">
        <h1 className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text text-center font-bold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl mt-10 mb-10">
          Welcome to your Profile
        </h1>
        <form
          action={handleSubmit}
          className="h-full w-3/4 max-lg:w-[90%] mx-auto flex flex-col text-lg max-md:text-base max-sm:text-sm text-slate-300 space-y-5 mb-10"
        >
          <label
            htmlFor="name"
            className="flex max-sm:flex-col items-center max-sm:items-start w-full h-10 max-sm:h-14 max-sm:space-y-1"
          >
            <span className="w-1/4 max-lg:w-[28%] max-sm:w-full">Name :</span>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={Form.name ? Form.name : ""}
              className="w-full h-full rounded-md px-2 text-slate-200 bg-slate-800 border border-slate-500"
              placeholder="Enter your name"
              required
            />
          </label>
          <label
            htmlFor="email"
            className="flex max-sm:flex-col items-center max-sm:items-start w-full h-10 max-sm:h-14 max-sm:space-y-1"
          >
            <span className="w-1/4 max-lg:w-[28%] max-sm:w-full">Email :</span>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={Form.email ? Form.email : ""}
              className="w-full h-full rounded-md px-2 text-slate-200 bg-slate-800 border border-slate-500"
              placeholder="Enter your email address"
              required
            />
          </label>
          <label
            htmlFor="username"
            className="flex max-sm:flex-col items-center max-sm:items-start w-full h-10 max-sm:h-14 max-sm:space-y-1"
          >
            <span className="w-1/4 max-lg:w-[28%] max-sm:w-full">
              Username :
            </span>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={Form.username ? Form.username : ""}
              className="w-full h-full rounded-md px-2 text-slate-200 bg-slate-800 border border-slate-500"
              placeholder="Enter your username"
              required
            />
          </label>
          <label
            htmlFor="profilePic"
            className="flex max-sm:flex-col items-center max-sm:items-start w-full h-10 max-sm:h-14 max-sm:space-y-1"
          >
            <span className="w-1/4 max-lg:w-[28%] max-sm:w-full">
              Profile Picture :
            </span>
            <input
              type="url"
              name="profilePic"
              id="profilePic"
              onChange={handleChange}
              value={Form.profilePic ? Form.profilePic : ""}
              className="w-full h-full rounded-md px-2 text-slate-200 bg-slate-800 border border-slate-500"
              placeholder="Enter the URL of your profile picture"
            />
          </label>
          <label
            htmlFor="coverPic"
            className="flex max-sm:flex-col items-center max-sm:items-start w-full h-10 max-sm:h-14 max-sm:space-y-1"
          >
            <span className="w-1/4 max-lg:w-[28%] max-sm:w-full">
              Cover Picture :
            </span>
            <input
              type="url"
              name="coverPic"
              id="coverPic"
              onChange={handleChange}
              value={Form.coverPic ? Form.coverPic : ""}
              className="w-full h-full rounded-md px-2 text-slate-200 bg-slate-800 border border-slate-500"
              placeholder="Enter the URL of your cover picture"
            />
          </label>
          <label
            htmlFor="razorPayId"
            className="flex max-sm:flex-col items-center max-sm:items-start w-full h-10 max-sm:h-14 max-sm:space-y-1"
          >
            <span className="w-1/4 max-lg:w-[28%] max-sm:w-full">
              RazorPay ID :
            </span>
            <input
              type="text"
              name="razorPayId"
              id="razorPayId"
              onChange={handleChange}
              value={Form.razorPayId ? Form.razorPayId : ""}
              className="w-full h-full rounded-md px-2 text-slate-200 bg-slate-800 border border-slate-500"
              placeholder="Enter your RazorPay ID"
            />
          </label>
          <label
            htmlFor="razorPaySec"
            className="flex max-sm:flex-col items-center max-sm:items-start w-full h-10 max-sm:h-14 max-sm:space-y-1"
          >
            <span className="w-1/4 max-lg:w-[28%] max-sm:w-full">
              RazorPay Secret :
            </span>
            <input
              type="text"
              name="razorPaySec"
              id="razorPaySec"
              onChange={handleChange}
              value={Form.razorPaySec ? Form.razorPaySec : ""}
              className="w-full h-full rounded-md px-2 text-slate-200 bg-slate-800 border border-slate-500"
              placeholder="Enter your RazorPay Secret"
            />
          </label>

          <div className="flex w-2/5 space-x-5 mx-auto h-fit">
            <input
              type="submit"
              value="Save"
              className="bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white hover:text-black border border-white hover:border-slate-400 rounded-full w-full py-2"
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
