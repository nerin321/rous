import Header from "@/components/header";
import Service from "@/components/service";
import Pages from "@/components/pages";
import Faq from "@/components/faq";
import Story from "@/components/story";

export default function Home() {
  return (
    <main>
      <div className="bg-radial">
        <Header />
      </div>
      <div className="w-4/5 mx-auto">
        <Service />
        <Pages />
        <Faq />
        <Story />
      </div>
    </main>
  );
}
