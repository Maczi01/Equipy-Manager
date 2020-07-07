import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import {MainView} from "./views/MainView";
import {EquipyView} from "./views/EquipyView";
import {AddEquipyView} from "./views/AddEquipyView";
import {AddUserView} from "./views/AddUserView";
import {Users, Equipy, Assignment} from "./api/Api";
import AppContext from './context/context'
import EditUserView from "./views/EditUserView";
import EditAssetView from "./views/EditAssetView";
import {UserAssignmentView} from "./views/UserAssignmentView";
import {AssignmentHistoryView} from "./views/AssignmentHistoryView";

class App extends Component {

    state = {
        users: [],
        assets: [],
        assignments: []
    }

    componentDidMount() {
        Users.getUsers()
            .then(users => this.setState({users}))
            .catch(error => console.log("Can not load data"));
        Equipy.getEquipy()
            .then(assets => this.setState({assets}))
            .catch(error => console.log("Can not load data"));
        Assignment.getAssignment()
            .then(assignments => this.setState({assignments}))
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
        const userToRemove = this.state.users.filter(u => u.id == indexToRemove)[0]
        Users.removeUser(userToRemove)
            .then(this.setState(prevState => {
                const users = this.state.users.filter((user, index) => user.id !== indexToRemove)
                return {users}
            }))
    }

    addEquipy = (equipy) => {
        Equipy.addEquipy(equipy)
            .then(() => Equipy.getEquipy())
            .then(assets => this.setState({assets}))
    };

    editAsset = (assetToUpdate) => {
        Equipy.editAsset(assetToUpdate)
            .then((updatedAsset) => this.setState(prevState => {
                    return {
                        assets: [
                            ...prevState.assets.map(u =>
                                u.id === updatedAsset.id ? updatedAsset : u
                            )]
                    };
                })
            );
    }

    deleteAsset = (indexToRemove) => {
        const assetToRemove = this.state.assets.filter(a => a.id == indexToRemove)[0]
        Equipy.deleteAsset(assetToRemove)
            .then(this.setState(prevState => {
                const assets = this.state.assets.filter((asset, index) => asset.id !== indexToRemove)
                return {assets}
            }))
    }

    returnAssignment = (id) => {
        Assignment.returnAsset(id)
    }
    render() {
        const contextElements = {
            users: this.state.users,
            addUser: this.addUser,
            editUser: this.editUser,
            deleteUser: this.removeUser,
            assets: this.state.assets,
            addEquipy: this.addEquipy,
            editAsset: this.editAsset,
            deleteAsset: this.deleteAsset,
            assignments: this.state.assignments,
            returnAssignment: this.returnAssignment
        }

        return (
            <BrowserRouter>
                <AppContext.Provider value={contextElements}>
                    <Header/>
                    <Route exact path="/" component={MainView}/>w
                    <Route path="/equipy" component={EquipyView}/>
                    <Route path="/addequipy" component={AddEquipyView}/>
                    <Route path="/adduser" component={AddUserView}/>
                    <Route path="/edituser/:id" component={EditUserView}/>
                    <Route path="/editasset/:id" component={EditAssetView}/>
                    <Route path="/userassignment/:id" component={UserAssignmentView}/>
                    <Route path="/assignmenthistory/:id" component={AssignmentHistoryView}/>
                </AppContext.Provider>
            </BrowserRouter>
        );
    }
}

export default App;
