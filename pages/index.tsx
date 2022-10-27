import type { NextPage } from "next";
import Company from "../Components/Company/Index";
import SearchBar from "../Components/SearchBar";

const Home: NextPage = () => {
  return (
    <div className="p-2">
      <SearchBar />

      <Company />
    </div>
  );
};

export default Home;
