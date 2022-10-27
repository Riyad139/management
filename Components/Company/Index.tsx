import Image from "next/image";
import Container from "../Layout/Container";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { LinearProgress } from "@mui/material";
export default function Company() {
  return (
    <Container>
      <div className="w-[350px] py-7 pl-5 pr-1 rounded-2xl bg-white">
        {/* // top part */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <div className="w-11 cursor-pointer h-11 rounded-full">
              <Image
                src={"/Logo/google-logo.png"}
                alt=""
                width={42}
                height={42}
              />
            </div>
            <div className="cursor-pointer">
              <p className="text-lg">Google</p>
              <p className="text-xs text-gray-600 font-medium">Google inc.</p>
            </div>
          </div>

          <div className="flex space-x-1 items-center justify-center">
            <AiOutlineStar size={25} className="cursor-pointer" />
            <div className="w-8 flex items-center justify-center  h-8 rounded-full cursor-pointer hover:bg-slate-50">
              <BsThreeDotsVertical color={"gray"} size={22} />
            </div>
          </div>
        </div>
        {/* // top part ends here  */}
        {/* priority section start */}
        <div className=" text-sm justify-between flex mt-8 mb-5 pr-4">
          <div className="px-2 py-1 text-gray-600 border bg-slate-100 rounded-lg">
            <p className="uppercase font-semibold">select progress</p>
          </div>
          <div className="px-2 py-1 text-orange-500 border border-orange-500 rounded-lg">
            <p>High priority</p>
          </div>
        </div>
        {/* priority ends here */}
        {/* task starts here */}
        <div className="pr-5 space-y-5">
          <p className="text-sm text-gray-600">task done : 25/50</p>
          <div className="">
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        {/* task starts here */}
        {/* tags */}
        <div className="">
          <div className=""></div>
        </div>
        {/* tags */}
      </div>
    </Container>
  );
}
