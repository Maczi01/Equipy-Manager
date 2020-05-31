import React from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const Nav = styled.nav`
    width: 100vw;
    height:60px;
    margin: 0 auto;
    background-color: #343a40;
    padding: 0;
`

const List = styled.ul`
  display: inline-block;
`

const Item = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 50px;
  color: white;
`

export const Header = () => (
    <Nav>
        <List>
            <NavLink exact  to="/"><Item>Users</Item></NavLink>
            <NavLink exact  to="/equipy"><Item>Equipy</Item></NavLink>
        </List>
    </Nav>
)

