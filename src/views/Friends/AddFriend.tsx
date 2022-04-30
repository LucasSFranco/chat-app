// TODO: Create key for TabController.item, then do logic internally

import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { AddFriendContext } from '../../contexts/addFriend'

import { Button } from '../../components/Button'
import { Field } from '../../components/Field'
import { TextField } from '../../components/TextField'

const AddFriend: React.FC = () => {
  const { t } = useTranslation(['friends'])
  const addFriend = useContext(AddFriendContext)

  const email = addFriend.email

  const changeEmail = addFriend.changeEmail
  const addNewFriend = addFriend.addFriend

  return (
    <div className="m-4 flex flex-col gap-4">
      <Field label={t('friends:add-friend')} error={email.error?.message}>
        <TextField
          name="email"
          placeholder={t('friends:email-placeholder')}
          error={!!email.error}
          onChange={changeEmail}
        />
      </Field>
      <Button className="self-start" onClick={addNewFriend}>{ t('friends:add-friend-btn') }</Button>
    </div>
  )
}

export { AddFriend }
