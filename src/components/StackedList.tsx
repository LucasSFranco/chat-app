import React, { useState } from 'react'
import c from 'classnames'

import { styled } from '../styles'
import { StackedListCSS, StackedListItemCSS } from './styles/StackedList'
import { useEffect } from 'react'

const StackedList = styled('ul', StackedListCSS)
const StackedListItem = styled('li', StackedListItemCSS)

export type StackedListProps = React.ComponentProps<typeof StackedList>

export type StackedListItemProps = React.ComponentProps<typeof StackedListItem> & {
  onMouseHold?: () => void
}

export type StackedListComposition = { Item: React.FC<StackedListItemProps> }

const AppStackedList: React.FC<StackedListProps> & StackedListComposition = ({
  className,
  children,
  ...props
}) => {
  return (
    <StackedList className={c('stacked-list', className)} {...props}>
      { children }
    </StackedList>
  )
}

AppStackedList.Item = ({
  className,
  children,
  onMouseHold,
  ...props
}) => {
  const [mouseTimer, setMouseTimer] = useState<number | null>(null)

  const stopHolding = (e?: React.PointerEvent<HTMLLIElement>) => {
    e?.preventDefault()

    if (mouseTimer) window.clearTimeout(mouseTimer)
  }

  const startHolding = (e: React.PointerEvent<HTMLLIElement>) => {
    e.preventDefault()

    stopHolding()
    if (onMouseHold)
      setMouseTimer(window.setTimeout(onMouseHold, 1000))
  }

  useEffect(() => stopHolding(), [])

  return (
    <StackedListItem
      className={c('stacked-list-item', className)}
      onPointerUp={(e) => stopHolding(e)}
      onPointerDown={(e) => startHolding(e)}
      {...props}
    >
      { children }
    </StackedListItem>
  )
}

export { AppStackedList as StackedList }
