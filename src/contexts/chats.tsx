
import React, { createContext, useState } from 'react'

import { Chat, ChatsContextData } from '../types/chats'

export const ChatsContext = createContext({} as ChatsContextData)

export const ChatsProvider: React.FC = ({ children }) => {
  const [chatList] = useState<Chat[]>([
    {
      name: 'Name',
      imageURL: '#',
      notifications: 3,
      lastMessage: {
        author: 'Author',
        text: 'Qui eu veniam fugiat sunt quis nostrud ipsum ut cupidatat consequat eiusmod dolore reprehenderit.',
        createdAt: new Date(),
        receivedAt: new Date(),
        visualizedAt: new Date()
      }
    }
  ])

  const state = { chatList }

  return (
    <ChatsContext.Provider value={state}>
      { children }
    </ChatsContext.Provider>
  )
}
