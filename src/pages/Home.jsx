import About from "../component/About";
import AnnouncementSection from "../component/AnnouncementSection";
import Footer from "../component/Footer";
import GovtBanner from "../component/GovtBanner";
import GovtHeader from "../component/GovtHeader";
import GovtInfo from "../component/GovtInfo";
import ImplementationSection from "../component/ImplementationSection";
import NaveBar from "../component/NaveBar";
import { siteContent } from "../constants/content";
import "../styles/Home.css";

export default function Home() {
  const {
    logo: navBarLogo,
    menuItems: navBarMenuItem,
    title: { heroTitle: navBarHeroTitle, heroSubtitle: navBarHeroSubtitle },
  } = siteContent.navbar;
  const { img } = siteContent.heroBanner;
  const { cardData } = siteContent.govtInfo;
  const announcementSecData = siteContent.announcementSec;
  const implementationSectionData = siteContent.implementationSection;
  const aboutData = siteContent.about;
  const govtBannerData = siteContent.govtBanner;
  const footerData=siteContent.footer;
  
  

  return (
    <div className="home-wrapper">
        <GovtHeader/>
      <NaveBar
        logo={navBarLogo}
        menuItem={navBarMenuItem}
        heroTitle={navBarHeroTitle}
        heroSubTitle={navBarHeroSubtitle}
      />
      <div className="banner">
        <img src={img} />
      </div>
      {/* <GovtInfo cardData={cardData}/> */}

      <div className="card-wrapper">
        {cardData.map((data, i) => (
          <div key={i} className="card">
            <div className="card-top">
              <div className="card-img">
                <img src={data.img} />
              </div>
            </div>
            <div className="card-bottom">
              <div className="card-head">{data.head}</div>
              <div className="card-div"></div>
              <div className="card-desc">{data.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <AnnouncementSection data={announcementSecData}/>
      <ImplementationSection data={implementationSectionData}/>
      <About data={aboutData}/>
      <GovtBanner data={govtBannerData}/>
      <Footer data={footerData}/>
    </div>
  );
}
