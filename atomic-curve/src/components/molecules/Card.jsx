import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Image from "../atoms/Image";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <Image src={imgSrc} alt={title} className="w-full h-40 object-cover rounded" />
      <Heading level={3} className="mt-2">{title}</Heading>
      <Paragraph className="mt-1">{description}</Paragraph>
    </div>
  );
};

export default Card;