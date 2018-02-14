import React, { Component } from 'react'
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import { Routes } from '../Routes';

import { connect } from 'react-redux'

import { Container, Body } from './style.js'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navVisible: true
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar(){
        this.setState({
            navVisible: !this.state.navVisible
        })
    }
    
    render() {
        return (
                <Container>
                    <Header toggleSidebar={this.toggleSidebar}/>
                    <Body>
                        <Sidebar navVisible={this.state.navVisible}/>
                        <Routes />
                    </Body>
                </Container>

        )
    }
}

const mapStateToProps = state => {
    return {
      fetching: state.products.fetching,
    }
}

const ConectedApp = connect(
    mapStateToProps,
    null
  )(App)

export default ConectedApp