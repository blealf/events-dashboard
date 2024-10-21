/* eslint-disable @typescript-eslint/no-explicit-any */
 
import DropdownIcon from '../../Icons/DropdownIcon'
import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../../Context/ThemeProvider'

const DropDown = (
  { title, items, selected, setSelected, className }:
  { title: string, items: string[], selected: string | number, setSelected: (value: any) => void, className?: string }
) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownItemsRef = useRef<HTMLDivElement>(null)
  
   const { darkMode } = useTheme()

  /* The `useEffect` is used to handle the functionality of closing
  the dropdown when a user clicks outside of it. Here's a breakdown of what it does: */
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownItemsRef.current && !dropdownItemsRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div
      ref={dropdownItemsRef}
      className={`relative py-2 px-4 max-h-9 h-9 w-auto flex justify-between items-center gap-2 border border-grey-1 
      dark:border-none dark:bg-main-dark rounded-[2px] cursor-pointer ${className && className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="text-sm text-text-alt-light dark:text-card-border whitespace-nowrap">{title}</p>
      <DropdownIcon color={darkMode ? '#ADA9BB' : '#334155'} />
      {isOpen && <div
        className={`bg-main-light dark:bg-main-dark shadow-md rounded-[2px] absolute ${isOpen ? 'top-10' : 'top-0'} transition-all delay-500 right-0 left-0 min-h-9 w-full pb-[2px] rounded-b-[5px] z-[2] border border-table-header max-h-[300px] overflow-y-auto`}
        style={{ scrollbarWidth: 'thin' }}
      >
        {!!items.length && items.map((item, index) => (
          <p
            key={index}
            className={`w-full text-xs overflow-hidden whitespace-nowrap text-ellipsis text-text-alt-light dark:text-text-dark p-2 border-b border-table-header last:border-none cursor-pointer ${selected === item && '!text-primary dark:!text-primary'}`}
            onClick={() => setSelected(item)}
          >
            {item}
          </p>
        ))}
      </div>}
    </div>
  )
}

export default DropDown