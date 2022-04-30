import React from 'react'
import c from 'classnames'

import { styled } from '../styles'
import { TabControllerCSS, TabControllerItemCSS } from './styles/TabController'

const TabController = styled('nav', TabControllerCSS)
const TabControllerItem = styled('button', TabControllerItemCSS)

export type TabControllerProps = React.ComponentProps<typeof TabController>
export type TabControllerItemProps = React.ComponentProps<typeof TabControllerItem>

export type TabControllerComposition = { Item: React.FC<TabControllerItemProps> }

const AppTabController: React.FC<TabControllerProps> & TabControllerComposition = ({
  className,
  children,
  ...props
}) => {
  return (
    <TabController className={c('tab-controller', className)} {...props}>
      { children }
    </TabController>
  )
}

AppTabController.Item = ({
  className,
  children,
  ...props
}) => {
  return (
    <TabControllerItem className={c('tab-controller-item', className)} {...props}>
      { children }
    </TabControllerItem>
  )
}

export { AppTabController as TabController }
