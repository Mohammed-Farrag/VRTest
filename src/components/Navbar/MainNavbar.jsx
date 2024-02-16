import React, { Component } from 'react'
import TopNabvar from './TopNabvar'
import MainMenu from './MainMenu'
import CatrgoriesNavbar from './CatrgoriesNavbar'

export class MainNavbar extends Component {

    render() {
        return (
            <>

                <TopNabvar toggleCanvas={this.props.toggleCanvas} />
                <MainMenu />
                <CatrgoriesNavbar />
            </>
        )
    }
}

export default MainNavbar