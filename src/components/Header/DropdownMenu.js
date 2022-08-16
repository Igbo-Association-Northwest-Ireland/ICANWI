import styled from 'styled-components'
import React from 'react'
import Navigator from './Navigator'

  const DropdownMenu = () => {
  return (
    <div className='dropdown pt-2'>
    {['top'].map((placement, idx) => (
      <Navigator key={idx} placement={placement} name={placement}/>
    ))}
  </div>
  )
}
export default DropdownMenu
