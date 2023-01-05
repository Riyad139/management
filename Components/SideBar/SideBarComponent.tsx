import SideBar from '.'

export default function SideBarComponent() {
   return (
      <div className=" order-2 w-full lg:w-auto lg:order-1 bg-white shadow-sm my-2 lg:mx-5 lg:rounded-3xl relative z-50 ">
         <SideBar />
         <div className="py-3 block lg:hidden">.</div>
      </div>
   )
}
