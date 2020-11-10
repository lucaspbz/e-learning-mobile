import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  padding: 0 24px 58px;
  padding-top: ${Constants.statusBarHeight + 30}px;
  background-color: #6548a3;
  margin-bottom: -32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;
