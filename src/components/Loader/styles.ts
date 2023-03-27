import styled from 'styled-components'

export const SVGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  @-webkit-keyframes animate-svg-stroke-1 {
    0% {
      stroke-dashoffset: 153.08726501464844px;
      stroke-dasharray: 153.08726501464844px;
    }
    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 153.08726501464844px;
    }
  }

  @keyframes animate-svg-stroke-1 {
    0% {
      stroke-dashoffset: 153.08726501464844px;
      stroke-dasharray: 153.08726501464844px;
    }
    100% {
      stroke-dashoffset: 0px;
      stroke-dasharray: 153.08726501464844px;
    }
  }

  .svg-elem-1 {
    -webkit-animation: animate-svg-stroke-1 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
      animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
    animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s
        both,
      animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
  }
`
