import React from 'react'
import Question from '../../../components/form/Question'

const page = () => {
  return (
    <div>
      <h1 className='h1-bold text-dark100_light900'>Ask a Question</h1>
      <div className='mt-9'>
        <Question />
      </div>
    </div>
  )
}

export default page