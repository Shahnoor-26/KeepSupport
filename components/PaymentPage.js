"use client";
import { React, useState, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Razorpay from "razorpay";
import { fetchPayment, fetchUser, initiate } from "@/actions/useraction";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const PaymentPage = ({ username }) => {
  const [PaymentForm, setPaymentForm] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [CurrentUser, setCurrentUser] = useState({});
  const [Payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentDone" == true)) {
      alert("Thanks for your donation!");
    }
    router.push(`/${username}`);

    if (!session) {
      router.push("/login");
    }
  }, [router, session]);

  const handleChange = (e) => {
    setPaymentForm({ ...PaymentForm, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let u = await fetchUser(username);
    setCurrentUser(u);
    let dbPayments = await fetchPayment(username);
    setPayments(dbPayments);
  };

  const pay = async (amount) => {
    let a = await initiate(amount, username, PaymentForm);
    let orderId = a.id;
    var options = {
      key: CurrentUser.razorPayId,
      amount: amount,
      currency: "INR",
      name: "KeepSupport",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: PaymentForm.name,
        email: "abc@example.com",
        contact: "1234567890",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <main className="min-h-screen font-semibold max-md:text-sm max-sm:text-xs">
        <div className="h-1 bg-slate-400"></div>
        <section className="relative">
          <img
            src={CurrentUser.coverPic}
            className="object-cover object-center w-full h-[600px] max-xl:h-[500px] max-lg:h-[400px] max-md:h-[300px] max-sm:h-[200px]"
          />
          <div className="absolute transform -translate-y-1/2 right-1/2 translate-x-1/2">
            <img
              src={CurrentUser.profilePic}
              className="h-80 w-80 max-2xl:h-60 max-2xl:w-60 max-xl:h-48 max-xl:w-48 max-lg:h-40 max-lg:w-40 max-md:h-32 max-md:w-32 max-sm:h-24 max-sm:w-24 object-cover object-center border-4 border-slate-400 rounded-full"
            />
          </div>
        </section>
        <div className="h-1 bg-slate-400"></div>
        <section className="mt-40 max-2xl:mt-32 max-xl:mt-28 max-lg:mt-24 max-md:mt-20 max-sm:mt-14 z-10 relative flex flex-col items-center justify-end text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base max-md:text-sm max-sm:text-xs space-y-1">
          <span className="text-4xl max-2xl:text-3xl max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base">
            @{username}
          </span>
          <span className="text-slate-200">Let's Support @{username}</span>
          <ul className="flex items-center space-x-2 text-slate-400">
            <li>{Payments.length} Payments</li>
            <span className="h-1 w-1 mt-0.5 rounded-full bg-white"></span>
            <li>{CurrentUser.name} has raised</li>
            <span className="h-1 w-1 mt-0.5 rounded-full bg-white"></span>
            <li>₹{Payments.reduce((a, b) => a + b.amount, 0)}</li>
          </ul>
        </section>
        <section className="h-[400px] max-md:h-[650px] my-10 flex max-md:flex-col justify-center space-x-5 max-md:space-x-0 max-md:space-y-5 max-md:items-center">
          <section className="h-full w-2/5 max-md:w-4/5 rounded-xl bg-slate-950 border-4 border-slate-400 p-4">
            <h4 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-center mb-2">
              Supporters
            </h4>
            <ul className="text-slate-400 space-y-2">
              {Payments.length == 0 && <li>No payments yet</li>}
              {Payments.map((p, i) => {
                return (
                  <li key={i} className="flex items-start space-x-2">
                    <Image
                      src="/avatar.gif"
                      width={20}
                      height={20}
                      className="w-7 h-7 max-md:h-6 max-md:w-6 max-sm:h-5 max-sm:w-5 bg-slate-900 rounded-full p-1 border-[0.5px] border-slate-200"
                      alt="Avatar"
                      unoptimized
                    />
                    <p>
                      <span className="text-blue-400 ">{p.name}</span> donated{" "}
                      <span className="text-green-400 ">{p.amount}</span> with a
                      message "{p.message}"
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
          <section className="h-full w-2/5 max-md:w-4/5 rounded-xl bg-slate-950 border-4 border-slate-400 p-4">
            <h4 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-center mb-2">
              Contribute Your Support
            </h4>
            <form className="h-[90%] w-full flex flex-col justify-evenly items-center">
              <label htmlFor="name" className="w-full">
                <input
                  onChange={handleChange}
                  value={PaymentForm.name}
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  id="name"
                  className="w-full h-10 max-md:h-8 rounded-md max-md:rounded-sm px-3 bg-slate-900"
                  required
                />
              </label>
              <label htmlFor="message" className="w-full">
                <input
                  onChange={handleChange}
                  value={PaymentForm.message}
                  placeholder="Enter a message"
                  type="text"
                  name="message"
                  id="message"
                  className="w-full h-10 max-md:h-8 rounded-md max-md:rounded-sm px-3 bg-slate-900"
                  required
                />
              </label>
              <label htmlFor="amount" className="w-full">
                <input
                  onChange={handleChange}
                  value={PaymentForm.amount}
                  placeholder="Enter an amount"
                  type="text"
                  name="amount"
                  id="amount"
                  className="w-full h-10 max-md:h-8 rounded-md max-md:rounded-sm px-3 bg-slate-900"
                />
              </label>
              <button
                onClick={() => {
                  pay(Number.parseInt(PaymentForm.amount) * 100);
                }}
                disabled={
                  PaymentForm.name?.length <= 2 ||
                  PaymentForm.message?.length <= 2 ||
                  PaymentForm.amount?.length <= 0 ||
                  isNaN(PaymentForm.amount) ||
                  PaymentForm.amount <= 0
                }
                className="w-2/5 bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white hover:text-black py-2 max-lg:px-4 max-md:px-3 px-5 border border-white hover:border-slate-400 rounded-full disabled:bg-slate-800"
              >
                Pay
              </button>
              <div className="flex items-center justify-center w-full space-x-2">
                <button
                  onClick={() => {
                    pay(1000);
                  }}
                  className="w-1/4 max-lg:w-full bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white  hover:text-black py-2 max-lg:px-3 max-md:px-2 px-4 border border-white hover:border-slate-400 rounded-full"
                >
                  Pay ₹10
                </button>
                <button
                  onClick={() => {
                    pay(2000);
                  }}
                  className="w-1/4 max-lg:w-full bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white  hover:text-black py-2 max-lg:px-3 max-md:px-2 px-4 border border-white hover:border-slate-400 rounded-full"
                >
                  Pay ₹20
                </button>
                <button
                  onClick={() => {
                    pay(5000);
                  }}
                  className="w-1/4 max-lg:w-full bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white  hover:text-black py-2 max-lg:px-3 max-md:px-2 px-4 border border-white hover:border-slate-400 rounded-full"
                >
                  Pay ₹50
                </button>
              </div>
            </form>
          </section>
        </section>
      </main>
    </>
  );
};

export default PaymentPage;
