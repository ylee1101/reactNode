import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Landing from "./Landing";

import DashBoard from './Dashboard';

import SurveyNew from "./surveys/SurveyNew";
// Dummy components
// const DashBoard = () => <h2>DashBoard</h2>;
// const SurveyNew = () => <h2>SurveyNew</h2>;


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="container">
                    {/* by setting as / it means the root of domain */}
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={DashBoard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);
