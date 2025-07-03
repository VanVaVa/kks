import AboutPage from "@/pages/about/AboutPage";
import MainPage from "@/pages/main/MainPage";
import ProductionPage from "@/pages/production/ProductionPage";
import OpacityChanger from "@/shared/components/OpacityChanger";
import PageNumber from "@/shared/components/PageNumber";
import { ScrollTracker } from "@/shared/components/ScrollTracker";
import Header from "@/widgets/header/Header";
import HeaderNavigation from "@/widgets/header/HeaderNavigation";

export default function Home() {
  return (
    <>
      <ScrollTracker>
        <div className="fixed w-full min-h-screen h-full -z-10">
          <div className="min-h-screen bg-[url('/images/first_slide_background.jpg')] bg-fixed absolute -z-10 w-full overflow-hidden bg-position-(--bg-position-big) max-[980px]:bg-position-(--bg-position-small)">
            <div className="min-h-screen w-full h-full bg-(--color-background)">
              <div
                className="max-[980px]:hidden min-h-screen bg-[url('/images/kamaz.png')] bg-no-repeat bg-fixed"
                style={{
                  backgroundPosition: "645px 138px",
                  backgroundSize: "1544px 1020px",
                }}
              ></div>
            </div>
          </div>

          <OpacityChanger targetScroll={500}>
            <div
              className="min-h-screen bg-[url('/images/second_slide_background.png')] bg-size-[auto_1600px] overflow-hidden absolute w-full -z-10"
              style={{ backgroundPositionY: -294 }}
            >
              <div className="min-h-screen w-full h-full bg-(--color-background) relative"></div>
            </div>
          </OpacityChanger>

          <OpacityChanger targetScroll={1700}>
            <div className="min-h-screen bg-[url('/images/third_slide_background.png')] bg-cover bg-center overflow-hidden absolute w-full -z-10">
              <div className="min-h-screen w-full h-full bg-(--color-background) relative"></div>
            </div>
          </OpacityChanger>
        </div>
        <Header>
          <HeaderNavigation />
        </Header>
        <MainPage />
        <AboutPage />
        <ProductionPage />
        <PageNumber pagesCount={6} />
      </ScrollTracker>
    </>
  );
}
