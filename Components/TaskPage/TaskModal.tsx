export default function TaskModal(props: any) {
   return (
      <div className="fixed  w-full h-[100vh] items-start overflow-auto flex justify-center  bg-black/50 z-10 ">
         {props.children}
      </div>
   )
}
