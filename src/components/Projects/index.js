import React from 'react';
import { Button } from 'react-bootstrap';
import ProjectInterface from '../ProjectInterface';
import ProjectFullstack from '../ProjectFullstack';
import AllProjects from '../AllProjects';
import RecentWorks from '../RecentWorks';
import {  Breakpoint,} from 'react-socks';

//this is the display of the projects view. It needs both Project views to render them properly

class Project extends React.Component{
    constructor(props) {
        super(props);
        this.handleUiClick = this.handleUiClick.bind(this);
        this.handleFullstackClick = this.handleFullstackClick.bind(this);
        this.handelRecentWorks = this.handelRecentWorks.bind(this);
        this.state = {isShowAll: true};
        this.state ={isShowUI: false};
        this.state ={isShowFullstack: false};
        this.state ={isRecentWorks: false};
    }

    handleUiClick() {
        this.setState({isShowAll: false});
        this.setState({isShowFullstack: false});
        this.setState({isShowUI: true});
        this.setState({isRecentWorks: false});
    }
    handleFullstackClick() {
        this.setState({isShowAll: false});
        this.setState({isShowUI: false});
        this.setState({isShowFullstack: true});
        this.setState({isRecentWorks: false});
    }
    handleFullstackClick() {
        this.setState({isShowAll: false});
        this.setState({isShowUI: false});
        this.setState({isShowFullstack: true});
        this.setState({isRecentWorks: false});
    }
    handelRecentWorks() {
        this.setState({isShowAll: false});
        this.setState({isShowUI: false});
        this.setState({isShowFullstack: false});
         this.setState({isRecentWorks: true});
    }


    render() {
        const isShowAll = this.state.isShowAll;
        const isShowUI = this.state.isShowUI;
        const isShowFullstack = this.state.isShowFullstack
        const isRecentWorks = this.state.isRecentWorks

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
        if(isRecentWorks){
            Projectdiv = <RecentWorks/>
        }
        if(!Projectdiv){
            Projectdiv =<AllProjects/>
        }

        return(

                <div>
                <Breakpoint large up>
                    <div className="Projectbox">
                    <div className="projectIntroLarge">Here is some of my recent work.
                     Please keep in mind some of these projects will take some time to load as they are on free Dynomos.
                      I've broken these into two catagories for easier navigation. You are welcome to filter these</div>
                    <div className="projectIntro2"><strong>Or feel free to scroll down and explore them all at once.</strong></div>
                    <div className="buttonContainer"> 
                        <Button variant="outline-dark projectButtonsLarge" className="bg-dark text-light projectButtonsLarge" onClick={this.handelRecentWorks}>Recent Works</Button>
                        <Button variant="outline-dark projectButtonsLarge" className="bg-dark text-light projectButtonsLarge" onClick={this.handleUiClick}>Creative UI</Button>
                        <Button variant="outline-dark projectButtonsLarge" className="bg-dark text-light projectButtonsLarge" onClick={this.handleFullstackClick}>Full Stack</Button>
                        
                    </div>
                    {Projectdiv}
                        </div>
                </Breakpoint>  

                <Breakpoint small down>
                <div className="Projectbox">
                    <div className="projectIntroMobile">Here is some of my recent work.
                     Please keep in mind some of these projects will take some time to load as they are on free Dynomos.
                      I've broken these into two catagories for easier navigation. You are welcome to filter these</div>
                    <div className="projectIntro2Mobile"><strong>Or feel free to scroll down and explore them all at once.</strong></div>
                    <div className="buttonContainer"> 
                        <Button variant="outline-dark projectButtonsLarge" className="bg-dark text-light projectButtonsLarge" onClick={this.handelRecentWorks}>Recent Works</Button>
                        <Button variant="outline-dark" className="bg-dark text-light projectButtonsMobile" onClick={this.handleUiClick}>Creative UI</Button>
                        <Button variant="outline-dark" className="bg-dark text-light projectButtonsMobile" onClick={this.handleFullstackClick}>Full Stack</Button>
                        </div>
                            {Projectdiv}
                        </div>
                    </Breakpoint>  
                </div>
        )

    }
}

export default Project