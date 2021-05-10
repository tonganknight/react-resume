import React, { useState, Component}from 'react';
import {Card, Button} from 'react-bootstrap';
import ProjectInterface from '../ProjectInterface';
import ProjectFullstack from '../ProjectFullstack';
import AllProjects from '../AllProjects';

class Project extends React.Component{
    constructor(props) {
        super(props);
        this.handleUiClick = this.handleUiClick.bind(this);
        this.handleFullstackClick = this.handleFullstackClick.bind(this);
        this.state = {isShowAll: true};
        this.state ={isShowUI: false};
        this.state ={isShowFullstack: false};
    }

    handleUiClick() {
        this.setState({isShowAll: false});
        this.setState({isShowFullstack: false});
        this.setState({isShowUI: true});

    }

    handleFullstackClick() {
        this.setState({isShowAll: false});
        this.setState({isShowUI: false});
        this.setState({isShowFullstack: true});
    }
    handleFullstackClick() {
        this.setState({isShowAll: false});
        this.setState({isShowUI: false});
        this.setState({isShowFullstack: true});
    }


    render() {
        const isShowAll = this.state.isShowAll;
        const isShowUI = this.state.isShowUI;
        const isShowFullstack = this.state.isShowFullstack

        let Projectdiv;
        if (isShowAll){
            Projectdiv = <AllProjects/>
        }
        if (isShowUI){
            Projectdiv = <ProjectInterface/>
        }
        if (isShowFullstack){
            Projectdiv = <ProjectFullstack />
        }
        if(!Projectdiv){
            Projectdiv =<AllProjects/>
        }

        return(
                <div className="Projectbox">
                    <div className="projectIntro">Here is some of my recent work.
                    I've broken it into two catagories for easier navigation. </div>
                    <div className="projectIntro2"><strong>Or feel free to scroll down and explore them all at once.</strong></div>
                    <div className="buttonContainer"> 
                        <Button variant="outline-dark" className="bg-dark text-light projectButtons" onClick={this.handleUiClick}>Creative UI</Button>
                        <Button variant="outline-dark" className="bg-dark text-light projectButtons" onClick={this.handleFullstackClick}>Full Stack</Button>

                    </div>
                    {Projectdiv}
                        </div>

        )

    }
}

export default Project