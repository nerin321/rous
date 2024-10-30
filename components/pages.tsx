import { dataIcon, PagesBg } from "@/public";
import React from "react";

const Pages = () => {
  return (
    <section>
      <div className="grid items-center grid-cols-2 gap-5 mb-5 mb:gap-10 tb:gap-28 mb:mb-16 tb:mb-20">
        <h3 className="text-sm mb:text-2xl tb:text-5xl mb:leading-normal">
          Where Technology Meets Financial Growth
        </h3>
        <div>
          <p className="text-[8px] mb:text-xs tb:text-base mb:leading-relaxed">
            we are dedicated to bridging the gap between advanced technology and
            sustainable financial growth. Our innovative solutions are designed
            to empower businesses by integrating the latest technological.
          </p>
        </div>
      </div>
      <div className="bg-mobile-img tb:block hidden bg-center bg-no-repeat bg-contain">
        <div className="space-y-14">
          <div className="flex justify-between">
            <div className="w-96">
              <h3 className="mb-6 text-xl font-semibold">
                Informed Financial Decision-Making
              </h3>
              <p>
                Our approach not only enhances efficiency but also provides the
                insights needed to make informed decisions.
              </p>
            </div>
            <div className="lg:w-56 xl:w-72 lg:p-7 lg:gap-6 xl:p-10 xl:gap-9 bg-white/10 rounded-2xl flex flex-col items-center text-center">
              <img src={dataIcon.src} alt="" />
              <h3 className="text-xl font-medium">Data Analytics Tools</h3>
              <p>
                Unlock the full potential of your financial data with Rous's
                advanced Data Analytics Tools.
              </p>
            </div>
          </div>
          <div className="px-14 bg-white/10 rounded-3xl backdrop-blur-sm w-1/3 py-8">
            <h3 className=" mb-5 text-xl font-medium">
              AI-Driven Investment Strategies
            </h3>
            <p>
              Harness the power of artificial intelligence to make smarter
              investment decisions. Our AI-driven investment tools analyze
              market trends
            </p>
          </div>
          <div className="flex flex-row-reverse w-full">
            <div className="px-14 bg-white/10 rounded-3xl backdrop-blur-sm w-1/3 py-8">
              <h3 className="mb-5 text-xl font-medium">
                Cloud-Based Accounting Solutions
              </h3>
              <p>
                Simplify your financial management with our cloud-based
                accounting platform. Accessible from anywhere, our solution
                offers real-time tracking of income.
              </p>
            </div>
          </div>
        </div>
        <ul className="flex items-center gap-5 mt-5">
          <li className="w-14 h-14 flex items-center justify-center border rounded-full">
            1
          </li>
          <li className="w-14 h-14 flex items-center justify-center border rounded-full">
            2
          </li>
          <li className="w-14 h-14 flex items-center justify-center border rounded-full">
            3
          </li>
        </ul>
      </div>

      <div className="relative text-[8px] mb:text-xs tb:hidden">
        <img
          src={PagesBg.src}
          alt=""
          className="absolute w-[181px] mb:w-48 -z-10 top-10 left-24 mb:left-52"
        />
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="w-1/3 space-y-2">
              <h3 className="text-xs font-semibold mb:text-base">
                Informed Financial Decision-Making
              </h3>
              <p>
                Our approach not only enhances efficiency but also provides the
                insights needed to make informed decisions.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl flex flex-col items-center w-1/3 gap-2 p-3 text-center">
              <img src={dataIcon.src} alt="" className="w-4" />
              <h3 className="text-xs font-medium mb:text-base">
                Data Analytics Tools
              </h3>
              <p>
                Unlock the full potential of your financial data with Rous's
                advanced Data Analytics Tools.
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-3xl backdrop-blur-sm w-1/2 p-3 space-y-2">
            <h3 className="text-xs font-medium mb:text-base">
              AI-Driven Investment Strategies
            </h3>
            <p>
              Harness the power of artificial intelligence to make smarter
              investment decisions. Our AI-driven investment tools analyze
              market trends
            </p>
          </div>

          <div className="flex flex-row-reverse w-full">
            <div className="bg-white/10 rounded-3xl backdrop-blur-sm w-1/2 p-3 space-y-2">
              <h3 className="text-xs font-medium mb:text-base">
                Cloud-Based Accounting Solutions
              </h3>
              <p>
                Simplify your financial management with our cloud-based
                accounting platform. Accessible from anywhere, our solution
                offers real-time tracking of income.
              </p>
            </div>
          </div>
        </div>

        <ul className="flex items-center gap-3 text-xs">
          <li className="size-7 flex items-center justify-center border rounded-full">
            1
          </li>
          <li className="size-7 flex items-center justify-center border rounded-full">
            2
          </li>
          <li className="size-7 flex items-center justify-center border rounded-full">
            3
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pages;
