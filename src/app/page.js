import Image from "next/image";
import Hero from "./components/Hero";
import BlackBar from "./components/BlackBar";
import Service from "./components/Service";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <BlackBar />
      <Service />
    </div>
  );
}
