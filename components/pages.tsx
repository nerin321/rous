import { dataIcon } from "@/public";
import React from "react";

const Pages = () => {
  return (
    <section>
      <div className="grid items-center grid-cols-2 mb-20 gap-28">
        <h3 className="text-5xl">Where Technology Meets Financial Growth</h3>
        <p>
          we are dedicated to bridging the gap between advanced technology and
          sustainable financial growth. Our innovative solutions are designed to
          empower businesses by integrating the latest technological.
        </p>
      </div>
      <div className="bg-center bg-no-repeat bg-contain bg-mobile-img">
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
            <div className="flex flex-col items-center text-center lg:w-56 xl:w-72 lg:p-7 lg:gap-6 xl:p-10 xl:gap-9 bg-white/10 rounded-2xl">
              <img src={dataIcon.src} alt="" />
              <h3 className="text-xl font-medium">Data Analytics Tools</h3>
              <p>
                Unlock the full potential of your financial data with Rous's
                advanced Data Analytics Tools.
              </p>
            </div>
          </div>
          <div className="w-1/3 py-8 px-14 bg-white/10 rounded-3xl backdrop-blur-sm ">
            <h3 className="mb-5 text-xl font-medium ">
              AI-Driven Investment Strategies
            </h3>
            <p>
              Harness the power of artificial intelligence to make smarter
              investment decisions. Our AI-driven investment tools analyze
              market trends
            </p>
          </div>
          <div className="flex flex-row-reverse w-full">
            <div className="w-1/3 py-8 px-14 bg-white/10 rounded-3xl backdrop-blur-sm ">
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
          <li className="w-14 h-14 rounded-full border flex items-center justify-center">
            1
          </li>
          <li className="w-14 h-14 rounded-full border flex items-center justify-center">
            2
          </li>
          <li className="w-14 h-14 rounded-full border flex items-center justify-center">
            3
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Pages;
