import { headerImg, lineDown, lineUp } from "@/public";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nav from "./common/Nav";

const Header = () => {
  return (
    <header className="w-[95%] tb:w-4/5 py-10 mx-auto">
      <Nav />
      <div className="relative flex justify-between mt-20">
        <img
          src={headerImg.src}
          alt=""
          className="absolute -z-10 w-56 top-[9%] left-[25%] mb:w-80 mb:top-[7%] mb:left-[30%] tb:w-80 tb:top-[5%] tb:left-[30%] lg:w-auto"
        />
        <div className="mb:gap-0 tb:gap-20 flex flex-col gap-3">
          <h2 className="mb:text-2xl tb:text-5xl py-2 text-xs">
            Transforming Finance <br /> through Innovation <br /> and Tech
          </h2>
          <div className="mb:space-y-6 tb:space-y-10 space-y-6">
            <p
              className="bg-white/10 w-fit px-3 py-2 rounded-full text-[8px] 
        mb:px-6 mb:py-2.5 mb:text-sm 
        tb:px-8 tb:py-3 tb:text-base"
            >
              AI & Automation Solutions
            </p>
            <p
              className="bg-white/10 w-fit px-3 py-2 rounded-full text-[8px] 
        mb:px-6 mb:py-2.5 mb:text-sm 
        tb:px-8 tb:py-3 tb:text-base"
            >
              Advanced Blockchain Security
            </p>
            <p
              className="bg-white/10 w-fit px-3 py-2 rounded-full text-[8px] 
        mb:px-6 mb:py-2.5 mb:text-sm 
        tb:px-8 tb:py-3 tb:text-base"
            >
              Data Analytics Tools
            </p>
          </div>
          <div className="mb:text-xl tb:text-4xl text-xs font-medium">
            <div className="flex items-end">
              <p className="mb:mb-4 tb:mb-6">AI-Powered </p>
              <img src={lineUp.src} alt="" className="w-28 mb:w-48 tb:w-64" />
            </div>
            <p className="mb:ml-6 tb:ml-8 ml-2">Financial Analytics</p>
            <p className="mt-4 text-[8px] mb:text-sm tb:text-base font-normal">
              Leverage the power of artificial <br />
              intelligence to gain deeper insights.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between text-right">
          <div className="mb:text-2xl tb:text-4xl text-xs font-medium">
            <h3>Smart Solutions</h3>
            <div className="relative flex items-start justify-end">
              <img
                src={lineDown.src}
                className="w-28 right-16 mb:w-48 tb:w-64 absolute"
                alt=""
              />
              <div>
                <h3 className="mb:mt-5 tb:mt-7">for Finance</h3>
                <p className="mt-6 text-[8px] mb:text-sm tb:text-base font-normal">
                  we provide intelligent,
                  <br /> technology driven solutions <br /> that simplify.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb:space-y-8 tb:space-y-16 text-[8px] mb:text-sm tb:text-xl">
            <div>
              <h3 className="mb:text-xl tb:text-5xl text-xs font-medium">
                $10M+
              </h3>
              <p className="font-normal">Transactions Securely</p>
            </div>
            <div>
              <h3 className="mb:text-xl tb:text-5xl text-xs font-medium">
                500k+
              </h3>
              <p className="font-normal">Businesses trust Rous</p>
            </div>
            <div>
              <h3 className="mb:text-xl tb:text-5xl text-xs font-medium">
                99.98%
              </h3>
              <p className="font-normal">System Uptime Guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
