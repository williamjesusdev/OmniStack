import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-horizontal: 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  background-color: ${props => props.theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.Image``;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.card};
  margin: 48px 0 16px 0;
`;

export const Property = styled.Text`
  color: ${props => props.theme.colors.support};
  font-size: 14px;
  font-weight: bold;
`;

export const Value = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 15px;
  margin: 8px 0 16px 0;
`;

export const Contact = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.card};
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.foreground};
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
`;

export const Description = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 15px;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  align-items: center;
  justify-content: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
