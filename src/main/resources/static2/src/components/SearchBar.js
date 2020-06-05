import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import styled from 'styled-components';


const SearchWrapper = styled.div`
width: 400px;
display: flex;
justify-content: center;
align-content: center;
text-align:  center;
margin:  0 auto;
margin-top:  12px;
`
const SearchInput = styled.input`
  margin-bottom: 0;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: center;
  border-radius: 0.25rem;
  height: 35px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-clip: padding-box;
  background-color: white;
  vertical-align: middle;
  border: 1px solid #e0e0e5;
  font-size: 1rem;
  width: 100%;
  line-height: 2;
  padding: 0.375rem 1.25rem;
  -webkit-transition: border-color 0.2s;
  -moz-transition: border-color 0.2s;
  transition: border-color 0.2s;
  
`
const InputButton = styled.button`
  height: 35px;
  margin: 0;
  padding: 10px 1.3rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  font-family: "Font Awesome 5 Free";
  font-size: 1rem;
  display: inline-block;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.15;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background: #f9d342;
  color: #292826;
  border: 1px solid transparent;
  vertical-align: middle;
  text-shadow: none;
  transition: all 0.2s;
  
`
const Label = styled.label`
 margin-bottom: 0;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: center;
  height: 35px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`


export const SearchBar = ({catchText}) => {

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        catchText(text);
    }

    return (
        <SearchWrapper>
            <form onSubmit={handleSubmit}>
                <Label>
                    <SearchInput
                        onChange={e => setText(e.target.value)}

                        placeholder="Type something..."/>
                </Label>
                <InputButton type="submit" className="search-submit button" value="&#xf002">
                    <FontAwesomeIcon icon={faSearch}/>
                </InputButton>
            </form>
        </SearchWrapper>
    )
}