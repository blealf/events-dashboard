/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchIcon from '../../Icons/SearchIcon'

const Input = (
  { value, onChange }: { value: string, onChange: (e: any) => void }
) => {
  return (
    <div className="p-2 max-h-9 w-full flex items-center gap-2 border border-grey-1 
      dark:border-none dark:bg-main-dark rounded-[2px]"
    >
      <SearchIcon />
      <input
        type="text"
        defaultValue={value}
        onChange={onChange}
        placeholder="Search..."
        className="!h-[20px] w-full bg-transparent focus:outline-none border-none text-text-alt-light dark:text-card-border"
      />
    </div>
  )
}

export default Input