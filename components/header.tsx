const Header = () => {
  return (
    <section>
      <header className="bg-radial flex justify-between w-full">
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
      </header>
      <div className="bg-header-img bg-auto bg-no-repeat bg-center">
        <div>
          <h2>Transforming Finance through Innovation and Tech</h2>
          <div>
            <p>AI & Automation Solutions</p>
            <p>Advanced Blockchain Security</p>
            <p>Data Analytics Tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
