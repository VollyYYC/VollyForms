import React, {Component} from 'react';
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import HowCanHelp from './Components/BigButtons/HowCanHelp';
import SkillsForm from './Components/Forms/SkillsForm';
import WhoCanHelp from './Components/BigButtons/Who2Help';
import WhenCanHelp from "./Components/Forms/WhenCanHelp";
import WhoWantToHelp from "./Components/Forms/WhoWantToHelp";

export default class App extends Component {
    render() {
        // Since everything here is 1 linear form, we'll put all the routes here.
        return (
            <div className="App">
                <nav>
                    <Link to={'/skillsform'}>Skills Form</Link>
                    <Link to={'/who2help'}>Who Do You Want To Help</Link>
                    <Link to={'/whencanhelp'}>When Can You Help</Link>
                    <Link to={'/whowanttohelp'}>Who do you want to help</Link>
                </nav>
                <div>
                    <Switch>
                        <Route exact path={"/"} component={HowCanHelp}/>
                        <Route exact path={"/skillsform"} component={SkillsForm}/>
                        <Route exact path={"/who2help"} component={WhoCanHelp}/>
                        <Route exact path={"/whencanhelp"} component={WhenCanHelp}/>
                        <Route exact path={"/whowanttohelp"} component={WhoWantToHelp}/>
                    </Switch>
                </div>
            </div>
        );
    }
}


