import React from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg"
import {Button} from "../components/Button";
import {UserTable} from "../components/UserTable";
import {Link} from "react-router-dom";
import {SearchBar} from "../components/SearchBar";


const ViewWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 80vw;
`

const MainImage = styled.div`
  margin: 5px;
  height: 40vh;
  border-radius: 10px;
  background-image: url(${background});
`

export const MainView = () => (
    <ViewWrapper>
        <MainImage/>
        <SearchBar/>
        <UserTable/>
        <Button><Link to="/adduser">Add new user</Link> </Button>
    </ViewWrapper>

)