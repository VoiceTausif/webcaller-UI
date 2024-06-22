import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    font-size: 25px;
    font-weight: 600;
`

function Header(props) {
  return (
    <Head className='mb-4'>{props.heading}</Head>
  )
}

export default Header