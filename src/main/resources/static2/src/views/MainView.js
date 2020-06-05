import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg"
import {Button} from "../components/Button";
import {UserTable} from "../components/UserTable";
import {Link} from "react-router-dom";
import {SearchBar} from "../components/SearchBar";
import AppContext from "../context/context";
import {Equipy, Users as User} from "../api/Api";


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

export const MainView = () => {

    const context = useContext(AppContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await User.getUserByLastName("");
            setUsers(response)
        }
        fetchData();
    }, []);

    const catchText = async (text) => {
        const response = await User.getUserByLastName(text);
        setUsers(response)
    };

    return (
        <ViewWrapper>
            <MainImage/>
            <SearchBar
                catchText={catchText}
            />
            <UserTable
                users={users}
                edit={context.editUser}
                deleteUser={context.deleteUser}
            />
            <Button><Link to="/adduser">Add new user</Link> </Button>
        </ViewWrapper>
    )
}