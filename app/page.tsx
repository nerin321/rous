import Header from "@/components/header";
import Service from "@/components/service";
import Pages from "@/components/pages";
import Faq from "@/components/faq";
import Story from "@/components/story";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <div className="bg-radial">
        <Header />
      </div>
      <div className="w-[95%] mb:w-4/5 py-5 mb:py-20 mx-auto">
        <Service />
        <Pages />
        <Faq />
        <Story />
      </div>
      <Footer />
    </main>
  );
}
