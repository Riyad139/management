export default function TitleBar(props: {
   name: string
   tags: string[]
   hours: string
   assign: { img: string; name: string }
   date: string
}) {
   return (
      <div>
         <div className="text-xs flex mb-7 text-gray-500">
            <div className="w-[50%] bg-white rounded-l-md flex py-2 space-x-5  items-center border">
               {props.name == 'Task name' && <p className="ml-5 text-base">#</p>}
               <p>{props.name}</p>
            </div>
            <div className="w-[10%]  bg-white  flex p-1 items-center border">
               <p className="ml-5">{props.tags[0]}</p>
            </div>
            <div className="w-[10%] bg-white  flex p-1 items-center border">
               <p className="ml-5">{props.hours}</p>
            </div>
            <div className="w-[20%] bg-white  flex p-1 items-center border">
               <div>
                  {props.assign.img !== '' && <img src={props.assign.img} />}
                  <p className="ml-5">{props.assign.name}</p>
               </div>
            </div>
            <div className="w-[10%] bg-white rounded-r-md flex p-1 items-center border">
               <p className="ml-5">{props.date}</p>
            </div>
         </div>
      </div>
   )
}
