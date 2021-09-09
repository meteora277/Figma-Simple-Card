import React from "react";
import Styled from "styled-components";
import mountain from "./mountain.jpg";

const StyledCard = Styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items:center;
    width:45.5rem;
    height: 19.3rem;
    background: #383A45;
    padding: 1rem;
    border-radius: 0.5rem;

    div{
        max-width: 22.4375rem;
    }

    img{
        width: 262px;
        height: 262px;
        border-radius: 8px;
    }
    h2{
        color:white;
        font-family: Poppins;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
    }
    p{
        color: #8D91A6;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
    }
`;

const Card = (props) => (
  <StyledCard>
    <img src={mountain} alt="a mountain" />
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </StyledCard>
);
export default Card;
