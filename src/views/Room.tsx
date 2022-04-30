import React, { useEffect, useState } from 'react'
import { socket } from '../services/socket'

const Room: React.FC = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const handleChange = (event: any) => {
    setNewMessage(event.target.value)
  }

  const sendMessage = () => {
    socket.emit('outgoing-message', newMessage)
  }

  return (
    <div className="room">
      {
        messages.length ? (
          <ul>
            {
              messages.map((message, index) => {
                return <li key={index}>{ message }</li>
              })
            }
          </ul>
        ) : (
          <p>No messages yet.</p>
        )
      }
      <input name="message" value={newMessage} onChange={handleChange} />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export { Room }
