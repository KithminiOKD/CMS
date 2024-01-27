import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  background: #fafafa;
  height: 60px;
  display: flex;
  top: 0;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  font-size: 30px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CollapseSideIcon1 = styled.div`
  width: 35px;
  height: 35px;
  color: white;
  border-radius: 50%;
  background-color: #0377A8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  border: 1px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 20px 0 rgba(0, 0, 0, 0.12);
`;

const CollapseSideIcon2 = styled.div`
  width: 35px;
  height: 35px;
  color: #0377A8;
  margin-top: 5px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  border: 2px solid #fafafa;
`;

const SidebarNav = styled.nav`
  background: #0377A8;
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const SideTop = styled.div`
  display: flex;
  width: 250px;
  height: 60px;
  background-color: #0377a8;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
`;

const H3 = styled.h3`
    text-align: center;
    margin-left: 20px;
    color: white;
    font-family: 'Princess Sofia', cursive;
    font-size: 30px;
    text-decoration: none;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "white" }}>
                <Nav>
                    <NavIcon to="#">
                        <CollapseSideIcon1 onClick={showSidebar}>
                            <Icon icon="bi:menu-app" style={{ fontSize: '22px' }} />
                        </CollapseSideIcon1>
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <SideTop>
                            <CollapseSideIcon2 onClick={showSidebar}>
                                <Icon icon="bi:menu-app" style={{ fontSize: '22px' }} />
                            </CollapseSideIcon2>
                            <H3>
                                Flex Flow
                            </H3>
                        </SideTop>
                        {SidebarData.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;