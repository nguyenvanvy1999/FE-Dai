import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'text'

export interface ButtonProps {
  onClick?: () => void
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  onClick,
  children,
  variant,
  className,
  type = 'button',
  disabled,
}: ButtonProps) {
  switch (variant) {
    case 'primary':
      className += ' bg-green-400 text-white'
      break
    case 'success':
      className += ' bg-green-600 text-white'
      break
    case 'text':
      className += 'bg-transparent text-gray-500'
      break
    default:
      className += 'text-white'
  }
  return (
    <button
      className={`rounded-sm text-base transition-all px-5 py-1.5 font-medium hover:opacity-80 cursor-pointer ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
