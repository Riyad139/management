import { HiMagnifyingGlass } from "react-icons/hi2";
import Profile from "./Profile";

export default function SearchBar() {
  return (
    <div className="bg-white py-4 flex justify-between rounded-2xl mx-4 my-2 ">
      <div className="rounded-full mx-3  flex">
        <HiMagnifyingGlass
          size={18}
          color={"#505359"}
          className="ml-2   mt-2 absolute"
        />
        <input
          className="rounded-full px-3 bg-mildWhite pl-9 py-1 w-44 md:focus:w-64 duration-200 "
          placeholder="search"
          type="text"
        />
      </div>
      <div className=" mx-6">
        <Profile />
      </div>
    </div>
  );
}
