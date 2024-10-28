import { lineDown, lineUp } from "@/public";

const Header = () => {
  return (
    <header className="w-4/5 py-10 mx-auto">
      <div className="flex justify-between w-full">
        <div className="flex items-center justify-between w-1/2">
          <nav className="flex items-center gap-20">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">FAQs</a>
            <a href="">Services</a>
          </nav>
          <h3 className="text-3xl italic font-medium">
            <a href="">Rous</a>
          </h3>
        </div>
        <div className="flex gap-4">
          <button className="hover:border rounded-xl px-8 py-2 border-white">
            Sign Up
          </button>
          <button className="hover:border rounded-xl px-8 py-2 border-white">
            Sign in
          </button>
        </div>
      </div>
      <div className="lg:bg-contain xl:bg-auto bg-header-img flex justify-between mt-20 bg-center bg-no-repeat">
        <div className="flex flex-col gap-20">
          <h2 className="text-5xl">
            Transforming Finance <br /> through Innovation <br /> and Tech
          </h2>
          <div className="space-y-6">
            <p className="bg-white/10 w-fit px-8 py-3 rounded-full">
              AI & Automation Solutions
            </p>
            <p className="bg-white/10 w-fit px-8 py-3 rounded-full">
              Advanced Blockchain Security
            </p>
            <p className="bg-white/10 w-fit px-8 py-3 rounded-full">
              Data Analytics Tools
            </p>
          </div>
          <div className="text-4xl">
            <div className=" flex items-end">
              <p className="mb-6">AI-Powered </p>
              <img src={lineUp.src} alt="" />
            </div>
            <p className="ml-8">Financial Analytics</p>
            <p className="mt-4 text-base font-normal">
              Leverage the power of artificial <br />
              intelligence to gain deeper insights.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between text-right">
          <div className="text-4xl">
            <h3>Smart Solutions</h3>
            <div className="flex items-start justify-end">
              <img src={lineDown.src} alt="" />
              <div>
                <h3 className="mt-7">for Finance</h3>
                <p className="mt-6 text-base font-normal">
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
