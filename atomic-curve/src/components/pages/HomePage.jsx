import LandingTemplate from "../templates/LandingTemplete";
import Card from "../molecules/Card";

const HomePage = () => {
  return (
    <LandingTemplate>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <Card
          imgSrc="https://via.placeholder.com/300"
          title="Fast"
          description="Build landing pages quickly with reusable components."
        />
        <Card
          imgSrc="https://via.placeholder.com/300"
          title="Responsive"
          description="Layouts work on mobile, tablet & desktop."
        />
        <Card
          imgSrc="https://via.placeholder.com/300"
          title="TailwindCSS"
          description="Styled easily with Tailwind utility classes."
        />
      </section>
    </LandingTemplate>
  );
};

export default HomePage;