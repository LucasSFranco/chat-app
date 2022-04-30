import React from 'react'
import c from 'classnames'

import { styled } from '../styles'
import { AvatarCSS } from './styles/Avatar'

const Avatar = styled('div', AvatarCSS)

export type AvatarProps = React.ComponentProps<typeof Avatar> & {
  size?: number
  src: string
  status: 'online' | 'offline'
}

const AppAvatar: React.FC<AvatarProps> = ({
  src,
  status,
  size = 40,
  className,
  ...props
}) => {
  const colors = {
    online: '#22C55E',
    offline: '#6B7280'
  }

  return (
    <Avatar className={c('avatar', className)} style={{ width: `${size}px`, height: `${size}px` }} {...props}>
      <svg width={size} height={size} viewBox="0 0 128 128">
        <defs>
          <mask id="avatar-status-mask" x="0" y="0" height="100%" width="100%">
            <path fillRule="evenodd" clipRule="evenodd" d="M122.864 89.1614C126.17 81.438 128 72.9327 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C72.9327 128 81.438 126.17 89.1614 122.864C83.5822 118.47 80 111.653 80 104C80 90.7452 90.7452 80 104 80C111.653 80 118.47 83.5822 122.864 89.1614Z" fill="#ffffff" />
          </mask>
          <mask id="status-online">
            <circle cx="104" cy="104" r="16" fill="#ffffff" />
          </mask>
          <mask id="status-offline">
            <path fillRule="evenodd" clipRule="evenodd" d="M104 120C112.837 120 120 112.837 120 104C120 95.1634 112.837 88 104 88C95.1634 88 88 95.1634 88 104C88 112.837 95.1634 120 104 120ZM104.012 113.148C109.058 113.148 113.148 109.057 113.148 104.012C113.148 98.9659 109.058 94.8754 104.012 94.8754C98.9661 94.8754 94.8757 98.9659 94.8757 104.012C94.8757 109.057 98.9661 113.148 104.012 113.148Z" fill="#ffffff" />
          </mask>
        </defs>
        <foreignObject mask="url(#avatar-status-mask)" x="0" y="0" height="100%" width="100%">
          { src ? <img src={src} /> : <div className="h-32 w-32 bg-gray-200" /> }
        </foreignObject>
        <rect x="88" y="88" width="32" height="32" mask={`url(#status-${status})`} fill={colors[status]} />
      </svg>
    </Avatar>
  )
}

export { AppAvatar as Avatar }
