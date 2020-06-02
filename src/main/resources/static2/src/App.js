import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import {MainView} from "./views/MainView";
import {EquipyView} from "./views/EquipyView";
import {AddEquipyView} from "./views/AddEquipyView";
import {AddUserForm, AddUserView} from "./views/AddUserView";
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
            .catch(error => console.log("Can not load data"));
        CatchData.getEquipy()
            .then(assets => this.setState({assets}))
            .catch(error => console.log("Can not load data"));
    }

    addUser = (user) => {
        CatchData.addUser(user)
            .then(() => CatchData.getUsers())
            .then(users => this.setState({users}))
    };

    addEquipy = (equipy) => {
        CatchData.addEquipy(equipy)
            .then(() => CatchData.getEquipy())
            .then(assets => this.setState({assets}))
    };

    render() {
        const contextElements = {
            users: this.state.users,
            assets: this.state.assets,
            addUser: this.addUser,
            addEquipy: this.addEquipy,
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header/>
                    <Route exact path="/" component={MainView}/>
                    <Route path="/equipy" component={EquipyView}/>
                    <Route path="/addequipy" component={AddEquipyView}/>
                    <Route path="/adduser" component={AddUserView}/>
                </AppContext.Provider>
            </BrowserRouter>
        );
    }

}

export default App;
