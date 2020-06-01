import styled from 'styled-components';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCog, faUserEdit,faUserMinus} from "@fortawesome/free-solid-svg-icons";

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
`


export const UserTable = ({users}) => (
    <Wrapper>

        <TableWrapper>

            <HeaderAndRow>
                <Cell>
                    #
                </Cell>
                <Cell>
                    Name
                </Cell>
                <Cell>
                    Surname
                </Cell>
                <Cell>
                    Id number
                </Cell>
                <Cell>
                    Action
                </Cell>
            </HeaderAndRow>


            {users.map( (user, index )=>

                <Row
                    key={`asset-${user.serialNumber}`}

                >
                    <Cell>
                        {index+1}
                    </Cell>
                    <Cell>
                        {user.firstName}
                    </Cell>
                    <Cell>
                        {user.lastName}
                    </Cell>
                    <Cell>
                        {user.pesel}
                    </Cell>
                    <Cell>
                        <FontAwesomeIconWrapper icon={faUserEdit}/>
                        <FontAwesomeIconWrapper icon={faUserCog}/>
                        <FontAwesomeIconWrapper icon={faUserMinus}/>
                    </Cell>
                </Row>

            )}




        </TableWrapper>


    </Wrapper>
)