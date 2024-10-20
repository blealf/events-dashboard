/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import StatusDotIcon from '../../Icons/StatusDotIcon'
import AccordionIcon from '../../Icons/AccordionIcon'
import { useTheme } from '../../Context/ThemeProvider'
import DropDown from '../Base/DropDown'
import DropdownIcon from '../../Icons/DropdownIcon'

const DataTable = ({ header, mobileHeader, dataItems }: {
  header: { name: string, value: string }[],
  mobileHeader?: { name: string, value: string }[],
  dataItems?: any[]
}) => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState<number | null>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [items, setItems] = useState<any[]>([])
  const [pagedItems, setPagedItems] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [numPages, setNumPages] = useState<number>(1)

  const { darkMode } = useTheme()

  useEffect(() => {
    if (!dataItems) return
    const numberOfPages = Math.ceil(dataItems.length / rowsPerPage)
    const calcPageitems = Array.from(Array(numberOfPages))
      .map((_, i) => dataItems.slice(i * rowsPerPage, (i + 1) * rowsPerPage))
    console.log({ numberOfPages, calcPageitems })
    setNumPages(numberOfPages)
    setCurrentPage(1)
    setPagedItems(calcPageitems)
    setItems(pagedItems[currentPage - 1])
  }, [dataItems, rowsPerPage, numPages])

  useEffect(() => {
    setItems(pagedItems[currentPage - 1])
  }, [currentPage, pagedItems])

  const handleSetRowPerPage = (value: number) => {
    setRowsPerPage(value)
  }

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage !== numPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const statusStyle = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return `bg-green-bg text-success dark:bg-transparent dark:border dark:border-status-completed dark:text-status-completed
        `
      case 'in progress':
        return `bg-blue-bg text-blue-text dark:bg-transparent dark:border dark:border-status-inprogress dark:text-status-inprogress`
      default:
        return `bg-blue-bg text-blue-text dark:bg-transparent dark:border dark:border-status-inprogress dark:text-status-inprogress`
    }
  }

  const mobileStatusStyle = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return `bg-success text-text-dark`
      case 'in progress':
        return `bg-blue-text text-text-dark`
      default:
        return `bg-blue-text text-text-dark`
    }
  }

  return (
    <div className="w-full">
      <div className="block lg:hidden">
        <div className="w-full flex justify-between items-center gap-2 bg-border-primary dark:bg-table-header-bg mt-4 rounded-[2px]">
          {!!mobileHeader?.length && mobileHeader.map((item, index) => (
            <p key={index} className={`
               w-[84px] text-table-header dark:text-text-dark font-[600] text-xs leading-[16px] p-4 whitespace-nowrap`}
            >{item.name}</p>
          ))}
        </div>
        {!!items?.length && items.map((item, index) => (<div
          key={item.id}
          className={`relative ${activeAccordionIndex === index ? 'h-[90px]' : 'h-[45px]'} overflow-y-hidden transition-all duration-100`}
          onClick={() => setActiveAccordionIndex((val) => val === index ? null : index)}
        >
          <div className={`bg-main-light dark:bg-[#484554] ${activeAccordionIndex === index && 'bg-secondary dark:bg-[#514E5D]'} cursor-pointer w-full flex items-center gap-4 p-2`}>
            <span className={`-mt-[6px] ${activeAccordionIndex === index ? 'rotate-90' : 'rotate-0'}
              transition-all duration-300
              `}>{darkMode ? <AccordionIcon /> : <AccordionIcon color="#334155" />}</span>
            <p className="text-[15px] leading-7 dark:text-secondary overflow-hidden whitespace-nowrap text-ellipsis">{ item.name }</p>
            <p className={`ml-auto w-[84px] py-[2px] px-2 text-xs rounded-[100px] flex 
              whitespace-nowrap justify-center items-center gap-2
              ${mobileStatusStyle(item.status)}`}><span>{ item.status}</span>
              </p>
          </div>
          <div className="flex w-full items-center justify-between p-4 bg-[#F5F5F5] dark:bg-main-alt-dark
            border-b border-icon-stroke-light">
              <p className="text-sm leading-5 dark:text-secondary overflow-hidden whitespace-nowrap text-ellipsis"
              >{item.speaker}</p>
              <p className="text-sm leading-5 dark:text-secondary overflow-hidden whitespace-nowrap text-ellipsis"
              >{item.date}</p>
          </div>
        </div>))
        }
      </div>
      <div className="hidden lg:block">
        <div className="w-full grid grid-cols-4 items-center gap-2 bg-border-primary dark:bg-table-header-bg mt-4 rounded-[2px]">
          {!!header.length && header.map((item, index) => (
            <p key={index} className={`
              text-table-header dark:text-text-dark font-[600] text-xs leading-[16px] p-4 whitespace-nowrap`}
            >{item.name}</p>
          ))}
        </div>
        <div className="w-full flex flex-col items-center dark:bg-main-dark">
          {!!items?.length && items.map((item, index) => (
            <div key={index} className="w-full grid grid-cols-4 items-center gap-2 dark:bg-main-dark hover:bg-card-border hover:dark:bg-main-alt-dark cursor-pointer">
              {!!header.length && header.map(({ value }: { value: string }, index) => (
                value === 'status' ? <p className={`w-[110px] py-1 px-2 text-xs rounded-[100px] flex justify-center items-center gap-2
                  ${statusStyle(item[value])}
                `}>
                  {item[value] === 'Completed' ? <StatusDotIcon color="#65DDB5" /> : <StatusDotIcon color="#77B1FF" />}
                  <span>{item[value]}</span>
                </p> :
                  <p key={index} className={`
                  text-text-alt-light dark:text-text-dark font-[400] p-4 text-xs leading-[16px] whitespace-nowrap
                  overflow-hidden text-ellipsis`}
                  >{item[value]}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-betwen gap-2 mt-4">
        <div className="flex gap-[18px] items-center">
          <div
            className={`${currentPage === 1 ? 'bg-grey-1 dark:bg-[#484554]' : 'border border-border-primary dark:bg-[#484554] dark:border-none'} cursor-pointer p-2 rotate-90 `}
            onClick={handlePrevPage}
          >{darkMode ? <DropdownIcon color="#fff" /> : <DropdownIcon />}</div>
            {!!pagedItems?.length && pagedItems.map((_, index) => (
              <p className={`${currentPage === index + 1 && 'bg-primary text-main-light'} dark:text-text-dark  w-6 h-6 flex items-center  justify-center rounded-full text-sm`}>{ index + 1}</p>
            ))}
          <div
            className={`${currentPage === numPages ? 'bg-grey-1 dark:bg-[#484554]' : 'border border-border-primary dark:bg-[#484554] dark:border-none'} cursor-pointer p-2 -rotate-90 `}
            onClick={handleNextPage}
            >{darkMode ? <DropdownIcon color="#fff" /> : <DropdownIcon />}</div>
        </div>
        <div className="ml-auto">
          <DropDown title={`${rowsPerPage} rows`} items={['10', '15', '20']} selected={rowsPerPage} setSelected={handleSetRowPerPage} />
        </div>
      </div>
    </div>
  )
}

export default DataTable