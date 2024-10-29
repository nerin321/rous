import { headerImg, lineDown, lineUp } from "@/public";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nav from "./common/Nav";

const Header = () => {
  return (
    <header className="w-[95%] mb:w-4/5 py-10 mx-auto">
      <Nav />
      <div className="relative flex justify-between mt-20">
        <img
          src={headerImg.src}
          alt=""
          className="-z-10 lg:top-[5%] lg:left-[25%] xl:top-[5%] xl:left-[30%] absolute w-56 top-[9%] left-[25%]"
        />
        <div className="flex flex-col gap-3 mb:gap-20">
          <h2 className="text-xs py-2 mb:text-5xl">
            Transforming Finance <br /> through Innovation <br /> and Tech
          </h2>
          <div className="space-y-6">
            <p className="bg-white/10 w-fit px-3 py-2 mb:px-8 mb:py-3 rounded-full text-[8px] mb:text-base">
              AI & Automation Solutions
            </p>
            <p className="bg-white/10 w-fit px-3 py-2 mb:px-8 mb:py-3 rounded-full text-[8px] mb:text-base">
              Advanced Blockchain Security
            </p>
            <p className="bg-white/10 w-fit px-3 py-2 mb:px-8 mb:py-3 rounded-full text-[8px] mb:text-base">
              Data Analytics Tools
            </p>
          </div>
          <div className="text-xs font-medium mb:text-4xl">
            <div className=" flex items-end">
              <p className="mb:mb-6">AI-Powered </p>
              <img src={lineUp.src} alt="" className="w-28 mb:w-64" />
            </div>
            <p className="ml-2 mb:ml-8">Financial Analytics</p>
            <p className="mt-4 text-[8px] mb:text-base font-normal">
              Leverage the power of artificial <br />
              intelligence to gain deeper insights.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between text-right">
          <div className="text-xs font-medium mb:text-4xl">
            <h3>Smart Solutions</h3>
            <div className="flex items-start justify-end relative">
              <img
                src={lineDown.src}
                className="w-28 mb:w-64 absolute right-16"
                alt=""
              />
              <div>
                <h3 className="mb:mt-7">for Finance</h3>
                <p className="mt-6 text-[8px] mb:text-base font-normal">
                  we provide intelligent,
                  <br /> technology driven solutions <br /> that simplify.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 mb:space-y-16 text-[8px] mb:text-xl">
            <div>
              <h3 className="text-xs mb:text-5xl font-medium">$10M+</h3>
              <p className="font-normal">Transactions Securely</p>
            </div>
            <div>
              <h3 className="text-xs mb:text-5xl font-medium">500k+</h3>
              <p className="font-normal">Businesses trust Rous</p>
            </div>
            <div>
              <h3 className="text-xs mb:text-5xl font-medium">99.98%</h3>
              <p className="font-normal">System Uptime Guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
