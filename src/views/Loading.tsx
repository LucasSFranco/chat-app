import React from 'react'

import { Spinner } from '../components/Spinner'

const Loading: React.FC = () => {
  return (
    <div className="[ loading ] w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  )
}

export { Loading }
