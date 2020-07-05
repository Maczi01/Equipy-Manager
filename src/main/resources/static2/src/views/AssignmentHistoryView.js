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
    const returnAsset = (id) => Assignment.returnAsset(id)
    const [assignments, setAssignments] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await Equipy.assignmentHistory(selectedId);
            // const response = await Assignment.getAssignment(selectedId);

            setAssignments(response)
        }
        fetchData();
    });
    // },[assignments]);

    const catchText = async (text) => {
        const response = await User.getUserByLastName(text);
        setUsers(response)
    };

    console.log("created")

    const assignUser = async (id) => {
        const assignment = {startData:  new Date(), endData: null, userId: id, assetId: asset.id}
        const response = await Assignment.assignAssetToUser(assignment)
        console.log(`Assignement: ${response}`)
    }

    return (
        <ViewWrapper>
            <MainImage/>
            <SearchBar
                catchText={catchText}
            />
            {users.length ?
                <>
                    <p>assignemtnty</p>
                    <UserTable2
                        assignUser={assignUser}
                        users={users}
                    />


                </>
                : null
            }
            {
                assignments.length ?

                  <>
                      <p>historyja</p>
                      <HistoryTable
                      asset={asset}
                      assignments={assignments}
                      returnAsset={returnAsset}
                  />
                  </>
                    :
                    <p>No assignments history</p>
            }

        </ViewWrapper>
    )
}