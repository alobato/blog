import { useAppContext } from '../components/AppContext'
import GlobalStyle from '../components/GlobalStyle'
import themes from '../components/themes'
import { ThemeProvider } from 'styled-components'
import Switch from '../components/Switch'
import { Flex, Box } from '../components/FlexBox'

const MainLayout = ({ children }) => {
  const { state, setItemState } = useAppContext()
  const theme = themes[state.theme]

  return (
    <div>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <div>
          <Flex p={2}>
            <Switch checked={state.theme === 'dark'} onChange={checked => setItemState({ theme: checked ? 'dark' : 'default' })} />
          </Flex>
          {/* <span onClick={() => setItemState({ theme: state.theme === 'default' ? 'dark' : 'default' })}>tema</span> */}
        </div>
        <div style={{ maxWidth: 768, margin: '0 auto' }}>{children}</div>
      </ThemeProvider>
    </div>
  )
}

export default MainLayout
