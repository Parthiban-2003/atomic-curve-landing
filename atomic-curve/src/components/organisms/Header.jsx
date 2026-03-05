import Heading from "../atoms/Heading";
import SearchBar from "../molecules/SearchBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <Heading level={1} className="text-xl">My Landing</Heading>
      <SearchBar />
    </header>
  );
};

export default Header;