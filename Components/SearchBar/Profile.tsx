import Image from "next/image";
import { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import ProfileModal from "../ProfileModal";
export default function Profile() {
  const [isOpen, setOpen] = useState(false);
  const modalController = () => {
    setOpen(!isOpen);
  };

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
          src={"/ProfileImage/vicky.jpg"}
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
