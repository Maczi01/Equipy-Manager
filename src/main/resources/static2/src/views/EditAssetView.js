import React, {useContext} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg";
import AppContext from "../context/context";
import {EditUser} from "../components/EditUser";
import {EditAsset} from "../components/EditAsset";

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

const EditAssetView = ({match}) => {
    const selectedId = match.params.id;
    const context = useContext(AppContext);
    const asset = context.asset.filter(a => a.id == selectedId)[0]
    
    return (
        <ViewWrapper>
            <MainImage>
                <Paragraph>
                    Equipy
                </Paragraph>
            </MainImage>
            <EditAsset
                asset={asset}
                editAsset={context.editAsset}
            />
        </ViewWrapper>
    )
};

export default EditAssetView;

