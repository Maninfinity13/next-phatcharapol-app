"use client";

import React from "react";
import CardProfile from "@/components/cardprofile";
import Sidebar from "@/components/sidebar";

export default function ContactMePage() {
  return (
    <div className="flex min-h-screen bg-[#1E1E1E] text-white">
      {/* Left Card */}
      <div className="flex flex-col items-center justify-center p-8 bg-[#1F1F1F] w-1/4">
        <CardProfile />
      </div>

      {/* Main Form */}
      <div className="flex-1 flex flex-col mt-20 p-12">
        <h3 className="mb-8 text-7xl font-bold">
          <span className="text-white">Contact </span>
          <span className="text-orange-500">Me</span>
        </h3>
        <h2 className="mb-8 text-4xl font-base">Let's get in touch!</h2>

        <form className="grid grid-cols-2 gap-x-8 gap-y-6">


          <div className="flex flex-col relative">
            <input
              type="email"
              placeholder="Email"
              className="peer bg-[#1E1E1E] text-white border-b border-gray-500 outline-none mt-6 px-2 py-1
               focus:border-orange-500 placeholder-orange-500"
            />
            <label
              className="absolute left-2 top-1 text-gray-400 text-sm transition-all
               peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
            ></label>
          </div>



          <div className="flex flex-col relative">
            <input
              type="text"
              placeholder="Phone"
              className="peer bg-[#1E1E1E] text-white border-b border-gray-500 outline-none mt-6 px-2 py-1
               focus:border-orange-500 placeholder-orange-500"
            />
            <label className="absolute left-2 top-1 text-gray-400 text-sm transition-all
                              peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
                              peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500">

            </label>
          </div>


          <div className="flex flex-col relative">
            <input
              type="text"
              placeholder="Name"
              className="peer bg-[#1E1E1E] text-white border-b border-gray-500 outline-none mt-6 px-2 py-1
               focus:border-orange-500 placeholder-orange-500"
            />
            <label className="absolute left-2 top-1 text-gray-400 text-sm transition-all
                              peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
                              peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500">

            </label>
          </div>


          <div className="flex flex-col relative">
            <input
              type="text"
              placeholder="Address"
              className="peer bg-[#1E1E1E] text-white border-b border-gray-500 outline-none mt-6 px-2 py-1
               focus:border-orange-500 placeholder-orange-500"
            />
            <label className="absolute left-2 top-1 text-gray-400 text-sm transition-all
                              peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
                              peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500">

            </label>
          </div>


          <div className="flex flex-col col-span-2 relative">
            <textarea
              placeholder="Content"
              rows={5}
              className="peer bg-[#1E1E1E] text-white border-b border-gray-500 outline-none mt-6 px-2 py-1
               focus:border-orange-500 placeholder-orange-500 resize-none w-1/2"
            />
            <label
              className="absolute left-2 top-1 text-gray-400 text-sm transition-all
               peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-orange-500"
            ></label>
          </div>



          <div className="col-span-2 flex items-center mt-2">
            <input type="checkbox" id="newsletter" className="mr-2 w-6 h-6" />
            <label htmlFor="newsletter" className="text-white text-lg">
              I would like to receive the newsletter.
            </label>
          </div>


          <div className="col-span-2 mt-4">
            <button
              type="submit"
              className="w-150 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>


      <div className="w-1/12 flex justify-end">
        <Sidebar />
      </div>
    </div>
  );
}
