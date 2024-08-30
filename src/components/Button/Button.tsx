import React, { ReactNode } from 'react'
import './Button.scss'

type ButtonProps = {
  label: string
  icon: string | ReactNode
  classname: string
  unStyled: string
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  classname,
  unStyled,
}) => {
  return (
    <button
      className={`${classname} ${unStyled ? '' : 'btn'}`}
      onClick={() => onclick}>
      {label}
      {icon}
    </button>
  )
}
