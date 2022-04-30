export type Tabs = 'all' | 'pending' | 'blocked' | 'add-friend'

export type Friend = {
  id: string
  avatar: string
  username: string
  status: 'online' | 'offline'
  accepted: boolean
  pending: boolean
  blocked: boolean
  sentByMe: boolean
}

export type FriendsContextData = {
  acceptedList: Friend[]
  pendingList: Friend[]
  blockedList: Friend[]
  selectedTab: Tabs
  setSelectedTab: (tab: Tabs) => void
  acceptRequest: (friendId: string) => void
  refuseRequest: (friendId: string) => void
  cancelRequest: (friendId: string) => void
  removeFriend: (friendId: string) => void
  blockUser: (friendId: string) => void
  unblockUser: (friendId: string) => void
}
