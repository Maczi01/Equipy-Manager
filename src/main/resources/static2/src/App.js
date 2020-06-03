import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import {MainView} from "./views/MainView";
import {EquipyView} from "./views/EquipyView";
import {AddEquipyView} from "./views/AddEquipyView";
import {AddUserView} from "./views/AddUserView";
import {Users, Equipy} from "./api/Api";
import AppContext from './context/context'
import EditUserView from "./views/EditUserView";
import EditAssetView from "./views/EditAssetView";

class App extends Component {

    state = {
        users: [],
        assets: [],
    }

    componentDidMount() {
        Users.getUsers()
            .then(users => this.setState({users}))
            .catch(error => console.log("Can not load data"));
        Equipy.getEquipy()
            .then(assets => this.setState({assets}))
            .catch(error => console.log("Can not load data"));
    }

    addUser = (user) => {
        Users.addUser(user)
            .then(() => Users.getUsers())
            .then(users => this.setState({users}))
    };

    editUser = (userToUpdate) => {
        Users.editUser(userToUpdate)
            .then((updatedUser) => this.setState(prevState => {
                    return {
                        users: [
                            ...prevState.users.map(u =>
                                u.id === updatedUser.id ? updatedUser : u
                            )]
                    };
                })
            );
    };

    removeUser = (indexToRemove) => {
        Users.deleteUser(this.state.users[indexToRemove])
            .then(this.setState(prevState => {
                const users = this.state.users.filter((user, index) => index !== indexToRemove)
                return {users}
            }))
    }

    addEquipy = (equipy) => {
        Equipy.addEquipy(equipy)
            .then(() => Equipy.getEquipy())
            .then(assets => this.setState({assets}))
    };

    editEquipy = (assetToUpdate) => {
        Equipy.editAsset(assetToUpdate)
            .then((updatedAsset) => this.setState(prevState => {
                    return {
                        users: [
                            ...prevState.users.map(u =>
                                u.id === updatedAsset.id ? updatedAsset : u
                            )]
                    };
                })
            );
    }

    removeEquipy = (indexToRemove) => {
        Equipy.deleteAsset(this.state.assets[indexToRemove])
            .then(this.setState(prevState => {
                const assets = this.state.assets.filter((asset, index) => index !== indexToRemove)
                return {assets}
            }))
    }




    render() {
        const contextElements = {
            users: this.state.users,
            assets: this.state.assets,
            addUser: this.addUser,
            addEquipy: this.addEquipy,
            editUser: this.editUser,
            deleteUser: this.removeUser
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header/>
                    <Route exact path="/" component={MainView}/>
                    <Route path="/equipy" component={EquipyView}/>
                    <Route path="/addequipy" component={AddEquipyView}/>
                    <Route path="/adduser" component={AddUserView}/>
                    <Route path="/edituser/:id" component={EditUserView}/>
                    <Route path="/editasset/:id" component={EditAssetView}/>
                </AppContext.Provider>
            </BrowserRouter>
        );
    }

}

export default App;
