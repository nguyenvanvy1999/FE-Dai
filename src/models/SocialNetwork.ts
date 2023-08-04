import { ElementType } from 'react'
import { FaRss, FaYoutube, FaFacebook } from 'react-icons/fa'

export interface SocialNetwork {
  background: string
  icon: ElementType
  iconClassName?: string
  path: string
}

export const SocialNetworks: SocialNetwork[] = [
  {
    background: 'bg-yellow-500',
    icon: FaRss,
    iconClassName: 'w-14px h-4',
    path: '',
  },
  {
    background: 'bg-red-500',
    icon: FaYoutube,
    iconClassName: 'w-14px h-4 fill-white',
    path: '',
  },
  {
    background: 'bg-blue-light-100',
    icon: FaFacebook,
    iconClassName: 'w-14px h-4 fill-white',
    path: '',
  },
]
