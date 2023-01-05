import {
   Button,
   Label,
   Pane,
   SelectMenu,
   TagInput,
   Textarea,
   TextInput,
   TextInputField,
} from 'evergreen-ui'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { Dispatch, SetStateAction, useState } from 'react'

//registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function TaskAddModal(props: {
   Handler: Dispatch<SetStateAction<boolean>>
}) {
   const [values, setValues] = useState([])
   const [files, setFiles] = useState([])
   return (
      <div className=" w-[36rem] bg-white my-10  py-14 px-5 sm:px-9 lg:px-14 space-y-5">
         <div className="input w-full ">
            <TextInputField
               className="py-5 !text-sm"
               label="Task Name"
               placeholder="Placeholder text"
            />
         </div>
         <div className="tags w-full">
            <p className="font-[370] text-gray-700 -mt-2 mb-2 text-sm">Task Tags</p>
            <TagInput
               inputProps={{ placeholder: 'Add tags...' }}
               values={values}
               tagSubmitKey="space"
               width="100%"
               className="max-w-lg !py-1.5 !text-xl w-lg max-h-[10rem]"
               onChange={values => {
                  setValues(values)
               }}
            />
         </div>
         <div>
            <Pane>
               <Label htmlFor="textarea-2" marginBottom={4} display="block">
                  Task descriptions
               </Label>
               <Textarea
                  className="resize-none"
                  id="textarea-2"
                  placeholder="Task Descriptions..."
               />
            </Pane>
         </div>
         <div className="file uploader">
            <FilePond
               credits={false}
               files={files}
               allowReorder={true}
               allowMultiple={true}
               onupdatefiles={setFiles}
               labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
         </div>
         <div className="mt-5 mb-10">
            <SelectMenu
               title="Assign to :"
               options={[
                  {
                     label: 'Robin Miah',
                     value: 'id1',
                     icon: '/ProfileImage/vicky.jpg',
                  },
                  {
                     label: 'Saif Miah',
                     value: 'id2',
                     icon: '/ProfileImage/vicky.jpg',
                  },
               ]}
            >
               <Button height={60} width="100%">
                  Select users...
               </Button>
            </SelectMenu>
         </div>
         <div className="space-y-3 mt-10">
            <Button
               onClick={() => props.Handler(false)}
               marginRight={16}
               height={40}
               appearance="primary"
               width="100%"
               intent="add"
            >
               Add Task
            </Button>
            <Button
               onClick={() => props.Handler(false)}
               marginRight={16}
               height={40}
               width="100%"
               intent="cancel"
            >
               Cancel
            </Button>
         </div>
      </div>
   )
}
