import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const Form = styled.form`
  margin-top: 100px;
`;

export const Title = styled.h1`
  color: ${props => props.theme.foreground};
  font-size: 32px;
  margin-bottom: 32px;
`;

export const Input = styled.input``;

export const Button = styled.button`
  width: 100%;
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
`;

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.second};
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  margin-left: 20px;
  transition: opacity 0.2s;

  & > svg {
    margin-right: 15px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const Group = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;

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

export const Image = styled.img``;
