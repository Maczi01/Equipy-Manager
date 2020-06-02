import {Button} from "./Button";
import React, {useState} from "react";
import styled from 'styled-components';


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


export const AddEquipy = ({addEquipy}) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [serialNumber, setSerialNumber] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addEquipy({name, description, serialNumber, category});
    }

    return (
        <ViewWrapper>
            <FormWrapper>
                <FormHeader>New user</FormHeader>
                <form onSubmit={handleSubmit}>
                    <label> </label>
                    <Input
                        onChange={e => setName(e.target.value)}
                        value={name}
                        placeholder="Name"
                    />
                    <label> </label>
                    <Textarea
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        placeholder="Description"/>
                    <label> </label>
                    <Input
                        onChange={e => setSerialNumber(e.target.value)}
                        value={serialNumber}
                        placeholder="serialNumber"/>
                    <label> </label>
                    <Select
                        onChange={e => setCategory(e.target.value)}
                        value={category}
                        placeholder="category">
                        <option>Cars</option>
                        <option>Laptops</option>
                    </Select>
                    <Button>Save</Button>
                </form>
            </FormWrapper>
        </ViewWrapper>

    )
}
