import styled from 'styled-components';
import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCog, faUndo, faUserMinus} from "@fortawesome/free-solid-svg-icons";
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
`

const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
  margin: 0 20px;
  cursor: pointer;
`


export const AssignmentTable = ({assignments, user}) => {
    return (
        <Wrapper>
            <TableWrapper>
                <HeaderAndRow>
                    <Cell>
                        Name
                    </Cell>
                    <Cell>
                        Surname
                    </Cell>
                    <Cell>
                        Id number
                    </Cell>
                </HeaderAndRow>

                <Row>

                    <Cell>
                        {user.firstName}
                    </Cell>
                    <Cell>
                        {user.lastName}
                    </Cell>
                    <Cell>
                        {user.pesel}
                    </Cell>
                </Row>
            </TableWrapper>

            <TableWrapper>
                <HeaderAndRow>
                    <Cell>
                        #
                    </Cell>
                    <Cell>
                        Name of resource
                    </Cell>
                    <Cell>
                        Serial Number
                    </Cell>
                    <Cell>
                        Start
                    </Cell>
                    <Cell>
                        End
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
                            {assignment.assetName}
                        </Cell>

                        <Cell>
                            {assignment.assetName}
                        </Cell>
                        <Cell>
                            {assignment.start}
                        </Cell>
                        <Cell>
                            {assignment.end}
                        </Cell>
                        <Cell>
                            <FontAwesomeIconWrapper icon={faUndo}/>
                        </Cell>
                    </Row>
                )
                }


            </TableWrapper>


        </Wrapper>
    )
}