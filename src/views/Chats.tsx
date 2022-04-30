import React, { useContext } from 'react'

import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'

import { ChatsContext } from '../contexts/chats'
import { routes } from './routes'

import { Avatar } from '../components/Avatar'
import { Badge } from '../components/Badge'
import { Icon } from '../components/Icon'
import { IconButton } from '../components/IconButton'
import { Header } from '../components/Header'
import { StackedList } from '../components/StackedList'

const Chats: React.FC = () => {
  const { t } = useTranslation(['chats'])
  const chats = useContext(ChatsContext)

  const chatList = chats.chatList

  return (
    <main className="[ chats ] w-full h-full flex flex-col">
      <Header>
        <Avatar size={32} src="#" status="online" />
        <h6 className="font-bold">{ t('chats:title') }</h6>
        <div className="flex gap-4 ml-auto">
          <IconButton icon="search" />
          <RouterLink to={routes.friends}>
            <IconButton icon="user-friends" />
          </RouterLink>
          <IconButton icon="ellipsis-v" />
        </div>
      </Header>
      <StackedList className="flex-auto">
        {
          chatList.length ? (
            chatList.map((chat, index) =>
              <RouterLink key={index} to={routes.chat({ chatId: 'test' })}>
                <StackedList.Item>
                  <Avatar src="#" status="online" />
                  <div className="flex flex-col gap-0.5 flex-auto overflow-hidden">
                    <div className="flex items-end gap-3">
                      <strong className="
                        flex-auto
                        text-md text-gray-800
                        text-ellipsis overflow-hidden whitespace-nowrap
                      ">
                        { chat.name }
                      </strong>
                      <time className={`text-xs font-light ${chat.notifications ? 'text-primary-500' : 'text-gray-400'}`}>
                        { chat.lastMessage.createdAt.toTimeString() }
                      </time>
                    </div>
                    <div className="flex items-start gap-3">
                      <p className={`
                        flex-auto
                        flex items-center gap-1
                        text-md text-gray-500
                        text-ellipsis overflow-hidden whitespace-nowrap
                      `}>
                        <Icon className={`text-xs ${chat.lastMessage.visualizedAt ? 'text-primary-500' : 'text-gray-500'}`} icon="check-double" />
                        { chat.lastMessage.text }
                      </p>
                      { chat.notifications && (
                        <Badge>{ 'notifications' }</Badge>
                      ) }
                    </div>
                  </div>
                </StackedList.Item>
              </RouterLink>
            )
          ) : (
            <div className="flex-auto flex items-center justify-center">
              <p className="text-md text-gray-500">{ t('chats:empty') }</p>
            </div>
          )
        }
      </StackedList>
    </main>
  )
}

export { Chats }
