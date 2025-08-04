import AboutPage from "@/pages/about/AboutPage";
import ContactsPage from "@/pages/contacts/ContactsPage";
import MainPage from "@/pages/main/MainPage";
import ProductionPage from "@/pages/production/ProductionPage";
import ProjectPage from "@/pages/project/ProjectPage";
import ServicePage from "@/pages/service/ServicePage";
import OpacityChanger from "@/shared/components/OpacityChanger";
import PageNumber from "@/shared/components/PageNumber";
import { ScrollTracker } from "@/shared/components/ScrollTracker";
import Header from "@/widgets/header/Header";
import HeaderNavigation from "@/widgets/header/HeaderNavigation";
import { tabs } from "@/widgets/header/constants";

export default function Home() {
  return (
    <ScrollTracker>
      <div className="fixed w-full min-h-screen">
        <OpacityChanger targetId="1">
          <div className="min-h-screen bg-[url('/images/first_slide_background.jpg')] bg-fixed bg-cover absolute -z-15 w-full overflow-hidden"></div>
        </OpacityChanger>

        <OpacityChanger targetId="2">
          <div className="min-h-screen bg-[url('/images/second_slide_background.png')] overflow-hidden absolute w-full -z-10 bg-cover">
            <div className="min-h-screen w-full h-full bg-(--color-background) relative">
              <div className="text-(--color-numbers) text-[2000px] font-bold absolute top-[100px] right-0 leading-[0.55] max-[980px]:hidden">
                2
              </div>
            </div>
          </div>
        </OpacityChanger>

        <OpacityChanger targetId="3">
          <div className="min-h-screen bg-[url('/images/third_slide_background.png')] bg-cover bg-center overflow-hidden absolute w-full -z-10">
            <div className="min-h-screen w-full h-full bg-(--color-background) relative">
              <div className="text-(--color-numbers) text-[2000px] font-bold absolute top-[100px] right-0 leading-[0.55] max-[980px]:hidden">
                3
              </div>
            </div>
          </div>
        </OpacityChanger>

        <OpacityChanger targetId="4">
          <div className="min-h-screen bg-[url('/images/fourth_slide_background.png')] bg-cover bg-center overflow-hidden absolute w-full -z-10">
            <div className="min-h-screen w-full h-full bg-(--color-background) relative">
              <div className="text-(--color-numbers) text-[2000px] font-bold absolute top-[100px] right-[-120px] leading-[0.55] max-[980px]:hidden">
                4
              </div>
            </div>
          </div>
        </OpacityChanger>

        <OpacityChanger targetId="5">
          <div className="min-h-screen w-full h-full bg-[#000] absolute"></div>
        </OpacityChanger>

        <OpacityChanger targetId="6">
          <div className="min-h-screen w-full h-full bg-[#000] absolute"></div>
        </OpacityChanger>

        <OpacityChanger targetId="7">
          <div className="min-h-screen w-full h-full bg-[#000] absolute"></div>
        </OpacityChanger>
      </div>
      <Header>
        <HeaderNavigation elements={tabs} />
      </Header>
      <MainPage />
      <AboutPage />
      <ProductionPage />
      <ServicePage />
      <ProjectPage />
      <ContactsPage />
      <PageNumber pagesCount={7} />
    </ScrollTracker>
  );
}
