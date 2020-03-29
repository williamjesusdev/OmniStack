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

export const HeaderText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 15px;
`;

export const Bold = styled(HeaderText)`
  font-weight: bold;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.foreground};
  font-size: 30px;
  font-weight: bold;
  margin: 48px 0 16px 0;
`;

export const Description = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  line-height: 24px;
`;

export const IncidentList = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.card};
  margin-bottom: 16px;
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

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 15px;
  font-weight: bold;
`;
