import Image from "next/image";
import { useQuery } from "react-query";
import api from "../../library/axiosClient";
import { GrTask } from "react-icons/gr";
import { BsGear } from "react-icons/bs";
export default function ProfileModal() {
  const query = useQuery("fetchme", () =>
    api.post("/user", { userId: "UserId" })
  );

  return (
    <div className="bg-white px-7 shadow-md top-16 w-60 -left-[500%] space-y-4 flex flex-col  py-5 justify-center absolute">
      <div className="w-16 h-16">
        <Image
          src={"/ProfileImage/vicky.jpg"}
          width={62}
          height={62}
          className="w-16 h-16 object-cover rounded-full"
          alt=""
        />
      </div>
      <div className="text-sm space-y-3  flex text-[#50535] flex-col">
        <h2>{query.data?.data.name}</h2>
        <p className="text-xs">{query.data?.data.description}</p>
      </div>
      <div className="border-t pt-4 space-y-3  w-full flex flex-col  text-[#505359] text-sm">
        <div className="space-x-3 flex items-center">
          <GrTask size={14} />
          <p>my tasks</p>
        </div>
        <div className="flex items-center space-x-3">
          <BsGear size={16} />
          <p>settings</p>
        </div>
      </div>
    </div>
  );
}
