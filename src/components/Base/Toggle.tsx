
const Toggle = ({ isOn, onClick }: { isOn: boolean, onClick?: () => void}) => {
  return (
    <div
      className={`w-6 h-4 rounded-full bg-grey-1 dark:bg-primary cursor-pointer p-[2px] flex`}
      onClick={onClick && onClick}
    >
      <span
        className={`w-3 h-3 rounded-full bg-white transition-all ${isOn ? 'ml-auto' : 'ml-0'}`}
      ></span>
    </div>
  )
}

export default Toggle