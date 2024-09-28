"use server";
import connectDB from "@/db/connectDB";
import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import User from "@/models/User";

export const initiate = async (amount, to_username, paymentForm) => {
  await connectDB();
  let user = await User.findOne({ username: to_username });
  const secret = user.razorPaySec;

  var instance = new Razorpay({
    key_id: user.razorPayId,
    key_secret: secret,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let x = await instance.orders.create(options);

  await Payment.create({
    oid: x.id,
    amount: amount / 100,
    to_user: to_username,
    name: paymentForm.name,
    message: paymentForm.message,
  });
  return x;
};

export const fetchUser = async (username) => {
  await connectDB();
  let u = await User.findOne({ username: username }).lean();
  return u;
};

export const fetchPayment = async (username) => {
  await connectDB();
  let p = await Payment.find({ to_user: username, done: true })
    .sort({ amount: -1 })
    .limit(10)
    .lean();
  return p;
};

export const updateProfile = async (data, oldUsername) => {
  await connectDB();
  let newData = Object.fromEntries(data);

  if (oldUsername !== newData.username) {
    let u = await User.findOne({ username: newData.username });
    if (u) {
      return { error: "Username already exists!" };
    }
    await User.updateOne({ email: newData.email }, newData);
    await Payment.updateMany(
      { to_user: oldUsername },
      { to_user: newData.username }
    );
  }
  await User.updateOne({ email: newData.email }, newData);
};
