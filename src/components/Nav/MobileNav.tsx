import { useState } from 'react'
import { mobileNavLinks } from '../../utils/routes'
import AvatarIcon from '../../assets/avatar-icon.svg'

const MobileNav = () => {
  const [active, setActive] = useState('Home')
  return (
    <div
      className="z-[99] md:hidden w-full fixed bottom-0 right-0 left-0 p-2 flex
      justify-between items-center gap-4 cursor-pointer bg-main-light
      dark:bg-main-alt-dark border-t border-icon-stroke-light"
    >
      {mobileNavLinks.map(({ Icon, label }, index) => (
        <div
          key={index}
          className={`w-1/5 h-full flex flex-col items-center gap-1 pt-2 ${active && 'bordert-2 border-primary'}`}
          onClick={() => setActive(label)}
        >
          {active === label ? <Icon color="#8576FF" /> : <Icon color="#ADA9BB" />}
          {active === label ? <p className="text-primary">{label}</p> : <p className="text-text-alt-light dark:text-secondary">{label}</p>}
        </div>
      ))}
      <div
        className={`w-1/5 h-full flex flex-col items-center gap-1 pt-2 ${active && 'bordert-2 border-primary'}`}
        onClick={() => setActive('Profile')}
      >
        {active === 'Profile' ? <img src={AvatarIcon} alt="avatar" /> : <img src={AvatarIcon} alt="avatar" />}
        {active === 'Profile' ? <p className="text-primary">Profile</p> : <p className="text-text-alt-light dark:text-secondary">Profile</p>}
      </div>
    </div>
  )
}

export default MobileNav