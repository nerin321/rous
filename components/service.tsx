import { houseIcon, serviceImg } from "@/public";
import React from "react";

const Service = () => {
  return (
    <section>
      {/* destop */}
      <div className="space-y-28 tb:block hidden py-8">
        <div className="gap-28 grid items-center grid-cols-2">
          <p className="text-[6px] mb:text-sm tb:text-base">
            we believe in harnessing the transformative potential of fintech
            innovation to drive financial success. Our cutting-edge solutions
            are designed to unlock new opportunities for businesses.
          </p>
          <h3 className="mb:text-3xl tb:text-5xl text-xs">
            Unlocking the Power of Fintech Innovation
          </h3>
        </div>
        <div className="xl:gap-28 grid grid-cols-2 gap-20">
          <div>
            <img src={serviceImg.src} alt="" />
          </div>
          <div className="flex flex-col justify-between">
            <p className="mb:text-sm tb:text-base">
              Our approach enables streamlined operations, enhanced security,
              and improved customer experiences. Whether you're looking to
              optimize financial processes or explore new market avenues.
            </p>
            <div className="space-y-7 lap:space-y-12 xl:space-y-28 relative">
              <div className="px-14 -top-[55%] xl:-top-[43%] -left-[35%] xl:-left-[33%] rounded-2xl bg-white/10 absolute w-full py-12 space-y-10">
                <div className="flex items-center gap-4">
                  <img src={houseIcon.src} alt="" />
                  <p className="mb:text-xl tb:text-2xl text-lg font-medium">
                    Intelligent Financial Management
                  </p>
                </div>
                <p className="mb:text-sm tb:text-base">
                  Streamline your financial operations with our intelligent
                  financial management software. Designed for businesses of all.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 px-12 py-10 space-y-6">
                <div className="flex items-center gap-4">
                  <img src={houseIcon.src} alt="" />
                  <p className="text-xl font-medium">
                    Intelligent Financial Management
                  </p>
                </div>
                <p>
                  Streamline your financial operations with our intelligent
                  financial management software. Designed for businesses of all.
                </p>
              </div>
              <div className="rounded-2xl bg-white/10 px-12 py-10 space-y-6">
                <div className="flex items-center gap-4">
                  <img src={houseIcon.src} alt="" />
                  <p className="text-xl font-medium">
                    Intelligent Financial Management
                  </p>
                </div>
                <p>
                  Streamline your financial operations with our intelligent
                  financial management software. Designed for businesses of all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile and tablet */}
      <div className="tb:hidden mb:space-y-8 py-8 space-y-5">
        <div className="mb:gap-10 grid grid-cols-2 gap-5">
          <p className="text-[6px] mb:text-sm">
            we believe in harnessing the transformative potential of fintech
            innovation to drive financial success. Our cutting-edge solutions
            are designed to unlock new opportunities for businesses.
          </p>
          <h3 className="mb:text-3xl text-xs">
            Unlocking the Power of Fintech Innovation
          </h3>
        </div>
        <div className="relative flex justify-end">
          <div className="w-[47%] absolute left-0 mb:w-[45%]">
            <img src={serviceImg.src} alt="" />
          </div>
          <div className="flex flex-col items-end justify-between w-2/3">
            <p className="text-[6px] mb:text-xs w-[71%]">
              Our approach enables streamlined operations, enhanced security,
              and improved customer experiences. Whether you're looking to
              optimize financial processes or explore new market avenues.
            </p>
            <div className="text-[8px] mb:text-xs mt-8">
              <div className="rounded-2xl bg-white/10 w-[71%] p-2 mb:p-4 ml-5">
                <div className="mb:gap-3 flex items-center gap-2">
                  <img src={houseIcon.src} alt="" className="mb:w-5 w-3" />
                  <p className="text-[10px] mb:text-sm font-medium">
                    Intelligent Financial Management
                  </p>
                </div>
                <p>
                  Streamline your financial operations with our intelligent
                  financial management software. Designed for businesses of all.
                </p>
              </div>
              <div className="mb:gap-8 mb:mt-8 flex flex-col items-end gap-5 mt-5">
                <div className="rounded-2xl bg-white/10 w-[71%] p-2 mb:p-4">
                  <div className="mb:gap-3 flex items-center gap-2">
                    <img src={houseIcon.src} alt="" className="mb:w-5 w-3" />
                    <p className="text-[10px] mb:text-sm font-medium">
                      Intelligent Financial Management
                    </p>
                  </div>
                  <p>
                    Streamline your financial operations with our intelligent
                    financial management software. Designed for businesses of
                    all.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 w-[71%] p-2 mb:p-4">
                  <div className="mb:gap-3 flex items-center gap-2">
                    <img src={houseIcon.src} alt="" className="mb:w-5 w-3" />
                    <p className="text-[10px] mb:text-sm font-medium">
                      Intelligent Financial Management
                    </p>
                  </div>
                  <p>
                    Streamline your financial operations with our intelligent
                    financial management software. Designed for businesses of
                    all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
