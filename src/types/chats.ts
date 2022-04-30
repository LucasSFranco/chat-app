export type Chat = {
  name: string
  imageURL: string
  notifications: number
  lastMessage: {
    author: string
    text: string
    createdAt: Date
    receivedAt: Date
    visualizedAt: Date
  }
}

export type ChatsContextData = {
  chatList: Chat[]
}
