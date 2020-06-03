import React from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg";
import {AddEquipy} from "../components/AddEquipy";
import AppContext from "../context/context";

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

const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin: 15px 0;
  font-size: 18px;
`


export const AddEquipyView = () => (
        <AppContext.Consumer>
            {(context) => (
            <ViewWrapper>
                <MainImage/>
                <AddEquipy addEquipy={context.addEquipy}/>
            </ViewWrapper>
        )}
    </AppContext.Consumer>
)