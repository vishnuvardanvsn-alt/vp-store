import Hero from "../sections/Hero";
import FeaturedCategories from "../sections/FeaturedCategories";
import FeaturedProducts from "../sections/FeaturedProducts";
import PromoBanner from "../sections/PromoBanner";
import WhyShopWithUs from "../sections/WhyShopWithUs";
import StoreExperience from "../sections/StoreExperience";
import StoreLocation from "../sections/StoreLocation";
import ContactSupport from "../sections/ContactSupport";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <PromoBanner />
      <WhyShopWithUs />
      <StoreExperience />
      <StoreLocation />
      <ContactSupport />
    </>
  );
}
