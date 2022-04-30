
import React, { createContext, useEffect, useMemo, useState } from 'react'

import { socket } from '../services/socket'

import { Friend, FriendsContextData, Tabs } from '../types/friends'

export const FriendsContext = createContext({} as FriendsContextData)

export const FriendsProvider: React.FC = ({ children }) => {
  const [friendList, setFriendList] = useState<Friend[]>([])
  const [selectedTab, setSelectedTab] = useState<Tabs>('all')

  const acceptedList = useMemo(() => friendList.filter(friend => friend.accepted), [friendList])
  const pendingList = useMemo(() => friendList.filter(friend => friend.pending), [friendList])
  const blockedList = useMemo(() => friendList.filter(friend => friend.blocked), [friendList])

  const acceptRequest = (friendId: string) => {
    socket.emit('friends:accept-request', friendId)
  }

  const refuseRequest = (friendId: string) => {
    socket.emit('friends:refuse-request', friendId)
  }

  const cancelRequest = (friendId: string) => {
    socket.emit('friends:cancel-request', friendId)
  }

  const removeFriend = (friendId: string) => {
    socket.emit('friends:remove-friend', friendId)
  }

  const blockUser = (friendId: string) => {
    socket.emit('friends:block-user', friendId)
  }

  const unblockUser = (friendId: string) => {
    socket.emit('friends:unblock-user', friendId)
  }

  useEffect(() => {
    socket.emit('friends:refresh-friend-list')
    socket.on('friends:refresh-friend-list', (friends: Friend[]) => setFriendList(friends))
  }, [])

  const state = {
    acceptedList,
    pendingList,
    blockedList,
    selectedTab,
    setSelectedTab,
    acceptRequest,
    refuseRequest,
    cancelRequest,
    removeFriend,
    blockUser,
    unblockUser
  }

  return (
    <FriendsContext.Provider value={state}>
      { children }
    </FriendsContext.Provider>
  )
}
