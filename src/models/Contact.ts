import { ElementType } from 'react'

import { AiOutlineMail, AiOutlineClockCircle } from 'react-icons/ai'

import { BiLogoTelegram, BiLogoFacebookCircle } from 'react-icons/bi'

export interface Contact {
  path: string
  title: string
  icon: ElementType
  iconClassName?: string
}

export const ContactList: Contact[] = [
  {
    path: '',
    title: 'Chat với hỗ trợ viên',
    icon: BiLogoTelegram,
    iconClassName: 'w-15px h-15px',
  },
  {
    path: '',
    title: 'Tạp hóa MMO',
    icon: BiLogoFacebookCircle,
    iconClassName: 'w-15px h-15px',
  },
  {
    path: '',
    title: 'support@taphoammo.net',
    icon: AiOutlineMail,
    iconClassName: 'w-15px h-15px',
  },
  {
    path: '',
    title: 'Mon-Sat 08:00am - 10:00pm',
    icon: AiOutlineClockCircle,
    iconClassName: 'w-15px h-15px',
  },
]
