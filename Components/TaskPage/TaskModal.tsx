export default function TaskModal(props: any) {
   return (
      <div className="absolute  w-full h-full  flex  bg-black/50 z-10 ">
         <div className="absolute rounded-md bg-white top-[10%] left-[50%] -translate-x-[50%] -trnslate-y-[50%] z-40 ">
            {props.children}
         </div>
      </div>
   )
}
