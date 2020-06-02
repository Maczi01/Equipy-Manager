import React from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg";
import {Button} from "../components/Button";
import {AddEquipy} from "../components/AddEquipy";
import AppContext from "../context/context";

const ViewWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 80vw;
`

const FormWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 45vw;
   margin: 0 auto;
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

const Select = styled.select`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin: 15px 0;
  font-size: 18px;
`

const FormHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const Textarea = styled.textarea`
    height: 50px;
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