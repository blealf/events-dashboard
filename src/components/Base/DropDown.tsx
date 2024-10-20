 
import DropdownIcon from '../../Icons/DropdownIcon'
import { useState } from 'react'
import { useTheme } from '../../Context/ThemeProvider'

const DropDown = (
  { title, items, selected, setSelected, className }:
  { title: string, items: string[], selected: string | number, setSelected: (value: string | number) => void, className?: string }
) => {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode } = useTheme()

  return (
    <div
      className={`relative py-2 px-4 max-h-9 h-9 w-auto flex justify-between items-center gap-2 border border-grey-1 
      dark:border-none dark:bg-main-dark rounded-[2px] cursor-pointer ${className && className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="text-sm text-text-alt-light dark:text-card-border whitespace-nowrap">{title}</p>
      <DropdownIcon color={darkMode ? '#ADA9BB' : '#334155'} />
      {isOpen && <div
        className={`flex flex-col gap-2 items-center bg-main-light dark:bg-main-dark shadow-md rounded-[2px] p-2 absolute ${ isOpen ?'top-9': 'top-0'} transition-all delay-500 righ-0 left-0 min-h-9 w-full z-[2]`}
      >
        {!!items.length && items.map((item, index) => (
          <p
            key={index}
            className={`w-full text-sm text-text-alt-light dark:text-text-dark cursor-pointer ${selected === item && 'text-primary dark:text-primary'}`}
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