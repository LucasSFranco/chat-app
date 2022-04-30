import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { PrivateRoute } from './helpers/PrivateRoute'
import { PublicRoute } from './helpers/PublicRoute'

import { GlobalProvider } from './contexts/global'
import { ChatsProvider } from './contexts/chats'
import { LoginProvider } from './contexts/login'
import { RegisterProvider } from './contexts/register'
import { FriendsProvider } from './contexts/friends'
import { AddFriendProvider } from './contexts/addFriend'

import { routes } from './views/routes'
import { Chat } from './views/Chat'
import { Chats } from './views/Chats'
import { Friends } from './views/Friends'
import { PendingFriends } from './views/Friends/PendingFriends'
import { BlockedFriends } from './views/Friends/BlockedFriends'
import { AddFriend } from './views/Friends/AddFriend'
import { Login } from './views/Login'
import { Register } from './views/Register'

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Routes>
        <Route path={routes.chats} element={
          <PrivateRoute>
            <ChatsProvider>
              <Chats />
            </ChatsProvider>
          </PrivateRoute>
        } />
        <Route path={routes.friends} element={
          <PrivateRoute>
            <FriendsProvider>
              <Friends />
            </FriendsProvider>
          </PrivateRoute>
        }>
          <Route path={routes.pendingFriends} element={
            <PendingFriends />
          } />
          <Route path={routes.blockedFriends} element={
            <BlockedFriends />
          } />
          <Route path={routes.addFriend} element={
            <AddFriendProvider>
              <AddFriend />
            </AddFriendProvider>
          } />
        </Route>
        <Route path={routes.chat()} element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        } />
        <Route path={routes.register} element={
          <PublicRoute>
            <RegisterProvider>
              <Register />
            </RegisterProvider>
          </PublicRoute>
        } />
        <Route path={routes.login} element={
          <PublicRoute>
            <LoginProvider>
              <Login />
            </LoginProvider>
          </PublicRoute>
        } />
      </Routes>
    </GlobalProvider>
  )
}

export { App }
