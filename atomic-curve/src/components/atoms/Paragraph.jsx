const Paragraph = ({ children, className }) => {
  return <p className={`text-gray-700 text-base ${className}`}>{children}</p>;
};

export default Paragraph;