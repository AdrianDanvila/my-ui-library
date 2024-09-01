import React, { PropsWithChildren, ReactNode, useRef, useState } from 'react'
type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
import './card.scss'

type Color = RGB | RGBA | HEX
type CardProps = {
  title?: string
  header?: ReactNode
  footer?: ReactNode
  effectColor: Color
}

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
  children,
  title,
  header,
  footer,
  effectColor,
}: PropsWithChildren<CardProps>) => {
  const divRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div className="card-wrapper relative">
      <div
        className="card"
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {header && <div className="card__header">{header}</div>}
        <div className="card__body">
          {title && (
            <div className="card__body__title">
              <h1 className="">{title}</h1>
            </div>
          )}
          <div className="card__body__content">{children}</div>
        </div>
        {footer && <div className="card__footer">{footer}</div>}
      </div>

      <div
        ref={divRef}
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, color-mix(in srgb, var(--primary-contrast) 10%, transparent) , transparent 100%)`,
          WebkitMaskImage: `radial-gradient(50% 50%  at ${position.x}px ${position.y}px, black 45%, transparent) `,
        }}
        aria-hidden="true"
        className="card-overlay"
      />
    </div>
  )
}
