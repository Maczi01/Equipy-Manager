import styled from 'styled-components';
import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCog, faUndo, faUserMinus, faEdit, faHistory, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router";
import AppContext from "../context/context";
import {Assignment} from "../api/Api";

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 12px;
  width: 80vw;
  
`

const TableWrapper = styled.div`
  width: 80vw;
  margin: 0 0 60px 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  display: table;
`

const HeaderAndRow = styled.div`
  display: table-row;
  font-weight: 900;
  color: #ffffff;
  background: #27ae60;
`;

const Row = styled.div`
   display: table-row;
   background: #f6f6f6;

`

const Cell = styled.div`
  padding: 12px 12px;
  display: table-cell;
  border-bottom: 1px solid gray;
  text-align: center;
  justify-content: center;
  align-items: center;
`;


const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
  margin: 0 20px;
  cursor: pointer;
`

export const HistoryTable = ({asset, assignments, finishAssignment}) => {
    return (
        <Wrapper>
            <TableWrapper>
                <HeaderAndRow>
                    <Cell>
                        Name
                    </Cell>
                    <Cell>
                        Description
                    </Cell>
                    <Cell>
                        Id number
                    </Cell>
                    <Cell>
                        Category
                    </Cell>
                </HeaderAndRow>
                <Row>
                    <Cell>
                        {asset.name}
                    </Cell>
                    <Cell>
                        {`${asset.description.substring(0, 20)}...`}
                    </Cell>
                    <Cell>
                        {asset.serialNumber}
                    </Cell>
                    <Cell>
                        {asset.category}
                    </Cell>

                </Row>
            </TableWrapper>


            <TableWrapper>
                <h3>Assignment history</h3>
                <HeaderAndRow>
                    <Cell>
                        index
                    </Cell>
                    <Cell>
                        user id
                    </Cell>
                    <Cell>
                        First name
                    </Cell>
                    <Cell>
                        Last name
                    </Cell>
                    <Cell>
                        Pesel
                    </Cell>
                    <Cell>
                        Start date
                    </Cell>
                    <Cell>
                        End date
                    </Cell>
                    <Cell>
                        Action
                    </Cell>
                </HeaderAndRow>

                {assignments.map((assignment, index) =>
                    <Row
                        key={`user-${index}`}>
                        <Cell>
                            {index + 1}
                        </Cell>

                        <Cell>
                            {assignment.userId}
                        </Cell>

                        <Cell>
                            {assignment.firstName}
                        </Cell>
                        <Cell>
                            {assignment.lastName}
                        </Cell>
                        <Cell>
                            {assignment.pesel}
                        </Cell>
                        <Cell>
                            {assignment.start}
                        </Cell>
                        <Cell>
                            {assignment.end}
                        </Cell>
                        <Cell>
                            {assignment.end ? null :
                                <FontAwesomeIconWrapper
                                    icon={faHistory}
                                    onClick={() => finishAssignment(assignment.id)}

                                />}
                        </Cell>

                    </Row>
                )
                }

            </TableWrapper>


        </Wrapper>
    )
}