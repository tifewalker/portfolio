import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Technologies from "../Technologies";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <Technologies />
      <MyPortfolio />
      
      <ContactMe />
     
    </>
  );
}
