import React from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg";
import AppContext from "../context/context";
import {AddUser} from "../components/AddUser";  

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
  position: relative;
`

const Paragraph = styled.p`
  position: absolute;
  top: 20%;
  left: 45%;
  color: white;
  font-size: 40px;
  font-weight: bold;
`

export const AddUserView = () => {
    return (
        <AppContext.Consumer>
            {(context) => (
                <ViewWrapper>
                    <MainImage>
                        <Paragraph>
                            Equipy
                        </Paragraph>
                    </MainImage>
                    <AddUser
                        addUser={context.addUser}
                    />
                </ViewWrapper>
            )}
        </AppContext.Consumer>
    )
}

