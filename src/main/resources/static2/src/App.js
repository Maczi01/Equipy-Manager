import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import {MainView} from "./views/MainView";
import {EquipyView} from "./views/EquipyView";
import {AddEquipyForm} from "./views/AddEquipyForm";

function App() {
    return (
        <BrowserRouter>
                <Header/>
                <Route exact path="/" component={MainView}/>
                <Route path="/equipy" component={EquipyView}/>
                <Route path="/addequipy" component={AddEquipyForm}/>
        </BrowserRouter>
    );
}

export default App;
