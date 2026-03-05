import LandingTemplate from "../templates/LandingTemplete";
import Card from "../molecules/Card";
import img1 from '../../assets/1.webp';
import img2 from '../../assets/2.webp';
import img3 from '../../assets/3.png';


const HomePage = () => {
  return (
    <LandingTemplate>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <Card
          imgSrc={img1}
          title="Fast"
          description="Build landing pages quickly with reusable components."
        />
        <Card
          imgSrc={img2}
          title="Responsive"
          description="Layouts work on mobile, tablet & desktop."
        />
        <Card
          imgSrc={img3}
          title="TailwindCSS"
          description="Styled easily with Tailwind utility classes."
        />
      </section>
    </LandingTemplate>
  );
};

export default HomePage;