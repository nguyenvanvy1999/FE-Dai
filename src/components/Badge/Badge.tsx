import { ReactNode } from 'react'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning'

export interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

export default function Badge({ children, variant, className }: BadgeProps) {
  switch (variant) {
    case 'primary':
      className += ' bg-green-400'
      break
    case 'secondary':
      className += ' bg-green-600'
      break
    case 'success':
      className += ' bg-green-300'
      break
    case 'warning':
      className += ' bg-yellow-300'
      break
    default:
      className += ' bg-green-100'
  }
  return (
    <div
      className={`py-3px px-1.5 font-medium rounded-1 rounded-1.5 text-white text-center text-sm text-12px ${className}`}
    >
      {children}
    </div>
  )
}
