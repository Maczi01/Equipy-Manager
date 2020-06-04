import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg"
import AppContext from "../context/context";
import {AssignmentTable} from "../components/AssignmentTable";
import {Assignment, Equipy} from "../api/Api";
import {HistoryTable} from "../components/HistoryTable";


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
`

export const AssignmentHistoryView = ({match}) => {
    const context = useContext(AppContext);
    const selectedId = match.params.id;
    console.log({selectedId});
    const asset = context.assets.filter(i => i.id == selectedId)[0]

    // const returnAsset = (id) =>  Assignment.returnAsset(id)
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await Equipy.assignmentHistory(selectedId);
            setAssignments(response)
        }

        fetchData();
    }, []);
    console.log(assignments)
    return (
        <ViewWrapper>
            <MainImage/>
            <HistoryTable
                asset={asset}
                assignments={assignments}
            />
        </ViewWrapper>
    )
}