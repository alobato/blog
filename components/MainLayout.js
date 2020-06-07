import { useAppContext } from '../components/AppContext'
import GlobalStyle from '../components/GlobalStyle'
import themes from '../components/themes'
import { ThemeProvider } from 'styled-components'

const MainLayout = ({ children }) => {
  const { state } = useAppContext()
  const theme = themes[state.theme]

  return (
    <div>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <div>header</div>
        <div style={{ maxWidth: 768, margin: '0 auto' }}>{children}</div>
        <div>footer</div>
      </ThemeProvider>
    </div>
  )
}

export default MainLayout
