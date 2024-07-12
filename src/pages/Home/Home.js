import React, { useEffect, Suspense } from "react";
import Loader from "../../components/Loader/Loader";

const Features = React.lazy(() => import("./Features"));
const Testimonials = React.lazy(() =>
  import("../../components/Sliders/Testimonials")
);
const TopBanner = React.lazy(() =>
  import("../../components/Sliders/TopBanner")
);
const Footer = React.lazy(() => import("../../components/Footer/Footer"));
const Blog = React.lazy(() => import("./BlogComponent"));
const CategorySlider = React.lazy(() =>
  import("../../components/Sliders/CategorySlider")
);

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Suspense fallback={<Loader />}>
      <TopBanner />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <CategorySlider />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Features />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
}
