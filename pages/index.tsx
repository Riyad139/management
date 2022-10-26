import type { NextPage } from "next";
import SearchBar from "../Components/SearchBar";

const Home: NextPage = () => {
  return (
    <div className="p-2">
      <SearchBar />
    </div>
  );
};

export default Home;
