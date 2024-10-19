/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from '../../Context/ThemeProvider';
import StatusDotIcon from '../../Icons/StatusDotIcon';

const NavLink = (
  { Icon, label, active, centered, notificationCount }:
    { Icon: any, label?: string, active?: boolean, centered?: boolean, notificationCount?: number }
) => {
  const { darkMode } = useTheme();

  return (
    <div className={`w-full cursor-pointer flex items-center gap-4 rounded-[2px] relative
      p-2 ${active ? 'bg-secondary dark:bg-primary' : ''} ${centered ? 'justify-center' : '!pl-4'}`}
    >
      {Icon && <Icon color={active && !darkMode ?  '#8576FF' : '#ADA9BB'} />}
      {label && <p className={`leading-[20px] ${active ? 'text-primary dark:text-secondary' : 'text-text-alt-light dark:text-secondary'}`}>
        {label}
      </p>}
      {notificationCount ? centered
        ? <span className="absolute top-0 right-0"><StatusDotIcon color = "red"/> </span>
        : <p
            className="text-text-dark bg-danger ml-auto w-6 h-6 rounded-full 
            flex items-center justify-center text-xs"
          ><span>{notificationCount}</span></p>
        : null
      }
    </div>
  )
}

export default NavLink