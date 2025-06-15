import MainPage from "@/pages/main/MainPage";
import PageNumber from "@/shared/components/PageNumber";

export default function Home() {
  return (
    <>
      <MainPage />
      <PageNumber pageNumber={1} pagesCount={6} />
    </>
  );
}
