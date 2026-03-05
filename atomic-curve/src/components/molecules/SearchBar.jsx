import Input from "../atoms/Input";
import Button from "../atoms/Button";

const SearchBar = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Search something..." className="flex-1" />
      <Button>Search</Button>
    </div>
  );
};

export default SearchBar;