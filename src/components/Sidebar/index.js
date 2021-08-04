import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizzas</SidebarLink>
        <SidebarLink to='/'>Postres</SidebarLink>
        <SidebarLink to='/'>Menú completo</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Ordenar ahora</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
