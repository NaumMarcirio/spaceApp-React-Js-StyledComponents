import { styled } from "styled-components";

const BotaoIcone = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    
    transition: transform 0.1s ease-in-out;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

export default BotaoIcone;
