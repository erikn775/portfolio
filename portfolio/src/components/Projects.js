import React from 'react';
import {ProjectsCard} from './ProjectsCard';


export default class Projects extends React.Component {
    state = {
        title: null,
        logo: null,
        description: null,
        link: null
    };

    componentDidMount(){

    }

    render(){
        return(
            <div>
                {this.state.map(project => <ProjectsCard key={project.id} title={project.title} logo={project.logo} description={project.description} link={project.link}/>)}
            </div>
        )
    }
}