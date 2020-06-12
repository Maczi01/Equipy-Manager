import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg";
import {EquipyTable} from "../components/EquipyTable";
import {Button} from "../components/Button";
import {Link} from "react-router-dom";
import {SearchBar} from "../components/SearchBar";
import AppContext from "../context/context";
import {UserTable} from "../components/UserTable";
import {Equipy} from "../api/Api";

const ViewWrapper = styled.div`
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   width: 80vw;
`;

const MainImage = styled.div`
  margin: 5px;
  height: 40vh;
  border-radius: 10px;
  background-image: url(${background});
`;

export const EquipyView = () => {

    const context = useContext(AppContext);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await Equipy.getAssetByNameOrSerialNumber("");
            setAssets(response)
        }

        fetchData();
    }, []);

    const catchText = async (text) => {
        const response = await Equipy.getAssetByNameOrSerialNumber(text);
        setAssets(response)
    };
    return (
        <ViewWrapper>
            <MainImage/>
            <SearchBar
                catchText={catchText}
            />
            <EquipyTable
                assets={assets}
                edit={context.editAsset}
                deleteAsset={context.deleteAsset}
            />
            <Button><Link to="/addequipy">Add new equipy</Link> </Button>
        </ViewWrapper>
    )
};