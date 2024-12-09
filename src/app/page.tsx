import Dateselection from "./components/Dateselection";
import Header from "./components/Header";
import Hero from "./components/Hero";


export default function Home() {
  return (
   <>
  <div className=" max-w-[1920px] bg-white mx-auto relative overflow-hidden">
   <Header/>
   <Hero/>
   <Dateselection/>
  </div>
  
   </>
  );
}
