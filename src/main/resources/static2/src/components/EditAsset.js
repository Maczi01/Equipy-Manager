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

const FormHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const Select = styled.select`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin: 15px 0;
  font-size: 18px;
`

const Textarea = styled.textarea`
    height: 50px;
  border-radius: 5px;
  border: 1px solid #ced4da;
  margin: 15px 0;
  font-size: 18px;
`

const Form = styled.h2`
  display: flex;
  flex-direction: column;
`

export const EditAsset = ({editAsset, asset}) => {

    const [name, setName] = useState(asset.name)
    const [description, setDescription] = useState(asset.description)
    const [serialNumber, setSerialNumber] = useState(asset.serialNumber)
    const [category, setCategory] = useState(asset.category)

    const handleSubmit = (e) => {
        e.preventDefault();
        editAsset({...asset, name, description, serialNumber, category});
    }

    return (
        <FormWrapper>
            <FormHeader>New user</FormHeader>
            <Form onSubmit={handleSubmit}>
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
            </Form>
        </FormWrapper>

    )
}
