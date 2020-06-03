import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import {MainView} from "./views/MainView";
import {EquipyView} from "./views/EquipyView";
import {AddEquipyView} from "./views/AddEquipyView";
import {AddUserView} from "./views/AddUserView";
import {CatchData} from "./api/CatchData";
import AppContext from './context/context'
import EditUserView from "./views/EditUserView";

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

    editUser = (userToUpdate) => {
        console.log(userToUpdate)
        CatchData.editUser(userToUpdate)
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
        CatchData.deleteUser(this.state.users[indexToRemove])
            .then(this.setState(prevState => {
                const users = this.state.users.filter((user, index) => index !== indexToRemove)
                return {users}
            }))
    }

    addEquipy = (equipy) => {
        CatchData.addEquipy(equipy)
            .then(() => CatchData.getEquipy())
            .then(assets => this.setState({assets}))
    };

    editEquipy = () => {

    }

    removeEquipy = () => {

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
                </AppContext.Provider>
            </BrowserRouter>
        );
    }

}

export default App;
