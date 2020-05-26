import React, {Component} from 'react';
import Page from "../../common/Page";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import PostSection from "./sections/PostSection";
import { Switch, Route, IndexRoute } from "react-router-dom";

export default class HomePage extends Component {

    render(){
        return (
            <Page>
                <TopBar/>
                <div style={{height: '100%', display: 'flex'}} >
                    <NavBar/>
                    <Switch>
                        <Route path='/home/posts' component={PostSection}/>
                        <Route path='/home/x' component={NavBar}/>
                    </Switch>
                </div>
            </Page>
        )
    }

}