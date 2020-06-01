import styled from 'styled-components';
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faHistory,
    faTrash,
    faTrashAlt,
    faUserCog,
    faUserEdit,
    faUserMinus
} from "@fortawesome/free-solid-svg-icons";

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
  background: #ea6153;
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


export const EquipyTable = ({assets}) => (
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
                    Description
                </Cell>
                <Cell>
                    Id number
                </Cell>
                <Cell>
                    Category
                </Cell>
                <Cell>
                    Action
                </Cell>
            </HeaderAndRow>
            {assets.map((asset, index) =>
                <Row
                key={`asset-${asset.serialNumber}`}
                >
                    <Cell>
                        {index+1}
                    </Cell>
                    <Cell>
                        {asset.name}
                    </Cell>
                    <Cell>
                        {`${asset.description.substring(0,20)}...`}
                    </Cell>
                    <Cell>
                        {asset.serialNumber}
                    </Cell>
                    <Cell>
                        {asset.category}
                    </Cell>
                    <Cell>
                        <FontAwesomeIconWrapper icon={faEdit}/>
                        <FontAwesomeIconWrapper icon={faHistory}/>
                        <FontAwesomeIconWrapper icon={faTrashAlt}/>
                    </Cell>
                </Row>)}
        </TableWrapper>


    </Wrapper>
)