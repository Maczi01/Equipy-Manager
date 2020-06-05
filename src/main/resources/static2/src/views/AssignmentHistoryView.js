import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg"
import AppContext from "../context/context";
import {AssignmentTable} from "../components/AssignmentTable";
import {Assignment, Equipy, Users as User} from "../api/Api";
import {HistoryTable} from "../components/HistoryTable";
import {UserTable} from "../components/UserTable";
import {SearchBar} from "../components/SearchBar";
import {UserTable2} from "../components/UserTable2";


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
    const asset = context.assets.filter(i => i.id == selectedId)[0]

    const [assignments, setAssignments] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await Equipy.assignmentHistory(selectedId);
            setAssignments(response)
        }

        fetchData();
    }, []);

    const catchText = async (text) => {
        const response = await User.getUserByLastName(text);
        setUsers(response)
    };
    const finishAssignment = async (id) => {
        const response = await Assignment.returnAsset(id);
        const res = await Equipy.assignmentHistory(selectedId);
        setAssignments(res)
        // setUsers(response)
    };

    const assignUser = async (id) => {
        console.log(id)
        const data = new Date();
        const assignment = {startData: data, endData: null, userId: id, assetId: asset.id}
        const response = await Assignment.assignAssetToUser(assignment)
        // return response.data;
    }

    console.log(assignments);
    return (
        <ViewWrapper>
            <MainImage/>
            <SearchBar
                catchText={catchText}
            />
            {users.length ?
                <UserTable2
                    assignUser={assignUser}
                    users={users}
                /> : null
            }

            <HistoryTable
                asset={asset}
                assignments={assignments}
                finishAssignment={finishAssignment}
            />

        </ViewWrapper>
    )
}