import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-blue-50">
      <Heading level={1} className="text-4xl mb-4">Welcome to My Landing Page</Heading>
      <Paragraph className="mb-6 text-lg">Build fast & reusable UI with React + TailwindCSS</Paragraph>
      <Button className="px-6 py-3 text-lg">Get Started</Button>
    </section>
  );
};

export default Hero;