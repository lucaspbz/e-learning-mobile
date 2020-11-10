import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  padding-bottom: 103px;
  background-color: #6548a3;
  margin-bottom: -72px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 0;
`;

export const Logo = styled.Image`
  margin: 0 auto 0 24px;
`;

export const LogoutButton = styled.Image`
  margin-right: 27px;
`;

export const SearchContainer = styled.View`
  background: #ffffff;
  border-radius: 100px;
  padding: 19px 0 19px 0;
  margin: 24px 20px auto 21px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContainerIcon = styled(AntDesign)`
  color: #c4c4d1;
  margin-left: 24px;
`;

export const SearchContainerInput = styled.TextInput`
  margin-left: 20px;
  margin-right: auto;
`;
