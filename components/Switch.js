import React from 'react'
import styled from 'styled-components'

const Switch = ({ checked, label, onChange, ...rest }) => {

  const handleClick = () => {
    onChange(!checked)
  }

  return (
    <div {...rest} onKeyPress={e => (['Enter', ' '].includes(e.key)) && handleClick()} onClick={handleClick} aria-checked={checked}><div><div></div></div></div>
  )
}

const StyledSwitch = styled(Switch)`

/* wrapper */
display: inline-block;
position: relative;
z-index: 1;
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
border-radius: 2.125rem;
width: 3rem;
height: 1.5rem;
background-color: #dee2e6;
overflow: hidden;
cursor: pointer;
border-width: 0.0625rem;
border-color: #ced4da;
border-style: solid;
font-size: 0.5625rem;
font-weight: 800;
transition: 300ms ease;
transition-property: color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity;
outline: none;
&:focus {
  box-shadow: 0 0 0 3px hsla(202,81%,86%,1);
  border: 1px solid hsla(205,79%,66%,1);
}

&[aria-checked='true'] {
  background-color: #91b9e4;
  border-color: transparent;
  & > div {
    transform: translateX(calc(3rem - 1.125rem - 12%));
    & > div {
      background-color: hsla(211,61%,43%,1);
    }
  }
}

/* switch */
& > div {
  display: flex;
  align-items: center;
  height: 100%;
  pointer-events: none;
  transition: 300ms ease;
  transition-property: color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity;
}

/* ball */
& > div > div {
  flex-shrink: 0;
  background-color: #adb5bd;
  border-radius: 50%;
  width: 1.125rem;
  height: 1.125rem;
  margin: 0 6%;
  transition: 300ms ease;
  transition-property: color,border-style,border-color,visibility, background,background-color,text-decoration,box-shadow,transform, opacity;
}
`

StyledSwitch.defaultProps = {
  tabIndex: 0,
  onChange: () => {},
}

export default StyledSwitch
