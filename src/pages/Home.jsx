import Hero from "../components/Hero";
import FeaturedServices from "../components/FeaturedServices";
import Reviews from "../components/Reviews";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
      title="Medicare, Health & Life Insurance Advisors"
      description="True Care Insurance helps individuals and families understand Medicare, health insurance, life insurance, retirement planning, and coverage options."
      />
      <Hero />
      <FeaturedServices />
      <Reviews />
    </>
  );
}

export default Home;