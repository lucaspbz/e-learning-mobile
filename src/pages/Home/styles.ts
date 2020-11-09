import styled from 'styled-components/native';
import Constants from 'expo-constants';

import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: #6548a3;
`;

export const Header = styled.View`
  padding-top: ${Constants.statusBarHeight}px;
  padding-bottom: 103px;
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

export const Content = styled.View`
  background: #f0edf5;
  flex: 1;
  margin-top: -72px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

export const ContentHeader = styled.View`
  height: 72px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0 24px;
`;

export const Category = styled.Text`
  font-family: 'Rubik_400Regular';
  font-size: 20px;
  line-height: 24px;
`;

export const CoursesQuantity = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #a0a0b2;
`;

export const ContentItems = styled.View`
  width: 156px;
  height: 172px;
  background: #ffffff;
  border-radius: 16px;
  margin: 0 16px 18px 0px;
`;

export const ContentList = styled(FlatList)``;
