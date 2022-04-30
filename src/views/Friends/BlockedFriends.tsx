// TODO: Create key for TabController.item, then do logic internally

import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'

import { FriendsContext } from '../../contexts/friends'

import { Avatar } from '../../components/Avatar'
import { IconButton } from '../../components/IconButton'
import { StackedList } from '../../components/StackedList'

const BlockedFriends: React.FC = () => {
  const { t } = useTranslation(['friends'])
  const friends = useContext(FriendsContext)

  const blockedList = friends.blockedList

  const unblockUser = friends.unblockUser

  return (
    blockedList.length ? (
      <StackedList className="flex-auto">
        {
          blockedList.map((friend) =>
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
                <IconButton danger icon="unlock" onClick={() => unblockUser(friend.id)} />
              </StackedList.Item>
            </RouterLink>
          )
        }
      </StackedList>
    ) : (
      <div className="flex-auto flex items-center justify-center">
        <p className="text-md text-gray-500">{ t('friends:blocked-empty') }</p>
      </div>
    )
  )
}

export { BlockedFriends }
