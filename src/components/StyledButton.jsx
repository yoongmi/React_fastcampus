import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 10px 20px;
  font-size: 20px;
  margin: 0 5px;

  ${(props) => {
    return (
      props.primary &&
      css`
        background-color: palevioletred;
        color: white;
      `
    );
  }}
`;

export default StyledButton;
