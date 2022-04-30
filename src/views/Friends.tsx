// TODO: Create key for TabController.item, then do logic internally

import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useOutlet } from 'react-router-dom'

import { FriendsContext } from '../contexts/friends'
import { routes } from './routes'

import { Avatar } from '../components/Avatar'
import { Button } from '../components/Button'
import { DroplistMenu } from '../components/DroplistMenu'
import { Header } from '../components/Header'
import { Icon } from '../components/Icon'
import { IconButton } from '../components/IconButton'
import { StackedList } from '../components/StackedList'
import { TabController } from '../components/TabController'

const Friends: React.FC = () => {
  const { t } = useTranslation(['friends'])
  const friends = useContext(FriendsContext)
  const outlet = useOutlet()

  const acceptedList = friends.acceptedList
  const selectedTab = friends.selectedTab

  const setSelectedTab = friends.setSelectedTab
  const blockUser = friends.blockUser
  const removeFriend = friends.removeFriend

  return (
    <main className="[ friends ] w-full h-full flex flex-col">
      <Header>
        <RouterLink to={routes.chats}>
          <IconButton icon="arrow-left" />
        </RouterLink>
        <h6 className="font-bold">{ t('friends:title') }</h6>
      </Header>
      <TabController>
        <RouterLink to={routes.friends}>
          <TabController.Item
            selected={selectedTab === 'all'}
            onClick={() => setSelectedTab('all')}
          >
            { t('friends:all-tab') }
          </TabController.Item>
        </RouterLink>
        <RouterLink to={routes.pendingFriends}>
          <TabController.Item
            selected={selectedTab === 'pending'}
            onClick={() => setSelectedTab('pending')}
          >
            { t('friends:pending-tab') }
          </TabController.Item>
        </RouterLink>
        <RouterLink to={routes.blockedFriends}>
          <TabController.Item
            selected={selectedTab === 'blocked'}
            onClick={() => setSelectedTab('blocked')}
          >
            { t('friends:blocked-tab') }
          </TabController.Item>
        </RouterLink>
        <RouterLink to={routes.addFriend} className="ml-auto">
          <TabController.Item
            style="success"
            selected={selectedTab === 'add-friend'}
            onClick={() => setSelectedTab('add-friend')}
          >
            { t('friends:add-friend-tab') }
          </TabController.Item>
        </RouterLink>
      </TabController>
      { outlet || (
        acceptedList.length ? (
          <StackedList className="flex-auto">
            {
              acceptedList.map((friend) =>
                <RouterLink key={friend.id} to="#">
                  <StackedList.Item>
                    <Avatar src={friend.avatar} status={friend.status} />
                    <div className="flex flex-col gap-0.5 flex-auto overflow-hidden">
                      <strong className="
                        flex-auto
                        text-md text-gray-800
                        text-ellipsis overflow-hidden whitespace-nowrap
                      ">
                        { friend.username }
                      </strong>
                      <p className={`
                        flex-auto
                        flex items-center gap-1
                        text-md text-gray-500
                        text-ellipsis overflow-hidden whitespace-nowrap
                      `}>
                        { t(`common:status.${friend.status}`) }
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <DroplistMenu direction="bottom-left" content={
                        <>
                          <DroplistMenu.Item icon="eye">
                            Profile
                          </DroplistMenu.Item>
                          <DroplistMenu.Separator />
                          <DroplistMenu.Item style="danger" icon="lock" onClick={() => blockUser(friend.id)}>
                            Block
                          </DroplistMenu.Item>
                          <DroplistMenu.Item style="danger" icon="trash-alt" onClick={() => removeFriend(friend.id)}>
                            Remove friend
                          </DroplistMenu.Item>
                        </>
                      }>
                        <IconButton icon="ellipsis-vertical" />
                      </DroplistMenu>
                    </div>
                  </StackedList.Item>
                </RouterLink>
              )
            }
          </StackedList>
        ) : (
          <div className="flex-auto flex flex-col gap-4 items-center justify-center">
            <p className="text-md text-gray-500">{ t('friends:accepted-empty') }</p>
            <RouterLink to={routes.addFriend}>
              <Button size="sm">{ t('friends:add-friend-btn') }</Button>
            </RouterLink>
          </div>
        )
      ) }
    </main>
  )
}

export { Friends }
