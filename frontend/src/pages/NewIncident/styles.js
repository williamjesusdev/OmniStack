import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${props => props.theme.background};
  box-shadow: 0 0 100px
    ${props =>
      props.theme.title === "main"
        ? "rgba(0, 0, 0, 0.2)"
        : "rgba(255, 255, 255, 0.2)"};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const Image = styled.img``;

export const Title = styled.h1`
  color: ${props => props.theme.foreground};
  margin: 64px 0 32px;
  font-size: 32px;
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.paragraph};
  font-size: 18px;
  line-height: 32px;
`;

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.second};
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  & > svg {
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const Input = styled.input`
  margin-top: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  margin-top: 8px;
  min-height: 140px;
  color: ${props => props.theme.title !== "main" && props.theme.background};
  border: 1px solid ${props => props.theme.support};
  border-left: 6px solid ${props => props.theme.primary};
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;

  & > input + input {
    margin-left: 8px;
  }
`;

export const Button = styled.button`
  width: 45%;
  height: 60px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.accent};
  border: 0;
  border-radius: 8px;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  line-height: 60px;
  font-size: 18px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }

  &:disabled {
    filter: brightness(50%);
  }

  &:first-child {
    background: transparent;
    color: ${props =>
      props.theme.title === "main" ? props.theme.primary : props.theme.accent};
    border: 1px solid
      ${props =>
        props.theme.title === "main"
          ? props.theme.primary
          : props.theme.support};
  }
`;

export const Toggle = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.support};
  background: transparent;
  margin-left: 16px;
  transition: all 0.2s;

  &:hover {
    border-color: #999;
  }
`;
export const Group = styled.div`
  width: 95%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    width: 100px;
    height: 40px;
    padding: ${props =>
      props.theme.title === "main" ? "5px 50px 5px 0" : "5px 0 5px 50px"};
    border-radius: 8px;
    background: transparent;
    border: 1px solid ${props => props.theme.second};
    cursor: pointer;
    box-shadow: 0 0 20px
      ${props =>
        props.theme.title === "main"
          ? "rgba(0, 0, 0, 0.3)"
          : "rgba(255, 255, 255, 0.2)"};
    transition: example 1s;
  }
`;
