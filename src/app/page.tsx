import AboutPage from "@/pages/about/AboutPage";
import MainPage from "@/pages/main/MainPage";
import Page from "@/shared/components/Page";
import PageNumber from "@/shared/components/PageNumber";

export default function Home() {
  return (
    <>
      <Page id="1">
        <MainPage />
      </Page>
      <Page id="2">
        <AboutPage />
      </Page>
      <PageNumber pagesCount={6} />
    </>
  );
}
