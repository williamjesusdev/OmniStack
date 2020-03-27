import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 20px;
  margin-left: 24px;
  color: ${props => props.theme.foreground};
`;

export const Image = styled.img`
  height: 64px;
`;

export const Anchor = styled(Link)`
  width: 260px;
  margin: 0 0 0 auto;
  color: ${props => props.theme.accent};
  background: ${props => props.theme.primary};
  border: 0;
  border-radius: 8px;
  font-weight: 700;
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

export const Button = styled.button`
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

export const H1 = styled.h1`
  margin: 80px 0 24px 0;
  color: ${props => props.theme.foreground};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const Item = styled.li`
  background: ${props =>
    props.theme.title === "main" ? props.theme.accent : props.theme.card};
  border-radius: 8px;
  padding: 24px;
  position: relative;
`;

export const Icon = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: 0;
  background: transparent;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Strong = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: ${props => props.theme.second};
`;

export const Paragraph = styled.p`
  color: ${props => props.theme.paragraph};
  line-height: 21px;
  font-size: 16px;

  & + strong {
    margin-top: 32px;
  }
`;
