import FeaturedProduct from "@/components/Home/FeaturedProduct";
import Hero from "@/components/Home/Hero";
import ProductCategory from "@/components/Home/ProductCategory";
import WhyUs from "@/components/Home/WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCategory />
      <WhyUs />
      <FeaturedProduct />
    </>
  );
};

export default Home;
