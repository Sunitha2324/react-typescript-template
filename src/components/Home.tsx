import React, { useState } from 'react'
import Literal from './TsPactice/Literal'
import CustomeButton from './TsPactice/CustomeButton'
import CustomeInput from './TsPactice/CustomeInput'
import { Text } from './AsPolymorphic'
import CreateContextComponent from '../components/TsPactice/CreateContext'

const Home = () => {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    alert('clickHandler')
  }

  const [name, setName] = useState('')
  return (
    <div>
      <h1>Home Page</h1>
      <Literal position="left - top-left" />
      <CustomeButton onClick={clickHandler} variant="primary">
        {' '}
        Hello
      </CustomeButton>
      <CustomeInput type="text" value="Fill the field .........." />
      <Text size="lg" color="primary" as="h5">
        {' '}
        Polymorphism Test{' '}
      </Text>
      <CreateContextComponent />
    </div>
  )
}

export default Home
