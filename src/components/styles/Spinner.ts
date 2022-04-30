import { css, keyframes } from '../../styles'

const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)'
  }
})

const dash = keyframes({
  '0%': {
    strokeDasharray: '1, 150',
    strokeDashoffset: '0'
  },
  '50%': {
    strokeDasharray: '90, 150',
    strokeDashoffset: '-35'
  },
  '100%': {
    strokeDasharray: '90, 150',
    strokeDashoffset: '-124'
  }
})

export const SpinnerCSS = css({
  animation: `${rotate} 2s linear infinite`,
  zIndex: 2,
  position: 'absolute',
  top: '50%',
  left: '50%',
  margin: '-25px 0 0 -25px',
  width: '50px',
  height: '50px',

  '& .path': {
    stroke: 'black',
    strokeLinecap: 'round',
    animation: `${dash} 1.5s ease-in-out infinite`
  }
})
