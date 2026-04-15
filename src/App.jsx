import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Testimonials from "./components/Testimonials";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";

const routeConfig = {
  "/": {
    bg: "/hotel.png",
    eyebrow: "WELCOME TO",
    title: "LUXURY",
    subtitle: "HOTELS",
    description: "Book your stay and enjoy luxury redefined at the most affordable rates.",
    ctaText: "Book Now",
    ctaLink: "/contact",
    component: <Home />,
  },
  "/facilities": {
    bg: "/facilities-img.png",
    eyebrow: "CURATED COMFORT",
    title: "FACILITIES",
    subtitle: "& EXPERIENCES",
    description: "Everything you need for a relaxing, memorable, and premium stay experience.",
    ctaText: "Explore Rooms",
    ctaLink: "/rooms",
    component: <Facilities />,
  },
  "/rooms": {
    bg: "/rooms-img.png",
    eyebrow: "STAY IN STYLE",
    title: "ROOMS",
    subtitle: "& SUITES",
    description: "Discover spacious rooms and exclusive suites designed for restful luxury.",
    ctaText: "Reserve",
    ctaLink: "/contact",
    component: <Rooms />,
  },
  "/contact": {
    bg: "/hotel-cover.png",
    eyebrow: "WE ARE HERE",
    title: "CONTACT",
    subtitle: "OUR TEAM",
    description: "Plan your next stay with confidence — we are just one message away.",
    ctaText: "View Rooms",
    ctaLink: "/rooms",
    component: <Contact />,
  },
};

const App = () => {
  return (
    <>
      <Routes>
        {Object.entries(routeConfig).map(([path, config]) => (
          <Route
            key={path}
            path={path}
            element={
              <Section
                bg={config.bg}
                eyebrow={config.eyebrow}
                title={config.title}
                subtitle={config.subtitle}
                description={config.description}
                ctaText={config.ctaText}
                ctaLink={config.ctaLink}
              >
                {config.component}
              </Section>
            }
          />
        ))}
      </Routes>
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
