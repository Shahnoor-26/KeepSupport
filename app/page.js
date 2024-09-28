import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-screen max-md:text-sm max-sm:text-xs text-center">
        <div className="h-1 bg-slate-400"></div>
        <section className="h-[500px] max-md:w-[95%] max-lg:w-[90%] mx-auto flex flex-col justify-center items-center">
          <h1 className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text font-bold text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            KeepSupport
          </h1>
          <p className="font-semibold text-xl max-md:text-lg max-sm:text-base mt-5 max-md:mt-4 max-sm:mt-3">
            Your go-to crowdfunding platform for creators.
          </p>
          <p className="font-semibold text-xl max-md:text-lg max-sm:text-base text-slate-400">
            Connect with your fans and followers to bring your vision to life.
            Start Now!
          </p>
          <div className="m-10 max-md:m-8 max-sm:m-6 space-x-5">
            <Link href={"/login"}>
              <button className="bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white font-semibold hover:text-black py-2 px-5 border border-white hover:border-slate-400 rounded-full">
                Start Here
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="bg-transparent hover:bg-gradient-to-b from-white to-slate-400 text-white font-semibold hover:text-black py-2 px-5 border border-white hover:border-slate-400 rounded-full">
                Read More
              </button>
            </Link>
          </div>
        </section>
        <div className="h-1 bg-slate-400"></div>
        <section className="h-[450px] max-sm:h-[600px] max-md:w-[95%] max-lg:w-[90%] mx-auto flex flex-col justify-center items-center">
          <h3 className="text-2xl max-md:text-xl max-sm:text-lg font-bold mb-16 max-lg:mb-14 max-md:mb-12 max-sm:mb-10">
            Your Fans and Followers Can Support You
          </h3>
          <div className="w-full flex max-sm:flex-col max-sm:space-y-5 justify-evenly">
            <div className="flex flex-col items-center mx-10 max-lg:mx-8 max-md:mx-6 max-sm:mx-4">
              <Image
                width={20}
                height={20}
                src={"/man.gif"}
                alt="Man-Image"
                className="h-28 w-fit max-lg:h-24 max-md:h-20 max-sm:h-16 rounded-full"
                unoptimized
              />
              <h4 className="text-lg max-md:text-base max-sm:text-sm font-semibold mt-2">Fund Yourself</h4>
              <span className="font-semibold text-slate-400">
                Your fans are ready to help you thrive with KeepSupport!
              </span>
            </div>
            <div className="flex flex-col items-center mx-10 max-lg:mx-8 max-md:mx-6 max-sm:mx-4">
              <Image
                width={20}
                height={20}
                src={"/dollar.gif"}
                alt="Dollar-Image"
                className="h-28 w-fit max-lg:h-24 max-md:h-20 max-sm:h-16 rounded-full"
                unoptimized
              />
              <h4 className="text-lg max-md:text-base max-sm:text-sm font-semibold mt-2">Fund Yourself</h4>
              <span className="font-semibold text-slate-400">
                Embrace the power of your audience and fuel your creativity
                together!
              </span>
            </div>
            <div className="flex flex-col items-center mx-10 max-lg:mx-8 max-md:mx-6 max-sm:mx-4">
              <Image
                width={20}
                height={20}
                src={"/group.gif"}
                alt="Group-Image"
                className="h-28 w-fit max-lg:h-24 max-md:h-20 max-sm:h-16 rounded-full"
                unoptimized
              />
              <h4 className="text-lg max-md:text-base max-sm:text-sm font-semibold mt-2">Fund Yourself</h4>
              <span className="font-semibold text-slate-400">
                Leverage your fans support and watch your dreams come to life!
              </span>
            </div>
          </div>
        </section>
        <div className="h-1 bg-slate-400"></div>
        <article className="h-[450px] max-sm:h-[550px] w-[90%] mx-auto flex flex-col items-center justify-evenly">
          <h5 className="text-2xl max-md:text-xl max-sm:text-lg font-semibold">Discover KeepSupport</h5>
          <p className=" font-semibold text-slate-200">
            At KeepSupport, we are passionately dedicated to empowering the
            dreamers, the creators, and the innovators. Our mission is to
            connect talented individuals with the supporters who believe in
            their vision. We've built a vibrant platform where projects and
            ideas can thrive, fueled by the financial backing that makes
            creativity possible.
          </p>
          <p className=" font-semibold text-slate-200">
            We know that the path of a developer crafting the next
            groundbreaking app, a content creator weaving captivating stories,
            or an influencer inspiring their audience can be challenging. That's
            why we're here—to help you focus on what you love most: creating.
            With KeepSupport, you have the resources you need to bring your
            dreams to life and share them with the world.
          </p>
          <p className=" font-semibold text-slate-200">
            At the heart of KeepSupport is our belief in the extraordinary power
            of community. Together, we can transform aspirations into reality,
            fostering a culture of creativity and innovation. When patrons and
            creators unite, incredible things happen. Join us in this exciting
            journey, and let's make magic happen, one project at a time!
          </p>
        </article>
      </main>
    </>
  );
}
