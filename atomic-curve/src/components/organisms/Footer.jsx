import Paragraph from "../atoms/Paragraph";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-10">
      <Paragraph>&copy; {year} My Landing Page. All rights reserved.</Paragraph>
    </footer>
  );
};

export default Footer;