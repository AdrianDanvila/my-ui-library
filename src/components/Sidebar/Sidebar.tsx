import React, { PropsWithChildren, ReactNode } from 'react'
import './sidebar.scss'

export enum SidebarPositions {
  Left = 'left',
  Right = 'right',
}
type SidebarProps = {
  classname: string
  position?: SidebarPositions
  isVisible?: boolean
}

export const Sidebar: React.FC<PropsWithChildren<SidebarProps>> = ({
  children,
  classname,
  position = SidebarPositions.Left,
  isVisible,
}) => {
  return <></>
}
