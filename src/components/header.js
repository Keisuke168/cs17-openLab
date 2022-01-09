import  *  as React from 'react'
import styled from "@emotion/styled"

const Info = styled.div`
    position: absolute;
    padding: 5px;
    background-color: #b22222;
    color: white;
    top: 0px;
    width: 100%;
    height: 10%;
    z-index: 999;

`

const Header = () => {
    return(
        <Info>
            <h2>CS17 滝口研究室</h2>
            <p>Media Informatics Lab.</p>
        </Info>
    )
}

export default Header