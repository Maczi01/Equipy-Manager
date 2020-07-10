import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg"
import AppContext from "../context/context";
import {Equipy} from "../api/Api";
import {HistoryTable} from "../components/HistoryTable";
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
    const [assignments, setAssignments] = useState();
    // const assignments = context.assignments(asset.id)
    console.log(asset.id)
    console.log("created")

    useEffect(() => {
        async function fetchData() {
            const response = await Equipy.assignmentHistory(selectedId);
            setAssignments(response);
        }
        fetchData();
    }, []);
    // const assignUser = async (id) => {
    //     const assignment = {startData:  new Date(), endData: null, userId: id, assetId: asset.id}
    //     const response = await Assignment.assignAssetToUser(assignment)
    //     console.log(`Assignement: ${response}`)
    // }

    return (
        <ViewWrapper>
            <MainImage/>
            <SearchBar
                // catchText={catchText}
            />
            {context.users.length ?
                <>
                    <UserTable2
                        assignUser={context.assignUser}
                        asset={asset}
                        users={context.users}
                    />


                </>
                : <p>nic</p>
            }
            {
                context.assignments.length ?

                    <>
                        <HistoryTable
                            asset={asset}
                            assignments={assignments}
                            returnAsset={context.returnAssignment}
                        />
                    </>
                    :
                    <p>No assignments history</p>
            }

        </ViewWrapper>
    )
}