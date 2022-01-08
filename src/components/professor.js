import styled from "@emotion/styled"
import * as React from 'react'
import { ParallaxLayer } from "@react-spring/parallax"
import Image from "../images/takigutisense.jpg"


const Img = styled.img`
    height: 90%;
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    @media (max-width: 420px){
        width: 85%;
        height: auto;
        top: 25%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
`

const Div = styled.div`
    background: #eee;
    padding: 10px;
    width: 45%;
    height: 40%;
    position: absolute;
    top: 50%;
    left: 10%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
`

const Professor = ({offset, factor=1}) => {
    return(
        <div>
            <ParallaxLayer speed={0.1} offset={offset} factor={factor}>      
                <Img alt="sense" src={Image} />     
            </ParallaxLayer>
            <ParallaxLayer speed={-0.1} offset={offset} factor={factor}> 
                <Div>
                    <h1>Message</h1>
                    <p>3年生4Qで，ディジタル信号処理の授業を担当している滝口です．
我々の研究室では，音声，対話，コンピュータビジョン，脳に関する研究をしています．この分野は，大学のみならず世界のIT企業Google，IBM，Apple，Microsoft，Amazon，Facebookなどが力を入れて研究開発を進めています．
私たちは，特に医学，保健学，生物学など様々な異分野の融合による新しい研究を目指しています．</p>
                </Div>
            </ParallaxLayer>
        </div>
    )
}
export default Professor