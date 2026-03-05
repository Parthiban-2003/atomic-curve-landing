import Header from "../organisms/Header";
import Hero from "../organisms/Hero";
import Footer from "../organisms/Footer";

const LandingTemplate = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingTemplate;