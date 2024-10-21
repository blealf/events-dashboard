/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from '../Base/Input'
import DropDown from '../Base/DropDown'
import ExportIcon from '../../Icons/EsportIcon'
import ThreeDotsIcon from '../../Icons/ThreeDotsIcon'
import { useTheme } from '../../Context/ThemeProvider'
import { useEffect, useState } from 'react'
import { dateFilters, filterDates} from '../../utils/filterDate'
import CloseIcon from '../../Icons/CloseIcon'

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
  ]);

  const { darkMode } = useTheme();

  /* The `useEffect` hook is responsible for updating the `toolbarFiltered` state based on
  the `items` and `selectedSort` values. */
  useEffect(() => {
    setToolbarFiltered(filterDates(items, selectedSort))
  }, [items, selectedSort])

  /* The `useEffect` hook is responsible for updating the `filteredItems` state whenever
  there is a change in the `toolbarFiltered` state. */
  useEffect(() => {
    setFilteredItems(toolbarFiltered)
  }, [toolbarFiltered, setFilteredItems])

  /* This `useEffect` hook is responsible for filtering the items based on the selected filters
  whenever there is a change in any of the dependencies specified in the dependency array
  `[selectedDate, selectedStatus, selectedName, selectedSort, allFilters, items, setFilteredItems]`. */
  useEffect(() => {
    let toFilter = [...items]
    allFilters.forEach(({name, value }) => {
      if (name === 'Date' && value !== 'All') {
        toFilter = toFilter.filter((item: any) => item.date === selectedDate)
      }
      
      if (name === 'Status' && value !== 'All') {
        toFilter = toFilter.filter((item: any) => item.status === selectedStatus)
      }

      if (name === 'Name' && value !== 'All') {
        toFilter = toFilter.filter((item: any) => item.speaker === selectedName)
      }
      
      if (name === 'Sort' && value !== 'None') {
        toFilter = filterDates(toFilter, selectedSort)
      }
    })
    setToolbarFiltered(toFilter)
  }, [selectedDate, selectedStatus, selectedName, selectedSort, allFilters, items, setFilteredItems])

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
    if(!e.target.value) return setFilteredItems(items)
    setFilteredItems(items.filter(
      (item: any) => item.name.toLowerCase().includes(e.target.value.toLowerCase()
        || item.speeaker.toLowerCase().includes(e.target.value.toLowerCase()))
    ))
  }

  /**
   * The function `handleUpdateFilter` updates filter values based on the provided key and value, and
   * also updates the list of all filters accordingly.
   * @param {string} key - The `key` parameter in the `handleUpdateFilter` function represents the type
   * of filter being updated. It could be 'Date', 'Status', 'Name', 'Sort', or 'All filters'.
   * @param {string} value - The `value` parameter in the `handleUpdateFilter` function represents the
   * new value that you want to set for the corresponding filter key. When you call
   * `handleUpdateFilter` with a specific key and value, it updates the selected filter value based on
   * the key provided.
   */
  const handleUpdateFilter = (key: string, value: string) => {
    switch (key) {
      case 'Date':
        setSelectedDate(value)
        break
      case 'Status':
        setSelectedStatus(value)
        break
      case 'Name':
        setSelectedName(value)
        break
      case 'Sort':
        setSelectedSort(value)
        break
      case 'All filters':
        setSelectedDate('All')
        setSelectedStatus('All')
        setSelectedName('All')
        setSelectedSort('None')
        break
    }
    if (key === 'All filters') {
      setAllFilters([
        { name: 'Date', value: 'All' },
        { name: 'Status', value: 'All' },
        { name: 'Name', value: 'All' },
        { name: 'Sort', value: 'None' },
      ])
      return
    }
    /* The line `setAllFilters([...allFilters.filter(({ name }) => name !== key), { name: key, value
    }])` is updating the state of the `allFilters` array in the component. Here's a breakdown of
    what it does: */
    setAllFilters([...allFilters.filter(({ name }) => name !== key), { name: key, value }])
  }

  return (
    <>
      <div className="p-5 md:p-0 w-full flex flex-col xl:flex-row items-center justify-between gap-2">
        <div className="w-full flex flex-col md:flex-row items-center gap-2">
          <Input value="" onChange={handleSearchItems} />
          <DropDown 
            title="Date" 
            items={['All'].concat(Array.from(new Set(toolbarFiltered.map(({ date }: { date: string }) => date))))}
            selected={selectedDate}
            setSelected={(value: string) => { 
              handleUpdateFilter('Date', value)
            }}
            className="w-full lg:w-auto"
          />
          <DropDown 
            title="Status" 
            items={['All'].concat(Array.from(new Set(toolbarFiltered.map(({ status }: { status: string }) => status))))}
            selected={selectedStatus}
            setSelected={(value: string) => { 
              handleUpdateFilter('Status', value)
            }} className="w-full lg:w-auto" />
          <DropDown 
            title="Name" 
            items={['All'].concat(Array.from(new Set(toolbarFiltered.map(({ speaker }: { speaker: string }) => speaker))))}
            selected={selectedName}
            setSelected={(value: string) => {
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
                handleUpdateFilter('Sort', value)
                // setSelectedSort(value)
                // setToolbarFiltered(filterDates(items, value))
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
      {/* Current filters */}
      <div className="mt-2 flex justify-start flex-wrap gap-2 items-center">
        {allFilters.map((filter, index) => (
          !['All', 'None'].includes(filter.value) && <p key={index} className={` py-1 px-2 text-xs rounded-[100px] flex justify-center 
            items-center gap-2 border border-success text-success`}>
            <span className="overflow-hidden whitespace-nowrap text-ellipsis"> {filter.value}</span>
            <span className="cursor-pointer" onClick={() => handleUpdateFilter(filter?.name, 'All')}><CloseIcon /></span>
          </p>
        ))
        }
        {allFilters.some((val) => !['All', 'None'].includes(val.value)) && <p className={`max-w-[100px] py-1 px-2 text-xs rounded-[100px] flex justify-center 
            items-center gap-2 border border-blue-text text-blue-text`}>
            <span className="overflow-hidden whitespace-nowrap text-ellipsis">Clear All</span>
            <span className="cursor-pointer" onClick={() => handleUpdateFilter('All filters', 'All')}><CloseIcon /></span>
          </p>}
      </div>
    </>
  )
}

export default Toolbar