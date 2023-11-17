import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";
import KDTSection from "./components/KDTSection";
import ScheduleSection from "./components/ScheduleSection";
import SubscriptionSection from "./components/SubscriptionSection";
import OnboardingSection from "./components/OnboardingSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-pretendard">
      <Header />
      <main className="bg-green-100">
        <SlideBanner />
        <KDTSection />
        <ScheduleSection />
        <SubscriptionSection />
        <OnboardingSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
