interface FindFurthestPoint {
  clickPointX: number
  elementWidth: number
  offsetX: number
  clickPointY: number
  elementHeight: number
  offsetY: number
}

interface ApplyStyles {
  element: HTMLElement
  color: string
  rect: DOMRect
  radius: number
  event: MouseEvent
}

const findFurthestPoint = ({
  clickPointX,
  clickPointY,
  elementHeight,
  offsetX,
  offsetY,
  elementWidth,
}: FindFurthestPoint) => {
  const x = clickPointX - offsetX > elementWidth / 2 ? 0 : elementWidth
  const y = clickPointY - offsetY > elementHeight / 2 ? 0 : elementHeight
  return Math.hypot(x - (clickPointX - offsetX), y - (clickPointY - offsetY))
}

function applyStyles({
  color,
  element,
  event,
  radius,
  rect,
}: ApplyStyles): void {
  element.classList.add('ripple')
  element.style.backgroundColor =
    color === 'dark' ? 'rgba(0,0,0, 0.2)' : 'rgba(255,255,255, 0.3)'
  element.style.borderRadius = '50%'
  element.style.pointerEvents = 'none'
  element.style.position = 'absolute'
  element.style.left = event.clientX - rect.left - radius + 'px'
  element.style.top = event.clientY - rect.top - radius + 'px'
  element.style.width = element.style.height = radius * 2 + 'px'
}

function applyAnimation(element: HTMLElement): void {
  element.animate(
    [
      {
        transform: 'scale(0)',
        opacity: 1,
      },
      {
        transform: 'scale(1.5)',
        opacity: 0,
      },
    ],
    {
      duration: 500,
      easing: 'linear',
    },
  )
}

function createRipple(event: MouseEvent, color: string): void {
  const element = event.currentTarget as HTMLElement

  element.style.position = 'relative'
  element.style.overflow = 'hidden'

  const rect = element.getBoundingClientRect()

  const radius = findFurthestPoint({
    clickPointX: event.clientX,
    elementWidth: element.offsetWidth,
    offsetX: rect.left,
    clickPointY: event.clientY,
    elementHeight: element.offsetHeight,
    offsetY: rect.top,
  })

  const circle = document.createElement('span')

  applyStyles({ element: circle, color, rect, event, radius })
  applyAnimation(circle)

  element.appendChild(circle)

  setTimeout(() => circle.remove(), 500)
}

// eslint-disable-next-line no-extra-semi
;(function setRipple() {
  const lightRipple = document.querySelectorAll('[data-ripple-light="true"]')
  const darkRipple = document.querySelectorAll('[data-ripple-dark="true"]')

  if (lightRipple) {
    lightRipple.forEach((element) => {
      element.addEventListener('mouseup', (event) => {
        createRipple(event as MouseEvent, 'light')
      })
    })
  }

  if (darkRipple) {
    darkRipple.forEach((element) => {
      element.addEventListener('mouseup', (event) => {
        createRipple(event as MouseEvent, 'dark')
      })
    })
  }
})()
