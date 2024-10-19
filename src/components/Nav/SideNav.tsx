import { useState } from 'react'
import NavLink from '../Base/NavLink'
import { navLinks } from '../../utils/routes'
import Logo from '../../assets/logo.svg'
import LogoSmall from '../../assets/logo-small.svg'
import CollapseIcon from '../../Icons/CollapseIcon';
import Toggle from '../Base/Toggle'
import { useTheme } from '../../Context/ThemeProvider';
import AvatarIcon from '../../assets/avatar-icon.svg'
import CloseIcon from '../../Icons/CloseIcon'
import MenuIcon from '../../Icons/MenuIcon'

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('Home')
  const [openMobileNav, setOpenMobileNav] = useState(false)
  const { toggleTheme, darkMode } = useTheme();

  const mainSlideClass = `w-full md:max-w-[240px]  ${collapsed ? 'md:w-[64px]' : 'md:w-[240px]'} 
    opacity-0 md:!opacity-100 absolute top-0 right-0 -left-[100vw] md:!left-0 bottom-0 
    md:relative h-[100vh] md:h-[90vh] bg-main-light dark:bg-main-dark border-r transition-all delay-100 
    md:transition-none border-border-primary dark:border-none p-4 md:p-2
    ${openMobileNav ? '!left-0 !opacity-100' : '!-left-[100vw] !opacity-0'}`

  return (
    <aside className={`w-full ${collapsed ? 'md:w-[64px]' : 'md:w-[240px]'}`}>
      <div className="w-full md:hidden p-4 flex justify-between items-center ">
        <div className={`cursor-pointer h-[48px]}`}>
          <img src={Logo} alt="logo" width="64" height="32" />
        </div>
        <div className="ml-auto" onClick={() => setOpenMobileNav(!openMobileNav)}>
          {darkMode ? <MenuIcon color="#fff" /> : <MenuIcon  />}
        </div>
      </div>
      <div className={mainSlideClass}
      >
        <div className="flex flex-col gap-2 items-center">
          <div className={`w-full p-2 hidden md:flex items-center gap-4 cursor-pointer h-[48px] mb-2 ${collapsed && 'justify-center'}`}>
            {!collapsed
              ? <img src={Logo} alt="logo" width="64" height="32" />
              : <img src={LogoSmall} alt="logo" width="32" height="32" />
            }
          </div>
          <div className="md:hidden w-full pb-6 flex justify-between items-center">
            <img src={Logo} alt="logo" width="64" height="32" className="cursor-pointer" />
            <span onClick={() => setOpenMobileNav(!openMobileNav)}>
              <CloseIcon  />
            </span>
          </div>
          {navLinks.map(({ label, Icon}, index) => (
            <div key={index} className="w-full" onClick={() => setActive(label)}>
              <NavLink
                Icon={Icon}
                label={!collapsed ? label : ''}
                notificationCount={label === 'Notifications' ? 3 : undefined}
                active={active === label}
                centered={collapsed}
              />
            </div>
          ))}
          <div
            className={`w-full p-2 flex items-center gap-4 cursor-pointer ${collapsed ? 'justify-center' : 'pl-4'}`}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed
              ? <span className={`rotate-180`}>
                  <CollapseIcon color={darkMode ? '#fff' : '#ADA9BB'} />
                </span>
              : <span className={``}>
                  <CollapseIcon color={darkMode ? '#fff' : '#ADA9BB'} />
                </span>}
            {!collapsed && <p className={'text-text-alt-ligh dark:text-secondary'}>Collapse</p>}
          </div>
          <div
            className={`w-full p-2 flex items-center gap-4 cursor-pointer ${collapsed ? 'justify-center' : 'pl-4'}`}
            onClick={toggleTheme}
          >
            <Toggle isOn={darkMode} />
            {!collapsed && <p className={'text-text-alt-light dark:text-secondary'}>Dark mode</p>}
          </div>
          <div
            className={`w-full p-2 flex items-center gap-4 cursor-pointer ${collapsed ? 'justify-center' : 'pl-4'}`}
            onClick={toggleTheme}
          >
            <img src={AvatarIcon} alt="avatar" width="32" height="32" />
            {!collapsed && <div className="leading-4 text-xs">
              <p className="text-text-alt-light dark:text-secondary ">Rudra Devi</p>
              <p className="text-table-header dark:text-secondary">rudra.devi@gmail.com</p>
            </div>}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideNav