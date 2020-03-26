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
  font-size: 32px;
  margin-bottom: 32px;
`;

export const Input = styled.input``;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  color: #fff;
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
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  & > svg {
    margin-right: 8px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const Image = styled.img``;
