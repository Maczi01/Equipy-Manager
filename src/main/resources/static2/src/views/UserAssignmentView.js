import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg"
import AppContext from "../context/context";
import {AssignmentTable} from "../components/AssignmentTable";
import {Assignment, Users} from "../api/Api";


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
    const user = context.users.filter(i => i.id == selectedId)[0]
    const [assignments, setAssignments ] = useState([])
    // setAssignments(Assignment.getAssignment(selectedId))
    //

    // Assignment.returnAsset(id)
    //     .then(() => Users.getUsers())
    //     .then(users => this.setState({users}))

    const fetchData = async () => {
        const response = await Assignment.getAssignment(selectedId);
        setAssignments(response)
    }

    useEffect(() => {

        fetchData();
    });

    console.log("lol");

    return (
        <ViewWrapper>
            <MainImage/>
            <AssignmentTable
                user={user}
                assignments={assignments}
                returnAsset={context.returnAssignment}
            />
        </ViewWrapper>
    )
}