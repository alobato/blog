import styled from 'styled-components'
import { style, space, layout } from 'styled-system'

export const Box = styled('div')(
  space,
  layout,
  style({ prop: 'ta', cssProperty: 'textAlign' })
)

export const Flex = styled(Box)(
  { display: 'flex' },
  style({ prop: 'ai', cssProperty: 'alignItems' }),
  style({ prop: 'jc', cssProperty: 'justifyContent' }),
  props => props.css
)
