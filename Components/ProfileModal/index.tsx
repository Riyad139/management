import Image from "next/image";
export default function ProfileModal() {
  return (
    <div className="bg-white top-16 w-60 -left-[500%] space-y-2 flex flex-col items-center py-5 pb-2 justify-center absolute">
      <div className="w-16 h-16">
        <Image
          src={"/ProfileImage/vicky.jpg"}
          width={62}
          height={62}
          className="w-16 h-16 object-cover rounded-full"
          alt=""
        />
      </div>
      <div className="text-sm flex text-[#505359] items-center flex-col">
        <h2>Vicky jonson</h2>
        <p className="text-xs">A web developer and designer</p>
      </div>
      <div className="border-t  space-y-1 w-full flex flex-col items-center text-[#505359] text-sm">
        <p>my tasks</p>
        <p>settings</p>
      </div>
    </div>
  );
}
