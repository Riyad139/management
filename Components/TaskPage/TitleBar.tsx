export default function TitleBar(props: {
   name: string
   tags: string[]
   hours: string
   assign: { img: string; name: string }
   date: string
}) {
   return (
      <div>
         <div className="text-xs grid grid-cols-12 mb-7 text-gray-500">
            <div className=" col-start-1 col-end-13 md:col-end-7 lg:col-end-5 bg-white rounded-l-md flex py-2 space-x-5  items-center border">
               {props.name == 'Task name' && <p className="ml-5 text-base">#</p>}
               <p>{props.name}</p>
            </div>
            <div className="col-start-5 col-end-7 hidden lg:flex  bg-white   p-1 items-center border">
               <p className="ml-5">{props.tags[0]}</p>
            </div>
            <div className="col-start-7 col-end-9 bg-white hidden md:flex   p-1 items-center border">
               <p className="ml-5">{props.hours}</p>
            </div>
            <div className="col-start-9 col-end-11 bg-white  hidden md:flex p-1 items-center border">
               <div>
                  {props.assign.img !== '' && <img src={props.assign.img} />}
                  <p className="ml-5">{props.assign.name}</p>
               </div>
            </div>
            <div className="col-start-11 col-end-13 bg-white rounded-r-md hidden md:flex p-1 items-center border">
               <p className="ml-5">{props.date}</p>
            </div>
         </div>
      </div>
   )
}
