import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg"
import {Button} from "../components/Button";
import {UserTable} from "../components/UserTable";
import {Link} from "react-router-dom";
import {SearchBar} from "../components/SearchBar";
import AppContext from "../context/context";
import {AssignmentTable} from "../components/AssignmentTable";
import {Assignment} from "../api/Api";


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

export const UserAssignmentView = ({match}) => {
    const context = useContext(AppContext);
    const selectedId = match.params.id;
    console.log({selectedId});
    const user = context.users.filter(i => i.id == selectedId)[0]
    const returnAsset = (id) => Assignment.returnAsset(id)
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await Assignment.getAssignment(selectedId);
            setAssignments(response)
        }

        fetchData();
    });

    return (
        <ViewWrapper>
            <MainImage/>
            <AssignmentTable
                user={user}
                assignments={assignments}
                returnAsset={returnAsset}
            />
        </ViewWrapper>
    )
}