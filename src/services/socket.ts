import socketClient from 'socket.io-client'

const socket = socketClient(process.env.REACT_APP_MESSENGER_URL!, { autoConnect: false })

socket.onAny((event, ...args) => console.log(event, args))

export { socket }
