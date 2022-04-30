import { TextField } from './common'

export type AddFriendContextData = {
  email: TextField
  changeEmail: (value: string) => void
  addFriend: () => void
}
