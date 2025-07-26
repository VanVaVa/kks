import AboutPage from "@/pages/about/AboutPage";
import MainPage from "@/pages/main/MainPage";
import ProductionPage from "@/pages/production/ProductionPage";
import ProjectPage from "@/pages/project/ProjectPage";
import ServicePage from "@/pages/service/ServicePage";
import OpacityChanger from "@/shared/components/OpacityChanger";
import PageNumber from "@/shared/components/PageNumber";
import { ScrollTracker } from "@/shared/components/ScrollTracker";
import Header from "@/widgets/header/Header";
import HeaderNavigation from "@/widgets/header/HeaderNavigation";

export default function Home() {
  return (
    <>
      <ScrollTracker>
        <div className="fixed w-full min-h-screen">
          <OpacityChanger targetId="1">
            <div className="min-h-screen bg-[url('/images/first_slide_background.jpg')] bg-fixed bg-cover absolute -z-15 w-full overflow-hidden"></div>
          </OpacityChanger>

          <OpacityChanger targetId="2">
            <div
              className="min-h-screen bg-[url('/images/second_slide_background.png')] bg-size-[auto_1600px] overflow-hidden absolute w-full -z-10"
              style={{ backgroundPositionY: -294 }}
            >
              <div className="min-h-screen w-full h-full bg-(--color-background) relative"></div>
            </div>
          </OpacityChanger>

          <OpacityChanger targetId="3">
            <div className="min-h-screen bg-[url('/images/third_slide_background.png')] bg-cover bg-center overflow-hidden absolute w-full -z-10">
              <div className="min-h-screen w-full h-full bg-(--color-background) relative"></div>
            </div>
          </OpacityChanger>

          <OpacityChanger targetId="4">
            <div className="min-h-screen bg-[url('/images/fourth_slide_background.png')] bg-cover bg-center overflow-hidden absolute w-full -z-10">
              <div className="min-h-screen w-full h-full bg-(--color-background) relative"></div>
            </div>
          </OpacityChanger>

          <OpacityChanger targetId="5">
            <div className="min-h-screen w-full h-full bg-[#000] relative"></div>
          </OpacityChanger>
        </div>
        <Header>
          <HeaderNavigation />
        </Header>
        <MainPage />
        <AboutPage />
        <ProductionPage />
        <ServicePage />
        <ProjectPage />
        <PageNumber pagesCount={6} />
      </ScrollTracker>
    </>
  );
}
