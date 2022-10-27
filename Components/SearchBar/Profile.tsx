import Image from "next/image";
import { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import ProfileModal from "../ProfileModal";
import api from "../../library/axiosClient";
import { useQuery } from "react-query";

export default function Profile() {
  const [isOpen, setOpen] = useState(false);
  const modalController = () => {
    setOpen(!isOpen);
  };


  const query = useQuery("fetchme", () =>
  // @TODO handle input typing
    api.post("/user", { userId: "userId" })
  );

  // @TODO if (query.isLoading) handle loading

  return (
    <div className="flex space-x-6">
      <div className="flex justify-center items-center">
        <AiOutlineBell size={24} color={"#505359"} />
      </div>
      <div
        onClick={modalController}
        className="w-9 relative cursor-pointer rounded-full"
      >
        <Image
          src={query.data?.data.profilePicture}
          width={32}
          height={28}
          className="rounded-full w-9 h-9 object-cover"
          alt=""
        />
        {isOpen && <ProfileModal />}
      </div>
    </div>
  );
}
