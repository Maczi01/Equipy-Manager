import React, {useContext} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg";
import AppContext from "../context/context";
import {EditUser} from "../components/EditUser";

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

const EditUserView = ({match}) => {
    const selectedId = match.params.id;
    const context = useContext(AppContext);
    const user = context.users.filter(i => i.id == selectedId)[0]
    return (
        <ViewWrapper>
            <MainImage>
                <Paragraph>
                    Equipy
                </Paragraph>
            </MainImage>
            <EditUser
                user={user}
                editUser={context.editUser}
            />
        </ViewWrapper>
    )
};

export default EditUserView;

