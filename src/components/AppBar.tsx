import SearchBar from "./SearchBar";

const AppBar = () => {
  return (
    <div className="flex justify-between">
      <div>YouTube</div>
      <div>
        <SearchBar />
      </div>
      <div>Account</div>
    </div>
  );
};

export default AppBar;
