import Page from "@/shared/components/Page";
import ServiceList from "@/shared/components/ServiceList";
import ServiceCarousel from "@/widgets/serviceCarousel/ServiceCarousel";

const ServicePage = () => (
  <Page id="4">
    <div className="pt-[253px] px-[45px] min-h-screen flex">
      <ServiceList />
      <ServiceCarousel />
    </div>
  </Page>
);

export default ServicePage;
