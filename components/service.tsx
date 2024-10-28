import { houseIcon, serviceImg } from "@/public";
import React from "react";

const Service = () => {
  return (
    <section className="py-28 space-y-28">
      <div className="grid items-center grid-cols-2 gap-28">
        <p>
          we believe in harnessing the transformative potential of fintech
          innovation to drive financial success. Our cutting-edge solutions are
          designed to unlock new opportunities for businesses.
        </p>
        <h3 className="text-5xl">Unlocking the Power of Fintech Innovation</h3>
      </div>
      <div className="grid grid-cols-2 gap-28">
        <div>
          <img src={serviceImg.src} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <p>
            Our approach enables streamlined operations, enhanced security, and
            improved customer experiences. Whether you’re looking to optimize
            financial processes or explore new market avenues.
          </p>
          <div className="relative space-y-28">
            <div className="absolute w-full py-12 space-y-10 px-14 -top-60 -left-52 rounded-2xl bg-white/10">
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
            <div className="px-12 py-10 space-y-6 rounded-2xl bg-white/10">
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
            <div className="px-12 py-10 space-y-6 rounded-2xl bg-white/10">
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
    </section>
  );
};
export default Service;
