import React from 'react';
import { Button } from 'react-bootstrap';

export default function ProjectsCard(props){

    return(
        <div>
            <h3>{this.props.title}</h3>
            <img>{this.props.logo}</img>
            <p>{this.props.description}</p>
            <Button onClick={() => window.location.href = this.props.link}>GitHub Repo</Button>
        </div>
    )
}