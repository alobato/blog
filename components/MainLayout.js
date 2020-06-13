import { useAppContext } from '../components/AppContext'
import GlobalStyle from '../components/GlobalStyle'
import themes from '../components/themes'
import { ThemeProvider } from 'styled-components'
import Switch from '../components/Switch'
import { Flex, Box } from '../components/FlexBox'
import Link from 'next/link'

const MainLayout = ({ children }) => {
  const { state, setItemState } = useAppContext()
  const theme = themes[state.theme]

  return (
    <Box py={3, 4}>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Box px={[3, 4]} style={{ maxWidth: 900, margin: '0 auto' }}>
          <Flex jc='space-between' ai='center'>
            <Box width={48}>
              <Switch checked={state.theme === 'dark'} onChange={checked => setItemState({ theme: checked ? 'dark' : 'default' })} />
            </Box>
            <Box width={107} style={{ opacity: 0.5 }}>
              <Link href='/'><a><svg height='24' viewBox='0 0 106.45 24.144' fill='currentColor'><path d='M 73.714 14.352 L 75.49 0 L 78.802 0.168 L 76.978 15.048 Q 76.882 15.72 76.87 16.476 A 8.705 8.705 0 0 0 76.869 16.614 Q 76.869 17.308 76.978 18.072 L 74.386 18.192 A 1.193 1.193 0 0 1 73.946 17.741 A 1.425 1.425 0 0 1 73.93 17.712 Q 73.762 17.4 73.666 17.064 L 73.618 16.512 L 73.138 17.04 A 11.374 11.374 0 0 1 72.516 17.513 Q 71.858 17.978 71.314 18.192 A 4.821 4.821 0 0 1 70.592 18.416 A 3.536 3.536 0 0 1 69.826 18.504 A 5.783 5.783 0 0 1 68.682 18.396 A 4.403 4.403 0 0 1 67.558 18.012 Q 66.586 17.52 65.998 16.632 A 5.237 5.237 0 0 1 65.381 15.327 A 6.645 6.645 0 0 1 65.182 14.532 A 7.332 7.332 0 0 1 65.06 13.335 Q 65.045 12.647 65.146 11.904 Q 65.29 10.632 65.866 9.48 A 8.123 8.123 0 0 1 67.019 7.748 A 7.488 7.488 0 0 1 67.282 7.464 A 6.99 6.99 0 0 1 69.11 6.1 A 6.678 6.678 0 0 1 69.142 6.084 Q 70.162 5.568 71.194 5.568 A 8.433 8.433 0 0 1 72.231 5.63 A 7.624 7.624 0 0 1 72.394 5.652 Q 72.943 5.732 73.799 5.976 A 22.08 22.08 0 0 1 73.882 6 A 7.077 7.077 0 0 1 73.504 6.651 Q 73.295 6.969 73.072 7.22 A 3.93 3.93 0 0 1 72.946 7.356 A 2.146 2.146 0 0 1 72.537 7.688 A 1.548 1.548 0 0 1 71.842 7.92 Q 71.098 7.968 70.546 8.28 Q 69.994 8.592 69.622 9.108 A 3.902 3.902 0 0 0 69.233 9.788 A 5.086 5.086 0 0 0 69.022 10.344 A 7.846 7.846 0 0 0 68.77 11.391 A 9.327 9.327 0 0 0 68.698 11.904 A 6.933 6.933 0 0 0 68.63 12.656 Q 68.616 13.086 68.662 13.488 Q 68.746 14.232 69.01 14.796 A 2.666 2.666 0 0 0 69.338 15.331 A 2.19 2.19 0 0 0 69.706 15.696 A 1.593 1.593 0 0 0 70.581 16.026 A 2.03 2.03 0 0 0 70.738 16.032 A 2.569 2.569 0 0 0 71.656 15.856 A 3.38 3.38 0 0 0 72.142 15.624 A 5.384 5.384 0 0 0 72.695 15.254 Q 72.964 15.05 73.253 14.79 A 12.134 12.134 0 0 0 73.714 14.352 Z M 37.21 10.584 L 39.346 10.584 A 3.325 3.325 0 0 0 39.443 10.029 Q 39.465 9.773 39.442 9.528 A 2.31 2.31 0 0 0 39.333 9.006 A 1.915 1.915 0 0 0 39.166 8.64 Q 38.938 8.256 38.542 8.028 A 1.672 1.672 0 0 0 38.001 7.835 A 2.282 2.282 0 0 0 37.594 7.8 A 2.57 2.57 0 0 0 36.865 7.909 A 3.161 3.161 0 0 0 36.562 8.016 A 2.739 2.739 0 0 0 35.87 8.432 A 3.432 3.432 0 0 0 35.578 8.7 Q 35.122 9.168 34.774 9.9 A 4.634 4.634 0 0 0 34.49 10.68 Q 34.387 11.061 34.326 11.5 A 8.01 8.01 0 0 0 34.306 11.664 Q 34.075 13.49 34.661 14.591 A 2.821 2.821 0 0 0 34.846 14.892 Q 35.65 16.032 37.162 16.032 Q 38.002 16.032 38.83 15.828 A 8.923 8.923 0 0 0 39.489 15.636 Q 40.072 15.444 40.762 15.144 L 41.338 17.376 A 14.958 14.958 0 0 1 40.097 17.879 Q 39.461 18.103 38.872 18.235 A 9.044 9.044 0 0 1 38.794 18.252 A 11.108 11.108 0 0 1 36.772 18.5 A 10.182 10.182 0 0 1 36.49 18.504 A 7.573 7.573 0 0 1 35.278 18.412 Q 34.398 18.27 33.718 17.904 A 5.304 5.304 0 0 1 32.507 17.024 A 4.671 4.671 0 0 1 31.942 16.356 A 5.494 5.494 0 0 1 31.068 14.283 A 6.288 6.288 0 0 1 31.054 14.208 A 7.912 7.912 0 0 1 30.914 12.728 A 8.073 8.073 0 0 1 30.97 11.784 A 8.177 8.177 0 0 1 31.354 10.127 A 6.904 6.904 0 0 1 31.798 9.12 A 6.837 6.837 0 0 1 33.043 7.456 A 6.36 6.36 0 0 1 33.394 7.14 Q 34.354 6.336 35.554 5.904 Q 36.754 5.472 38.05 5.472 A 5.64 5.64 0 0 1 39.371 5.621 A 4.629 4.629 0 0 1 40.402 6 A 3.948 3.948 0 0 1 41.538 6.856 A 3.676 3.676 0 0 1 41.986 7.464 Q 42.538 8.4 42.538 9.708 Q 42.538 11.016 41.818 12.552 L 35.098 12.552 A 4.865 4.865 0 0 1 35.563 11.7 A 3.967 3.967 0 0 1 36.022 11.148 A 2.315 2.315 0 0 1 36.412 10.83 Q 36.698 10.647 36.999 10.6 A 1.361 1.361 0 0 1 37.21 10.584 Z M 86.554 10.584 L 88.69 10.584 A 3.325 3.325 0 0 0 88.787 10.029 Q 88.809 9.773 88.786 9.528 A 2.31 2.31 0 0 0 88.677 9.006 A 1.915 1.915 0 0 0 88.51 8.64 Q 88.282 8.256 87.886 8.028 A 1.672 1.672 0 0 0 87.345 7.835 A 2.282 2.282 0 0 0 86.938 7.8 A 2.57 2.57 0 0 0 86.209 7.909 A 3.161 3.161 0 0 0 85.906 8.016 A 2.739 2.739 0 0 0 85.214 8.432 A 3.432 3.432 0 0 0 84.922 8.7 Q 84.466 9.168 84.118 9.9 A 4.634 4.634 0 0 0 83.834 10.68 Q 83.731 11.061 83.67 11.5 A 8.01 8.01 0 0 0 83.65 11.664 Q 83.419 13.49 84.005 14.591 A 2.821 2.821 0 0 0 84.19 14.892 Q 84.994 16.032 86.506 16.032 Q 87.346 16.032 88.174 15.828 A 8.923 8.923 0 0 0 88.833 15.636 Q 89.416 15.444 90.106 15.144 L 90.682 17.376 A 14.958 14.958 0 0 1 89.441 17.879 Q 88.805 18.103 88.216 18.235 A 9.044 9.044 0 0 1 88.138 18.252 A 11.108 11.108 0 0 1 86.116 18.5 A 10.182 10.182 0 0 1 85.834 18.504 A 7.573 7.573 0 0 1 84.622 18.412 Q 83.742 18.27 83.062 17.904 A 5.304 5.304 0 0 1 81.851 17.024 A 4.671 4.671 0 0 1 81.286 16.356 A 5.494 5.494 0 0 1 80.412 14.283 A 6.288 6.288 0 0 1 80.398 14.208 A 7.912 7.912 0 0 1 80.258 12.728 A 8.073 8.073 0 0 1 80.314 11.784 A 8.177 8.177 0 0 1 80.698 10.127 A 6.904 6.904 0 0 1 81.142 9.12 A 6.837 6.837 0 0 1 82.387 7.456 A 6.36 6.36 0 0 1 82.738 7.14 Q 83.698 6.336 84.898 5.904 Q 86.098 5.472 87.394 5.472 A 5.64 5.64 0 0 1 88.715 5.621 A 4.629 4.629 0 0 1 89.746 6 A 3.948 3.948 0 0 1 90.882 6.856 A 3.676 3.676 0 0 1 91.33 7.464 Q 91.882 8.4 91.882 9.708 Q 91.882 11.016 91.162 12.552 L 84.442 12.552 A 4.865 4.865 0 0 1 84.907 11.7 A 3.967 3.967 0 0 1 85.366 11.148 A 2.315 2.315 0 0 1 85.756 10.83 Q 86.042 10.647 86.343 10.6 A 1.361 1.361 0 0 1 86.554 10.584 Z M 12.562 6.216 L 11.458 15.168 Q 11.362 15.84 11.35 16.596 A 8.705 8.705 0 0 0 11.349 16.734 Q 11.349 17.428 11.458 18.192 L 8.89 18.192 A 0.474 0.474 0 0 1 8.794 18.127 Q 8.694 18.041 8.59 17.88 Q 8.447 17.66 8.334 17.349 A 3.797 3.797 0 0 1 8.314 17.292 Q 8.194 16.944 8.146 16.524 Q 8.098 16.104 8.146 15.672 L 9.058 8.16 Q 8.578 8.04 8.182 8.004 Q 7.786 7.968 7.522 7.968 A 3.562 3.562 0 0 0 6.535 8.101 A 3.156 3.156 0 0 0 6.034 8.292 Q 5.362 8.616 4.87 9.204 A 4.494 4.494 0 0 0 4.307 10.067 A 5.638 5.638 0 0 0 4.066 10.62 A 7.397 7.397 0 0 0 3.727 11.832 A 8.827 8.827 0 0 0 3.634 12.432 A 9.526 9.526 0 0 0 3.563 13.457 A 10.644 10.644 0 0 0 3.562 13.632 Q 3.562 14.256 3.73 14.772 A 2.225 2.225 0 0 0 3.924 15.211 A 1.703 1.703 0 0 0 4.234 15.6 Q 4.57 15.912 5.194 15.864 A 1.843 1.843 0 0 1 5.32 15.86 Q 5.557 15.86 5.754 15.924 A 1.11 1.11 0 0 1 6.274 16.284 Q 6.631 16.719 6.987 17.33 A 11.553 11.553 0 0 1 7.042 17.424 A 9.526 9.526 0 0 1 5.727 18.045 A 8.739 8.739 0 0 1 5.59 18.096 A 6.208 6.208 0 0 1 4.927 18.296 Q 4.588 18.377 4.275 18.405 A 3.816 3.816 0 0 1 4.234 18.408 Q 3.573 18.449 3.014 18.293 A 2.925 2.925 0 0 1 2.242 17.952 Q 1.402 17.424 0.874 16.56 A 5.73 5.73 0 0 1 0.239 15.071 A 6.754 6.754 0 0 1 0.13 14.604 Q -0.086 13.512 0.058 12.432 Q 0.226 10.992 0.838 9.732 Q 1.45 8.472 2.434 7.536 A 7.438 7.438 0 0 1 4.625 6.101 A 8.45 8.45 0 0 1 4.75 6.048 Q 6.082 5.496 7.69 5.496 Q 8.194 5.496 8.686 5.52 A 10.059 10.059 0 0 1 9.266 5.566 A 12.912 12.912 0 0 1 9.754 5.628 Q 10.33 5.712 11.014 5.856 A 35.247 35.247 0 0 1 11.694 6.007 Q 12.103 6.101 12.562 6.216 Z M 100.378 18.192 L 96.802 18.192 L 93.658 5.784 L 97.186 5.784 L 98.89 14.568 L 98.962 15.288 L 99.226 14.568 L 103.066 5.784 L 106.45 5.952 L 100.378 18.192 Z M 49.018 17.304 L 53.986 5.784 L 57.322 5.952 L 51.538 17.928 Q 50.857 19.269 50.274 20.317 A 47.416 47.416 0 0 1 50.086 20.652 A 11.917 11.917 0 0 1 49.494 21.595 Q 49.157 22.078 48.803 22.467 A 7.097 7.097 0 0 1 48.694 22.584 A 5.332 5.332 0 0 1 47.62 23.46 A 4.744 4.744 0 0 1 47.074 23.748 A 4.376 4.376 0 0 1 46.052 24.054 Q 45.592 24.136 45.07 24.143 A 7.429 7.429 0 0 1 44.962 24.144 A 9.406 9.406 0 0 1 44.366 24.094 A 11.771 11.771 0 0 1 43.93 24.036 A 3.802 3.802 0 0 1 43.067 23.795 A 4.428 4.428 0 0 1 42.826 23.688 L 43.858 21.528 A 4.337 4.337 0 0 0 44.201 21.615 Q 44.383 21.652 44.548 21.668 A 2.574 2.574 0 0 0 44.602 21.672 Q 44.938 21.696 45.274 21.696 A 2.299 2.299 0 0 0 45.905 21.612 A 1.952 1.952 0 0 0 46.378 21.408 A 2.895 2.895 0 0 0 46.86 21.041 Q 47.066 20.849 47.262 20.603 A 4.847 4.847 0 0 0 47.29 20.568 Q 47.722 20.016 48.13 19.2 A 37.374 37.374 0 0 0 48.5 18.435 Q 48.686 18.042 48.884 17.603 A 64.209 64.209 0 0 0 49.018 17.304 Z M 29.698 0.168 L 27.49 18.192 L 24.154 18.192 L 26.386 0 L 29.698 0.168 Z M 15.658 5.904 L 18.226 5.784 A 0.683 0.683 0 0 1 18.336 5.912 Q 18.434 6.055 18.521 6.291 A 3.484 3.484 0 0 1 18.574 6.444 A 3.717 3.717 0 0 1 18.705 7.022 A 4.965 4.965 0 0 1 18.754 7.56 L 18.73 8.136 L 19.042 7.56 A 5.084 5.084 0 0 1 19.747 6.662 A 4.161 4.161 0 0 1 20.482 6.072 A 3.987 3.987 0 0 1 21.101 5.75 Q 21.61 5.544 22.09 5.544 A 3.965 3.965 0 0 1 22.81 5.614 Q 23.15 5.677 23.52 5.797 A 6.816 6.816 0 0 1 23.626 5.832 L 22.906 8.544 A 9.583 9.583 0 0 0 22.622 8.463 Q 22.329 8.385 22.115 8.352 A 2.405 2.405 0 0 0 22.114 8.352 A 4.086 4.086 0 0 0 21.66 8.307 A 3.568 3.568 0 0 0 21.514 8.304 Q 20.89 8.304 20.374 8.616 A 3.146 3.146 0 0 0 19.688 9.182 A 3.821 3.821 0 0 0 19.45 9.468 Q 19.042 10.008 18.766 10.764 A 6.674 6.674 0 0 0 18.457 11.946 A 7.866 7.866 0 0 0 18.394 12.408 L 17.698 18.192 L 14.554 18.192 L 15.682 8.928 Q 15.754 8.256 15.766 7.5 A 8.705 8.705 0 0 0 15.767 7.362 Q 15.767 6.668 15.658 5.904 Z M 48.13 5.784 L 49.114 11.448 A 5.472 5.472 0 0 1 49.199 12.313 Q 49.207 12.719 49.162 13.152 Q 49.066 14.064 48.826 14.94 A 10.702 10.702 0 0 1 48.248 16.547 A 9.906 9.906 0 0 1 48.226 16.596 Q 47.95 17.193 47.674 17.629 A 5.424 5.424 0 0 1 47.506 17.88 L 44.53 5.784 L 48.13 5.784 Z M 58.258 16.584 Q 58.306 16.176 58.498 15.804 Q 58.69 15.432 58.99 15.156 Q 59.29 14.88 59.674 14.724 Q 60.058 14.568 60.49 14.568 A 1.936 1.936 0 0 1 61.093 14.658 A 1.571 1.571 0 0 1 61.822 15.156 A 1.752 1.752 0 0 1 62.233 16.316 Q 62.233 16.431 62.221 16.55 A 2.545 2.545 0 0 1 62.218 16.584 Q 62.098 17.424 61.474 17.988 Q 60.85 18.552 60.01 18.552 A 2.034 2.034 0 0 1 59.381 18.459 A 1.667 1.667 0 0 1 58.654 17.988 Q 58.156 17.444 58.25 16.643 A 2.384 2.384 0 0 1 58.258 16.584 Z' /></svg></a></Link>
            </Box>
            <Box width={48}>

            </Box>
          </Flex>
        </Box>
        <Box px={[3, 4]} style={{ maxWidth: 900, margin: '0 auto' }}>{children}</Box>
      </ThemeProvider>
    </Box>
  )
}

export default MainLayout
