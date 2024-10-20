import { useState, useEffect } from 'react'
import Toolbar from './Toolbar'
import DataTable from './DataTable'
import { data } from '../../utils/data'

const Table = () => {
  const [filteredItems, setFilteredItems] = useState(data)
  const tableHeader = [
    { name: 'Event Name', value: 'name' },
    { name: 'Date', value: 'date' },
    { name: 'Speaker', value: 'speaker' },
    { name: 'Status', value: 'status' },
  ]
  const mobileHeader = [
    { name: 'Event Name', value: 'name' },
    { name: 'Status', value: 'status' },
  ]

  useEffect(() => {
    setFilteredItems(data)
  }, [])

  return (
    <div className="w-full flex flex-col mt-7">
      <h2 className="p-5 md:p-0 mb-[6px] text-lg leading-[16px] font-[500] text-text-light dark:text-text-dark"
      >Events History</h2>
      <Toolbar items={data} setFilteredItems={setFilteredItems} />
      <DataTable header={tableHeader} mobileHeader={mobileHeader} dataItems={filteredItems} />
    </div>
  )
}

export default Table