import React from 'react';
import { Sidebar, Image, Title, Link } from '../styledComponents/Sidebar';
import '../App.css';

export default function SideNav(){

    const handleBlogClick = (event) => {
        alert("Redirecting to medium.com");
        window.location.href = "https://erikn775.medium.com/";
    }

    return(
        <Sidebar>
            <Image src="https://1.bp.blogspot.com/-dlj06U4nyto/YDLpj-wwXiI/AAAAAAAAXF8/inqLOF2eaP4nYRoSzA7RSm_ddSRuxAIIACPcBGAsYHg/s320/IMG_1992.PNG"></Image>
            <Title>Full Stack Software Developer</Title>
            <Title className="nav-link">Projects</Title>
            <Title className="nav-link" onClick={handleBlogClick}>Blogs</Title>
            <Title className="nav-link">About Me</Title>
        </Sidebar>
    )
}