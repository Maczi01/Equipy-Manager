import React from 'react';
import styled from 'styled-components';
import {Table} from "../components/Table";


const ViewWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 80vw;
`

export const EquipyView = () => (
    <ViewWrapper>
        <Table/>
    </ViewWrapper>

)