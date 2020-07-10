import React, {useContext} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg"
import AppContext from "../context/context";
import {AssignmentTable} from "../components/AssignmentTable";


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
    // const returnAsset = (id) => Assignment.returnAsset(id)
    // const assignments = context.assignmentForUser(selectedId)

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await Assignment.getAssignment(selectedId);
    //         setAssignments(response)
    //     }
    //     fetchData();
    // });
    // console.log("lol")

    return (
        <ViewWrapper>
            <MainImage/>
            <AssignmentTable
                user={user}
                assignments={context.assignmentForUser(selectedId)}
                returnAsset={context.returnAssignment}
            />
        </ViewWrapper>
    )
}