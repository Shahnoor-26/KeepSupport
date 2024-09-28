import React from "react";

const About = () => {
  return (
    <main className="min-h-screen max-md:text-sm max-sm:text-xs font-semibold text-wrap text-center">
      <div className="h-1 bg-slate-400"></div>
      <article className="w-[90%] mx-auto text-slate-300">
        <h1 className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text font-bold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl mt-10 mb-5">
          About Us
        </h1>
        <h3 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm text-slate-200 mb-4">
          Empowering Creativity, One Idea at a Time
        </h3>
        <p className="mb-5">
          At KeepSupport, we are wholeheartedly committed to cultivating a
          vibrant community where developers, creators, and influencer can truly
          thrive. Our crowdfunding platform serves as a powerful catalyst that
          connects visionary individuals with supporters who not only believe in
          their dreams but also want to actively participate in bringing those
          visions to life. We understand that financial backing is essential for
          creativity and innovation, and we strive to make this journey as
          seamless and fulfilling as possible for both creators and their
          supporters.
        </p>
        <p className="mb-5">
          Our mission is to empower every developer, content creator, artist,
          and influencer by providing them with the resources they need to
          succeed. Whether you're designing the next groundbreaking app,
          producing captivating videos, creating breathtaking visual art, or
          sharing your unique perspective with the world, KeepSupport is here to
          uplift you every step of the way.
        </p>
        <p className="mb-5">
          We believe in the extraordinary potential of community support and the
          magic that unfolds when passionate individuals unite for a common
          cause. Our platform is more than just a crowdfunding site; it's a
          thriving space where dreams come alive, innovative ideas flourish, and
          creativity knows no bounds. By providing a straightforward and
          user-friendly way for patrons to contribute, we're creating an
          ecosystem that ignites creativity and drives meaningful progress.
        </p>
        <p className="mb-20">
          At KeepSupport, we take immense pride in helping creators realize
          their full potential. We are dedicated to harnessing technology to
          build a community that values and invests in creative endeavors. When
          you join us, you're not just a supporter; you're part of a movement
          that celebrates and uplifts the remarkable talents of developers,
          creators, and influencer. Together, let's empower creativity, one idea
          at a time.
        </p>
      </article>
      <div className="h-1 bg-slate-400"></div>
      <article className="w-[90%] mx-auto  text-slate-300">
        <h4 className="text-xl max-lg:text-lg max-md:text-base max-sm:text-sm font-bold text-slate-400 mt-10 mb-2">
          Why Choose Us?
        </h4>
        <h6 className="bg-gradient-to-b from-white to-slate-400 text-transparent bg-clip-text font-bold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl mb-5">
          Ignite Creativity and Innovation
        </h6>
        <p className="w-3/5 max-lg:w-4/5 mx-auto text-slate-400">
          At KeepSupport, you have the unique opportunity to help bring
          groundbreaking projects to life. Your contribution isn't just a
          donation; it's an investment in the future of creativity and
          innovation.
        </p>
      </article>
      <div className="flex items-center justify-evenly max-lg:flex-col max-lg:space-y-5 mt-10">
        <div className="h-60 max-md:h-52 w-[28%] max-lg:w-1/2 max-sm:w-3/4 flex flex-col items-center bg-slate-900 shadow border-[0.5px] border-slate-600 rounded-xl px-2">
          <button className="h-10 w-10 mt-4 mb-2 flex justify-center items-center rounded-md bg-gradient-to-b from-slate-600 to-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
              <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
              <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
              <line x1="17" y1="17" x2="17" y2="17.01"></line>
            </svg>
          </button>
          <h6 className=" text-slate-200 mb-2">Tailored Expression</h6>
          <p className="text-slate-300">
            Make your mark by personalizing your campaign page to reflect your
            unique vision. Choose color schemes and fonts that resonate with
            your style, creating a campaign that feels authentically yours.
          </p>
        </div>
        <div className="h-60 max-md:h-52 w-[28%] max-lg:w-1/2 max-sm:w-3/4 flex flex-col items-center bg-slate-900 shadow border-[0.5px] border-slate-600 rounded-xl px-2">
          <button className="h-10 w-10 mt-4 mb-2 flex justify-center items-center rounded-md bg-gradient-to-b from-slate-600 to-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
            </svg>
          </button>
          <h6 className=" text-slate-200 mb-2">Optimized Performance</h6>
          <p className="text-slate-300">
            Our platform is designed for speed and efficiency, ensuring your
            supporters can access campaigns easily and engage with the ideas
            that inspire them.
          </p>
        </div>
        <div className="h-60 max-md:h-52 w-[28%] max-lg:w-1/2 max-sm:w-3/4 flex flex-col items-center bg-slate-900 shadow border-[0.5px] border-slate-600 rounded-xl px-2">
          <button className="h-10 w-10 mt-4 mb-2 flex justify-center items-center rounded-md bg-gradient-to-b from-slate-600 to-slate-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
              <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
              <polyline points="12 8 7 3 3 7 8 12"></polyline>
              <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
              <polyline points="16 12 21 17 17 21 12 16"></polyline>
              <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
            </svg>
          </button>
          <h6 className=" text-slate-200 mb-2">Comprehensive Features</h6>
          <p className="text-slate-300">
            We offer a robust suite of tools to ensure your campaign's success,
            from insightful analytics to dedicated support resources, empowering
            you to focus on what you do best—creating!
          </p>
        </div>
      </div>
      <p className=" text-slate-400 w-3/4 max-lg:w-4/5 mx-auto my-10">
        Join us at KeepSupport and feel the pride of contributing to a community
        that values creativity and innovation. Together, let's make a lasting
        impact and celebrate the incredible talents that shape our world!
      </p>
    </main>
  );
};

export default About;

export const metadata = {
  title:
    "About KeepSupport - Empowering Creators Through Community Collaboration",
  description:
    "Discover KeepSupport, the crowdfunding platform that connects creators, developers, and influencer with supporters to bring innovative projects to life. Join our vibrant community and help fuel creativity and collaboration today!",
};
