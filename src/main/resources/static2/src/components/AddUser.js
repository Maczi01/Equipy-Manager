import {Button} from "./Button";
import React, {useState} from "react";
import styled from 'styled-components';


const FormWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 45vw;
   margin: 0 auto;
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


export const AddUser = ({addUser}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [pesel, setPesel] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser({firstName, lastName, pesel});
    }

    return (
        <FormWrapper>
            <FormHeader>New user</FormHeader>
            <form onSubmit={handleSubmit}>
                <label> </label>
                <Input
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                    placeholder="Name"
                />
                <label> </label>
                <Input
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                    placeholder="Surname"/>
                <label> </label>
                <Input
                    onChange={e => setPesel(e.target.value)}
                    value={pesel}
                    placeholder="Id number"/>
                <label> </label>
                <Button>Save</Button>
            </form>
        </FormWrapper>

    )
}
