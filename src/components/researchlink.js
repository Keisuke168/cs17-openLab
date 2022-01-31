import  *  as React from 'react'
import styled from "@emotion/styled"

const StyledLink = styled.a`
  position: relative;
  border-radius: lg;
  margin: 5%;
  width: 90%;
  height: 90%;
  color: white;
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  &:hover: {
    color: white;
    transform: translateY(-5px);
    box-shadow: xl;
  };
`

const ResearchLink = ({ link, title, bg }) => (
    <StyledLink href={link} style={{background: `${bg}`}}>
      {title}
    </StyledLink>
)

export default ResearchLink