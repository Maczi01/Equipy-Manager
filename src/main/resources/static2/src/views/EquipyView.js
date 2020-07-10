import React, {useContext} from 'react';
import styled from 'styled-components';
import background from "../assets/background.jpg";
import {EquipyTable} from "../components/EquipyTable";
import {Button} from "../components/Button";
import {Link} from "react-router-dom";
import {SearchBar} from "../components/SearchBar";
import AppContext from "../context/context";

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
    // const [assets, setAssets] = useState([]);
    // const [loading, setLoading] = useState(false);
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await Equipy.getAssetByNameOrSerialNumber("");
    //         setAssets(response)
    //         setLoading(true);
    //     }
    //
    //     fetchData();
    // }, [context.assets]);
    //
    // const catchText = async (text) => {
    //     const response = await Equipy.getAssetByNameOrSerialNumber(text);
    //     setAssets(response)
    // };
    console.log("EquipyView")

    return (
        <ViewWrapper>
            <MainImage/>
            <SearchBar
                // catchText={catchText}
            />
            {/*{loading ?*/}
                <>
                    <EquipyTable
                        assets={context.assets}
                        edit={context.editAsset}
                        deleteAsset={context.deleteAsset}
                    />
                </>
            {/*    :*/}
            {/*    <ClipLoader*/}
            {/*        size={50}*/}
            {/*        color={"#123abc"}*/}
            {/*        css={{"margin": "0 auto",}}*/}
            {/*    />*/}
            {/*}*/}
            < Button> < Link to="/addequipy"> Add new equipy</Link> </Button>
        </ViewWrapper>
    )
};
