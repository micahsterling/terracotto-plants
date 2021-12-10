import React from 'react'
import { CloseIcon } from './SidebarElements'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>

      <SidebarMenu>
        <SidebarLink to='about'>
          About
        </SidebarLink>
        <SidebarLink to='discover'>
          Discover
          </SidebarLink>
        <SidebarLink to='services'>
          Services
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
      </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar