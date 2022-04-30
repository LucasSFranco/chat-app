// TODO: Create key for TabController.item, then do logic internally

import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'

import { FriendsContext } from '../../contexts/friends'

import { Avatar } from '../../components/Avatar'
import { IconButton } from '../../components/IconButton'
import { StackedList } from '../../components/StackedList'

const PendingFriends: React.FC = () => {
  const { t } = useTranslation(['friends'])
  const friends = useContext(FriendsContext)

  const pendingList = friends.pendingList

  const acceptRequest = friends.acceptRequest
  const refuseRequest = friends.refuseRequest
  const cancelRequest = friends.cancelRequest

  return (
    pendingList.length ? (
      <StackedList className="flex-auto">
        {
          pendingList.map((friend) =>
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
                    { friend.sentByMe ? t('friends:outgoing-request') : t('friends:incoming-request') }
                  </p>
                </div>
                <div className="flex gap-3">
                  {
                    friend.sentByMe ? (
                      <IconButton danger icon="xmark" onClick={() => cancelRequest(friend.id)} />
                    ) : (
                      <>
                        <IconButton success icon="check" onClick={() => acceptRequest(friend.id)} />
                        <IconButton danger icon="xmark" onClick={() => refuseRequest(friend.id)} />
                      </>
                    )
                  }
                </div>
              </StackedList.Item>
            </RouterLink>
          )
        }
      </StackedList>
    ) : (
      <div className="flex-auto flex items-center justify-center">
        <p className="text-md text-gray-500">{ t('friends:pending-empty') }</p>
      </div>
    )
  )
}

export { PendingFriends }
