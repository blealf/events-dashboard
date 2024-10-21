/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '../Base/Input'
import DropDown from '../Base/DropDown'
import ExportIcon from '../../Icons/EsportIcon'
import ThreeDotsIcon from '../../Icons/ThreeDotsIcon'
import { useTheme } from '../../Context/ThemeProvider'
import { useEffect, useState } from 'react'

const Toolbar = ({ items, setFilteredItems }: { items: any, setFilteredItems: any }) => {

  const [toolbarFiltered, setToolbarFiltered] = useState(items);

  const { darkMode } = useTheme();

  useEffect(() => {
    setToolbarFiltered(items)
  }, [])

  useEffect(() => {
    setFilteredItems(toolbarFiltered)
  }, [toolbarFiltered, setFilteredItems])

  const handleSearchItems = (e: any) => {
    console.log(e.target.value)
    if(!e.target.value) return setFilteredItems(items)
    setFilteredItems(items.filter((item: any) => item.name.toLowerCase().includes(e.target.value.toLowerCase() || item.speeaker.toLowerCase().includes(e.target.value.toLowerCase()))))
  }

  return (
    <div className="p-5 md:p-0 w-full flex flex-col xl:flex-row items-center justify-between gap-2">
      <div className="w-full flex flex-col md:flex-row items-center gap-2">
        <Input value="" onChange={handleSearchItems} />
        <DropDown 
          title="Date" 
          items={[]} selected="" setSelected={() => { }} className="w-full lg:w-auto" />
        <DropDown 
          title="Status" 
          items={['All'].concat(Array.from(new Set(items.map(({ status }: { status: string }) => status))))}
          selected=""
          setSelected={(value: string) => { 
            setToolbarFiltered(value === 'All' ? items : items.filter((item: any) => item.status === value))
          }} className="w-full lg:w-auto" />
        <DropDown 
          title="Name" 
          items={['All'].concat(Array.from(new Set(items.map(({ name }: { name: string }) => name))))}
          selected=""
          setSelected={() => { }} className="w-full lg:w-auto" />
      </div>
      <p className="mr-auto text-text-alt-light dark:text-text-dark font-[600] text-sm leading-[20px] whitespace-nowrap"
      >Displaying 100 results</p>
      <div className="w-full flex flex-col md:flex-row justify-end items-center gap-2">
        <div className="w-full md:w-auto ml-auto flex justify-between md:justify-start items-center gap-2">
          <p className="text-text-alt-light dark:text-card-border text-sm leading-[20px]">Sort: </p>
          <DropDown title="Most Recent" items={[]} selected="" setSelected={() => { }} />
        </div>
        <div className="w-full md:w-auto flex justify-between md:justify-start items-center gap-2">
          <div className="flex items-center gap-2 p-2 border border-grey-1 dark:border-none dark:bg-main-dark rounded-[2px] cursor-pointer">
            <ThreeDotsIcon color={darkMode ? '#ADA9BB' : '#334155'} />
          </div>
          <div className="flex items-center gap-2 p-2 px-4 border border-grey-1 dark:border-none dark:bg-main-dark rounded-[2px] cursor-pointer">
            <ExportIcon color={darkMode ? '#ADA9BB' : '#334155'} />
            <p className="text-text-alt-light dark:text-card-border text-sm leading-[20px]">Export</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toolbar