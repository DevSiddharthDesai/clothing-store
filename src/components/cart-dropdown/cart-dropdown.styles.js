import styled from "styled-components";
import {BaseButton, GoogleSignInButton, InvertedButton} from '../button/button-style'
export const CartContainer = styled.div`

  display: ${props => (props.toggled ? 'flex':'none')};
  position: absolute;
  width: 300px;
  height: 340px;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},${GoogleSignInButton},${InvertedButton}{
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.div`

  font-size: 18px;
  margin: 50px auto;

`;

export const CartItems = styled.div`

  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

// export const Button = styled.button`
//   margin-top: auto;
// `;