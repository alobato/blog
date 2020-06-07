import styled from 'styled-components'
import { style, space, layout } from 'styled-system'

export const Box = styled.div`
  ${space}
  ${layout}
`

export const Flex = styled(Box)(
  {display: 'flex'},
  style({prop: 'ai', cssProperty: 'alignItems'}),
  props => props.css
)
