import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg"
import {Button} from "../components/Button";
import {UserTable} from "../components/UserTable";
import {Link} from "react-router-dom";
import {SearchBar} from "../components/SearchBar";
import AppContext from "../context/context";
import {Users as User} from "../api/Api";
import ClipLoader from "react-spinners/ClipLoader";

const ViewWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 80vw;
`;

const MainImage = styled.div`
  margin: 5px;
  height: 40vh;
  border-radius: 10px;
  background-image: url(${background});
`;

export const MainView = () => {

    const context = useContext(AppContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await User.getUserByLastName("");
            setUsers(response)
            setLoading(true)
        }
        fetchData();
    }, [context.users]);

    const catchText = async (text) => {
        const response = await User.getUserByLastName(text);
        setUsers(response)
    };
    console.log("MainView")
    return (
        <ViewWrapper>
            <MainImage/>
            <SearchBar
                catchText={catchText}
            />
            {loading ?
                <>
                    <UserTable
                        users={users}
                        edit={context.editUser}
                        deleteUser={context.deleteUser}
                    />
                    <Button><Link to="/adduser">Add new user</Link> </Button>
                </>
                :
                <ClipLoader
                    size={50}
                    color={"#123abc"}
                    css={{"margin": "0 auto",}}
                />
            }


        </ViewWrapper>
    )
}