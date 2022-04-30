import React from 'react'

// import { ChatsContext } from '../contexts/chats'
// import { i18n } from '../i18n'

import { Icon } from '../components/Icon'
import { Separator } from '../components/Separator'

const Chat: React.FC = () => {
  // const chats = useContext(ChatsContext)

  return (
    <main className="[ chat ] w-full h-full flex flex-col">
      <header className="bg-primary-200 h-10"></header>
      <div className="flex-auto p-4 flex flex-col">
        <div className="rounded-sm bg-primary-50 px-2 pt-1 pb-6 relative min-w-[152px] max-w-[240px] self-end">
          <strong className="text-sm text-gray-800">{ 'username' }</strong>
          <p className="text-md text-gray-500">{ 'message' }</p>
          <div className="absolute right-1 bottom-1 flex items-center gap-1">
            <Icon className="text-xs" icon="check-double" />
            <time className="text-gray-500 font-light text-sm">{ 'time' }</time>
          </div>
        </div>
        <Separator badge="Novo" highlight>
          { 'date' }
        </Separator>
      </div>
    </main>
  )
}

export { Chat }
