import { houseIcon, serviceImg } from "@/public";
import React from "react";

const Service = () => {
  return (
    <section>
      <div className="space-y-28 py-8 hidden mb:block">
        <div className="gap-28 grid items-center grid-cols-2">
          <p className="text-[6px] mb:text-base">
            we believe in harnessing the transformative potential of fintech
            innovation to drive financial success. Our cutting-edge solutions
            are designed to unlock new opportunities for businesses.
          </p>
          <h3 className="text-xs mb:text-5xl">
            Unlocking the Power of Fintech Innovation
          </h3>
        </div>
        <div className="xl:gap-28 grid grid-cols-2 gap-20">
          <div>
            <img src={serviceImg.src} alt="" />
          </div>
          <div className="flex flex-col justify-between">
            <p>
              Our approach enables streamlined operations, enhanced security,
              and improved customer experiences. Whether you’re looking to
              optimize financial processes or explore new market avenues.
            </p>
            <div className="space-y-7 lap:space-y-12 xl:space-y-28 relative">
              <div className="px-14 -top-[55%] xl:-top-[43%] -left-[35%] xl:-left-[33%] rounded-2xl bg-white/10 absolute w-full py-12 space-y-10">
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
      <div className="py-8 space-y-5 mb:hidden">
        <div className="grid grid-cols-2 gap-5">
          <p className="text-[6px] mb:text-base">
            we believe in harnessing the transformative potential of fintech
            innovation to drive financial success. Our cutting-edge solutions
            are designed to unlock new opportunities for businesses.
          </p>
          <h3 className="text-xs mb:text-5xl">
            Unlocking the Power of Fintech Innovation
          </h3>
        </div>
        <div className="relative flex justify-end">
          <div className="w-[47%] absolute left-0">
            <img src={serviceImg.src} alt="" />
          </div>
          <div className="flex flex-col items-end justify-between w-2/3">
            <p className="text-[6px] w-[71%]">
              Our approach enables streamlined operations, enhanced security,
              and improved customer experiences. Whether you’re looking to
              optimize financial processes or explore new market avenues.
            </p>
            <div className="text-[8px] mt-8">
              <div className="rounded-2xl bg-white/10 w-[71%] p-2 ml-5">
                <div className="flex items-center gap-2">
                  <img src={houseIcon.src} alt="" className="w-3" />
                  <p className="text-[10px] font-medium">
                    Intelligent Financial Management
                  </p>
                </div>
                <p>
                  Streamline your financial operations with our intelligent
                  financial management software. Designed for businesses of all.
                </p>
              </div>
              <div className="flex flex-col items-end gap-5 mt-5">
                <div className="rounded-2xl bg-white/10 w-[71%] p-2">
                  <div className="flex items-center gap-2">
                    <img src={houseIcon.src} alt="" className="w-3" />
                    <p className=" font-medium text-[10px]">
                      Intelligent Financial Management
                    </p>
                  </div>
                  <p>
                    Streamline your financial operations with our intelligent
                    financial management software. Designed for businesses of
                    all.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 w-[71%] p-2">
                  <div className="flex items-center gap-2">
                    <img src={houseIcon.src} alt="" className="w-3" />
                    <p className="font-medium text-[10px]">
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
