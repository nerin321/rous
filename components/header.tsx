import { lineDown, lineUp } from "@/public";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between w-full">
        <div className="flex justify-between items-center w-1/2">
          <nav className="flex gap-20 items-center">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">FAQs</a>
            <a href="">Services</a>
          </nav>
          <h3 className="text-3xl font-medium italic">
            <a href="">Rous</a>
          </h3>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-2 hover:border border-white rounded-xl">
            Sign Up
          </button>
          <button className="px-8 py-2 hover:border border-white rounded-xl">
            Sign in
          </button>
        </div>
      </div>
      <div className="bg-header-img bg-auto bg-no-repeat bg-center flex justify-between mt-20">
        <div className="flex flex-col gap-20">
          <h2 className="text-5xl">
            Transforming Finance <br /> through Innovation <br /> and Tech
          </h2>
          <div className="space-y-6">
            <p className="rounded-full bg-white/10 px-8 py-3 w-fit">
              AI & Automation Solutions
            </p>
            <p className="rounded-full bg-white/10 px-8 py-3 w-fit">
              Advanced Blockchain Security
            </p>
            <p className="rounded-full bg-white/10 px-8 py-3 w-fit">
              Data Analytics Tools
            </p>
          </div>
          <div className="text-4xl">
            <div className="flex items-end ">
              <p className="mb-6">AI-Powered </p>
              <img src={lineUp.src} alt="" />
            </div>
            <p className="ml-8">Financial Analytics</p>
            <p className="text-base font-normal mt-4">
              Leverage the power of artificial <br />
              intelligence to gain deeper insights.
            </p>
          </div>
        </div>
        <div className="text-right flex flex-col justify-between">
          <div className="text-4xl">
            <h3>Smart Solutions</h3>
            <div className="flex items-start justify-end">
              <img src={lineDown.src} alt="" />
              <div>
                <h3 className="mt-7">for Finance</h3>
                <p className="text-base font-normal mt-6">
                  we provide intelligent,
                  <br /> technology driven solutions <br /> that simplify.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-16">
            <div>
              <h3 className="text-5xl font-medium">$10M+</h3>
              <p className="text-xl font-normal">Transactions Securely</p>
            </div>
            <div>
              <h3 className="text-5xl font-medium">500k+</h3>
              <p className="text-xl font-normal">Businesses trust Rous</p>
            </div>
            <div>
              <h3 className="text-5xl font-medium">99.98%</h3>
              <p className="text-xl font-normal">System Uptime Guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
