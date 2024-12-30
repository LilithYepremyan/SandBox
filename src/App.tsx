import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Wave from "./components/Wave/Wave";
import ChooseUsSection from "./sections/ChooseUsSection/ChooseUsSection";
import CompanyFactsSection from "./sections/CompanyFactsSection/CompanyFactsSection";
import FAQSection from "./sections/FAQSection/FAQSection";
import HappyCustomersSection from "./sections/HappyCustomersSection/HappyCustomersSection";
import LatestProjectSection from "./sections/LatestProjectsSection/LatestProjectSection";
import ServicesSection from "./sections/ServicesSection/ServicesSection";
import StartSection from "./sections/StartSection/StartSection";
import StrategySection from "./sections/StrategySection/StrategySection";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <StartSection />
      </div>
      <ServicesSection />
      <StrategySection />
      <div className="container">
        <ChooseUsSection />
        <CompanyFactsSection />
        <LatestProjectSection />
      </div>
      <Wave color="#F0F8FE" />
      <HappyCustomersSection />
      <div className="container">
        <FAQSection />
      </div>

      <Wave color="#2e3b4e" />
      <Footer />
    </>
  );
}

export default App;
