/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '../Base/Input'
import DropDown from '../Base/DropDown'
import ExportIcon from '../../Icons/EsportIcon'
import ThreeDotsIcon from '../../Icons/ThreeDotsIcon'
import { useTheme } from '../../Context/ThemeProvider'
import { useEffect, useState } from 'react'
import { dateFilters, filterDates} from '../../utils/filterDate'
// import CloseIcon from '../../Icons/CloseIcon'

const Toolbar = ({ items, setFilteredItems }: { items: any, setFilteredItems: any }) => {

  const [toolbarFiltered, setToolbarFiltered] = useState(items);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedName, setSelectedName] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');
  const [selectedSort, setSelectedSort] = useState('None');
  const [allFilters, setAllFilters] = useState([
    { name: 'Date', value: 'All' },
    { name: 'Status', value: 'All' },
    { name: 'Name', value: 'All' },
    { name: 'Sort', value: 'All' },
    { name: 'All filters', value: 'All' },
  ]);

  const { darkMode } = useTheme();

  useEffect(() => {
    setToolbarFiltered(filterDates(items, selectedSort))
  }, [])

  useEffect(() => {
    setFilteredItems(toolbarFiltered)
  }, [toolbarFiltered, setFilteredItems])

  /**
   * The function `handleSearchItems` filters items based on a search input value and updates the
   * filtered items state accordingly.
   * @param {any} e - The parameter `e` in the `handleSearchItems` function is an event object that is
   * passed when the search input field triggers an event, such as a change event. It contains
   * information about the event, including the target element that triggered the event and the value
   * of the input in that element.
   * @returns The function `handleSearchItems` returns `setFilteredItems(items)` if `e.target.value` is
   * falsy. Otherwise, it returns the result of filtering the `items` array based on whether the `name`
   * or `speaker` property of each item includes the `e.target.value` (case-insensitive).
   */
  const handleSearchItems = (e: any) => {
    console.log(e.target.value)
    if(!e.target.value) return setFilteredItems(items)
    setFilteredItems(items.filter(
      (item: any) => item.name.toLowerCase().includes(e.target.value.toLowerCase()
        || item.speeaker.toLowerCase().includes(e.target.value.toLowerCase()))
    ))
  }

  const handleUpdateFilter = (key: string, value: string) => {
    console.log({ key, value })
    switch (key) {
      case 'Date':
        setSelectedDate('All')
        break
      case 'Status':
        setSelectedStatus('All')
        break
      case 'Name':
        setSelectedName('All')
        break
      case 'Sort':
        setSelectedSort('None')
        break
      case 'All filters':
        setSelectedDate('All')
        setSelectedStatus('All')
        setSelectedName('All')
        setSelectedSort('None')
        break
    }

    setAllFilters([...allFilters.filter(({ name }) => name !== key), { name: key, value }])
  }

  return (
    <>
      <div className="p-5 md:p-0 w-full flex flex-col xl:flex-row items-center justify-between gap-2">
        <div className="w-full flex flex-col md:flex-row items-center gap-2">
          <Input value="" onChange={handleSearchItems} />
          <DropDown 
            title="Date" 
            items={['All'].concat(Array.from(new Set(items.map(({ date }: { date: string }) => date))))}
            selected={selectedDate}
            setSelected={(value: string) => { 
              setSelectedDate(value)
              setToolbarFiltered(value === 'All' ? items : items.filter((item: any) => item.date === value))
              handleUpdateFilter('Date', value)
            }}
            className="w-full lg:w-auto"
          />
          <DropDown 
            title="Status" 
            items={['All'].concat(Array.from(new Set(items.map(({ status }: { status: string }) => status))))}
            selected={selectedStatus}
            setSelected={(value: string) => { 
              setSelectedStatus(value)
              setToolbarFiltered(value === 'All' ? items : items.filter((item: any) => item.status === value))
              handleUpdateFilter('Status', value)
            }} className="w-full lg:w-auto" />
          <DropDown 
            title="Name" 
            items={['All'].concat(Array.from(new Set(items.map(({ speaker }: { speaker: string }) => speaker))))}
            selected={selectedName}
            setSelected={(value: string) => {
              setSelectedName(value)
              setToolbarFiltered(value === 'All' ? items : items.filter((item: any) => item?.speaker === value))
              handleUpdateFilter('Name', value)
            }} className="w-full lg:w-auto" />
        </div>
        <p className="mr-auto text-text-alt-light dark:text-text-dark font-[600] text-sm leading-[20px] whitespace-nowrap"
        >Displaying 100 results</p>
        <div className="w-full flex flex-col md:flex-row justify-end items-center gap-2">
          <div className="w-full md:w-auto ml-auto flex justify-between md:justify-start items-center gap-2">
            <p className="text-text-alt-light dark:text-card-border text-sm leading-[20px]">Sort: </p>
            <DropDown
              title={selectedSort}
              items={['None'].concat(dateFilters)}
              selected={selectedSort}
              setSelected={(value: string) => { 
                setSelectedSort(value)
                setToolbarFiltered(filterDates(items, value))
                handleUpdateFilter('Sort', value)
              }}
              className="min-w-[135px]"
            />
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
      {/* <div className="mt-2 flex justify-start flex-wrap gap-2 items-center">
        {allFilters.map((filter, index) => (
          filter?.value !== 'All' && <p key={index} className={`max-w-[100px] py-1 px-2 text-xs rounded-[100px] flex justify-center 
            items-center gap-2 border border-success text-success`}>
            <span className="overflow-hidden whitespace-nowrap text-ellipsis"> {filter.value}</span>
            <span className="cursor-pointer" onClick={() => handleUpdateFilter(filter?.name, 'All')}><CloseIcon /></span>
          </p>
        ))
        }
      </div> */}
    </>
  )
}

export default Toolbar