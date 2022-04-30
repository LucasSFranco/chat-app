export const routes = {
  login: '/',
  register: '/register',
  chats: '/chats',
  friends: '/friends',
  pendingFriends: '/friends/pending',
  blockedFriends: '/friends/blocked',
  addFriend: '/friends/add',
  chat: (params?: { chatId: string }) => params ? `/chat/${params.chatId}` : '/chat/:chatId'
}
