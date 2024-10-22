import Image from "next/image";
import Header from "@/components/header";
import Service from "@/components/service";

export default function Home() {
  return (
    <main className="w-4/5 mx-auto py-20">
      <Header />
      
      <Service/>
    </main>
  );
}
