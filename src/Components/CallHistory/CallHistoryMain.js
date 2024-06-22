import React from 'react'
import styled from 'styled-components'
import InnerLayout from '../Dashboard/InnerLayout'
import Showcase from '../Dashboard/Showcase'
import Header from '../Extra/Header'

const Contain = styled.div` 
   padding: 10px 50px 10px 30px;
`

function CallHistoryMain() {
  return (
    <Contain>
        <Header 
            heading="Call History"
            /> 
            <div className='mb-4'>
        <InnerLayout />

            </div>     
        <Showcase />
    </Contain>
  )
}

export default CallHistoryMain