import BannerSection from "@/components/bannerSection"
import Header from "@/components/header"
import HeroSlider from "@/components/heroSlider"
import NewsSection from "@/components/newsSection"
import RosterSection from "@/components/rosterSection"
import SportsSection from "@/components/sportsSection"
import ScheduleSection from "@/components/scheduleSection"
import StatsSection from "@/components/statsSection"
import VideosSection from "@/components/videosSection"
import AboutSection from "@/components/aboutSection"
import Footer from "@/components/footer"


const page = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <BannerSection />
      <NewsSection />
      <ScheduleSection />
      <SportsSection />
      <RosterSection />
      <StatsSection />
      <VideosSection />
      <AboutSection />
      <Footer />
    </main>
  )
}

export default page