/* eslint-disable @typescript-eslint/no-explicit-any */
import HomeIcon from '../Icons/HomeIcon';
import EventsIcon from '../Icons/EventsIcon';
import SpeakersIcon from '../Icons/SpeakersIcon';
import ReportsIcon from '../Icons/ReportsIcon';
import NotificationsIcon from '../Icons/NotificationsIcon';
import MessagesIcon from '../Icons/MessagesIcon';
import SettingsIcon from '../Icons/SettingsIcon';

export const navLinks: { Icon: any; label: string; active: boolean }[] = [
  {
    Icon: HomeIcon,
    label: 'Home',
    active: true
  },
  {
    Icon: EventsIcon,
    label: 'Events',
    active: false
  },
  {
    Icon: SpeakersIcon,
    label: 'Speakers',
    active: false
  },
  {
    Icon: ReportsIcon,
    label: 'Reports',
    active: false
  },
  {
    Icon: NotificationsIcon,
    label: 'Notifications',
    active: false
  },
  {
    Icon: MessagesIcon,
    label: 'Messages',
    active: false
  },
  {
    Icon: SettingsIcon,
    label: 'Settings',
    active: false
  },
]

export const mobileNavLinks = navLinks.slice(0, 4)