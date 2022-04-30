import React, { ReactElement, ReactNode, useLayoutEffect, useRef, useState } from 'react'
import c from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { styled } from '../styles'
import { DroplistMenuCSS, DroplistMenuItemCSS, DroplistMenuSeparatorCSS } from './styles/DroplistMenu'

import { Icon } from './Icon'

const DroplistMenu = styled('ul', DroplistMenuCSS)
const DroplistMenuItem = styled('li', DroplistMenuItemCSS)
const DroplistMenuSeparator = styled('hr', DroplistMenuSeparatorCSS)

export type StackedListProps = React.ComponentProps<typeof DroplistMenu> & {
  direction?: 'top-left'
           | 'top-center'
           | 'top-right'
           | 'left-top'
           | 'left-bottom'
           | 'right-top'
           | 'right-bottom'
           | 'bottom-left'
           | 'bottom-center'
           | 'bottom-right'
  spacing?: number
  content: ReactNode
}

export type StackedListItemProps = React.ComponentProps<typeof DroplistMenuItem> & {
  icon?: IconProp
}

export type DroplistMenuSeparatorProps = React.ComponentProps<typeof DroplistMenuSeparator>

export type StackedListComposition = {
  Item: React.FC<StackedListItemProps>
  Separator: React.FC<DroplistMenuSeparatorProps>
}

const AppDroplistMenu: React.FC<StackedListProps> & StackedListComposition = ({
  direction = 'bottom-center',
  spacing = 8,
  className,
  children,
  content,
  ...props
}) => {
  const [show, setShow] = useState(false)
  const trigger = useRef<HTMLElement>(null)
  const droplistMenu = useRef<HTMLUListElement>(null)

  const toggleShow = () => {
    setShow(!show)
  }

  const hide = ({ target }: MouseEvent) => {
    if (trigger.current!.contains(target as Node)) return
    if (droplistMenu.current!.contains(target as Node)) return

    setShow(false)
  }

  const calculatePosition = (droplistMenuBox: DOMRect, triggerBox: DOMRect) => {
    switch (direction) {
      case 'top-left':
        droplistMenu.current!.style.top = `${triggerBox.y - droplistMenuBox.height - spacing}px`
        droplistMenu.current!.style.left = `${triggerBox.x + triggerBox.width - droplistMenuBox.width}px`
        break
      case 'top-center':
        droplistMenu.current!.style.top = `${triggerBox.y - droplistMenuBox.height - spacing}px`
        droplistMenu.current!.style.left = `${triggerBox.x + triggerBox.width / 2 - droplistMenuBox.width / 2}px`
        break
      case 'top-right':
        droplistMenu.current!.style.top = `${triggerBox.y - droplistMenuBox.height - spacing}px`
        droplistMenu.current!.style.left = `${triggerBox.x}px`
        break
      case 'left-top':
        droplistMenu.current!.style.top = `${triggerBox.y + triggerBox.height - droplistMenuBox.height}px`
        droplistMenu.current!.style.left = `${triggerBox.x - droplistMenuBox.width - spacing}px`
        break
      case 'left-bottom':
        droplistMenu.current!.style.top = `${triggerBox.y}px`
        droplistMenu.current!.style.left = `${triggerBox.x - droplistMenuBox.width - spacing}px`
        break
      case 'right-top':
        droplistMenu.current!.style.top = `${triggerBox.y + triggerBox.height - droplistMenuBox.height}px`
        droplistMenu.current!.style.left = `${triggerBox.x + triggerBox.width + spacing}px`
        break
      case 'right-bottom':
        droplistMenu.current!.style.top = `${triggerBox.y}px`
        droplistMenu.current!.style.left = `${triggerBox.x + triggerBox.width + spacing}px`
        break
      case 'bottom-left':
        droplistMenu.current!.style.top = `${triggerBox.y + triggerBox.height + spacing}px`
        droplistMenu.current!.style.left = `${triggerBox.x + triggerBox.width - droplistMenuBox.width}px`
        break
      case 'bottom-center':
        droplistMenu.current!.style.top = `${triggerBox.y + triggerBox.height + spacing}px`
        droplistMenu.current!.style.left = `${triggerBox.x + triggerBox.width / 2 - droplistMenuBox.width / 2}px`
        break
      case 'bottom-right':
        droplistMenu.current!.style.top = `${triggerBox.y + triggerBox.height + spacing}px`
        droplistMenu.current!.style.left = `${triggerBox.x}px`
        break
    }
  }

  const adjustToViewport = (droplistMenuBox: DOMRect) => {
    const x = parseFloat(droplistMenu.current!.style.left)
    const y = parseFloat(droplistMenu.current!.style.top)

    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)

    const viewport = {
      width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
      height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }

    const margin = 1 * rem

    if (y - margin < 0)
      droplistMenu.current!.style.top = `${margin}px`
    if (x - margin < 0)
      droplistMenu.current!.style.left = `${margin}px`
    if (x + droplistMenuBox.width + margin > viewport.width)
      droplistMenu.current!.style.left = `${viewport.width - droplistMenuBox.width - margin}px`
    if (y + droplistMenuBox.height + margin > viewport.height)
      droplistMenu.current!.style.top = `${viewport.height - droplistMenuBox.height - margin}px`
  }

  const setPosition = () => {
    const droplistMenuBox = droplistMenu.current!.getBoundingClientRect()
    const triggerBox = trigger.current!.getBoundingClientRect()

    calculatePosition(droplistMenuBox, triggerBox)
    adjustToViewport(droplistMenuBox)
  }

  useLayoutEffect(() => {
    if (show) {
      setPosition()
      window.addEventListener('mousedown', hide)
    } else {
      window.removeEventListener('mousedown', hide)
    }

    return () => {
      window.removeEventListener('mousedown', hide)
    }
  }, [show])

  return (
    <>
      { React.cloneElement(children as ReactElement, { ref: trigger, onClick: toggleShow }) }

      {
        show && (
          <DroplistMenu ref={droplistMenu} className={c('droplist-menu', className)} {...props}>
            { content }
          </DroplistMenu>
        )
      }
    </>
  )
}

AppDroplistMenu.Item = ({
  className,
  children,
  icon,
  ...props
}) => {
  return (
    <DroplistMenuItem className={c('droplist-menu-item', className)} {...props}>
      { icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} />
        </div>
      ) }
      { children }
    </DroplistMenuItem>
  )
}

AppDroplistMenu.Separator = ({
  className,
  ...props
}) => {
  return (
    <DroplistMenuSeparator className={c('droplist-menu-separator', className)} {...props} />
  )
}

export { AppDroplistMenu as DroplistMenu }
