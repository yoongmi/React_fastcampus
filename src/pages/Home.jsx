import styled, { createGlobalStyle } from "styled-components";
import StyledButton from "../components/StyledButton";

const PrimaryStyledButton = styled(StyledButton)`
  background-color: palevioletred;
  color: white;
`;

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => {
  <button
    className={props.className}
    children={`MyButton ${props.children}`}
  />;
};

const StyledMyButton = styled(MyButton)`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${(props) => props.color || "palevioletred"};
  padding: 10px 20px;
  font-size: 20px;
  margin: 0 5px;
`;

const GlobalStyle = createGlobalStyle`button{color:slateblue; }`;

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      Home 페이지
      <p>
        <StyledButton>버튼</StyledButton>
        <StyledButton primary>버튼</StyledButton>
        <PrimaryStyledButton>버튼</PrimaryStyledButton>
        <StyledButton as="a" href="/">
          버튼
        </StyledButton>
        <StyledButton as={UppercaseButton}>button</StyledButton>
        <StyledMyButton>button</StyledMyButton>
        <StyledMyButton color="green">button</StyledMyButton>
      </p>
    </div>
  );
}
