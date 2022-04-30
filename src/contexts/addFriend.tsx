
import React, { createContext, useEffect, useState } from 'react'

import { socket } from '../services/socket'

import { AddFriendContextData } from '../types/addFriend'
import { TextField, ValidationError } from '../types/common'

export const AddFriendContext = createContext({} as AddFriendContextData)

export const AddFriendProvider: React.FC = ({ children }) => {
  const [email, setEmail] = useState<TextField>({
    value: '',
    error: null
  })

  useEffect(() => {
    socket.on('message', (e) => {
      const validationErrors: ValidationError[] = e

      setEmail({ ...email, error: validationErrors[0] })
    })
  }, [])

  const changeEmail = (value: string) => {
    setEmail({ ...email, value })
  }

  const addFriend = () => {
    socket.emit('friends:send-request', email.value)
  }

  const state = { email, changeEmail, addFriend }

  return (
    <AddFriendContext.Provider value={state}>
      { children }
    </AddFriendContext.Provider>
  )
}
