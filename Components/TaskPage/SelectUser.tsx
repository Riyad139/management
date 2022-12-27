import { SelectMenu } from 'evergreen-ui'
import { useState } from 'react'

export default function MultiSelectSelectMenuExample() {
   const [options] = useState(
      ['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber'].map(label => ({
         label,
         value: label,
      }))
   )
   const [selectedItemsState, setSelectedItems] = useState([])
   const [selectedItemNamesState, setSelectedItemNames] = useState(null)

   return (
      <SelectMenu
         isMultiSelect
         title="Select multiple names"
         options={options}
         selected={selectedItemsState}
         onSelect={item => {
            const selected = [...selectedItemsState, item.value]
            const selectedItems = selected
            const selectedItemsLength = selectedItems.length
            let selectedNames = ''
            if (selectedItemsLength === 0) {
               selectedNames = ''
            } else if (selectedItemsLength === 1) {
               selectedNames = selectedItems.toString()
            } else if (selectedItemsLength > 1) {
               selectedNames = selectedItemsLength.toString() + ' selected...'
            }
            setSelectedItems(selectedItems)
            setSelectedItemNames(selectedNames)
         }}
         onDeselect={item => {
            const deselectedItemIndex = selectedItemsState.indexOf(item.value)
            const selectedItems = selectedItemsState.filter(
               (_item, i) => i !== deselectedItemIndex
            )
            const selectedItemsLength = selectedItems.length
            let selectedNames = ''
            if (selectedItemsLength === 0) {
               selectedNames = ''
            } else if (selectedItemsLength === 1) {
               selectedNames = selectedItems.toString()
            } else if (selectedItemsLength > 1) {
               selectedNames = selectedItemsLength.toString() + ' selected...'
            }

            setSelectedItems(selectedItems)
            setSelectedItemNames(selectedNames)
         }}
      >
         <Button>{selectedItemNamesState || 'Select multiple...'}</Button>
      </SelectMenu>
   )
}
