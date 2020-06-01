import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import {MainView} from "./views/MainView";
import {EquipyView} from "./views/EquipyView";
import {AddEquipyForm} from "./views/AddEquipyForm";
import {AddUserForm} from "./views/AddUserForm";
import {CatchData} from "./api/CatchData";
import AppContext from './context/context'

class App extends Component {

    state = {
        users: [],
        assets: [],
    }

    componentDidMount() {
        CatchData.getUsers()
            .then(users => this.setState({users}))
            .catch(error => console.err("Can not load data"));
        CatchData.getEquipy()
            .then(assets => this.setState({assets}))
            .catch(error => console.err("Can not load data"));
    }

    render() {
        const contextElements = {
            users: this.state.users,
            assets: this.state.assets
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header/>
                    <Route exact path="/" component={MainView}/>
                    <Route path="/equipy" component={EquipyView}/>
                    <Route path="/addequipy" component={AddEquipyForm}/>
                    <Route path="/adduser" component={AddUserForm}/>
                </AppContext.Provider>
            </BrowserRouter>
        );
    }

}

export default App;
