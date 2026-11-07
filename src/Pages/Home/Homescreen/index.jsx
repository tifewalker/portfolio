import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import Technologies from "../Technologies";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import SEO from "../../../components/SEO";
import {
  BASE_URL,
  HOME_TITLE,
  HOME_DESCRIPTION,
  getPersonSchema,
  getWebSiteSchema,
} from "../../../utils/schema";

const HOME_SCHEMA = [getPersonSchema(), getWebSiteSchema()];

export default function Home() {
  return (
    <>
      <SEO
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        canonical={`${BASE_URL}/`}
        schema={HOME_SCHEMA}
      />
      <HeroSection />
      <MySkills />
      <Technologies />
      <MyPortfolio />
      <ContactMe />
    </>
  );
}
