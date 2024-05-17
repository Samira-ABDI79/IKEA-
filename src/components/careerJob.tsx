import React from "react";

export default function CareerJob() {
  return (
    <>
      <div className="bg-ikea-gray1 rounded-lg grid grid-cols-2 grid-rows-1 ">
        <div className=" flex justify-center items-center">
          <div className="w-3/4 ">
            <h2 className="font-bold text-5xl leading-108">
              Do you see a career at IKEA? We do!
            </h2>
            <p className="text-base mt-6 mb-5">
              Our vision is to create a better everyday life for the many
              people. We believe we can make a big difference for people with
              big dreams and thin wallets, and we want to do it within the
              limits of our planet. This ambition challenges us to be part of
              making sustainable home solutions affordable and accessible to
              millions of people around the world.
            </p>
            <button className="bg-ikea-darker text-ikea-white cursor-pointer font-extrabold text-sm h-14 w-full flex justify-center items-center rounded-4xl ">
              <span className="btn-global svelte-y0719b">
                Explore available jobs
              </span>
            </button>
          </div>
        </div>
        <img
          src="/images/career_at_ikea.avif"
          alt="An IKEA co-worker stands with their back to the camera. Another co-worker is speaking to her colleague."
        />
      </div>
    </>
  );
}
