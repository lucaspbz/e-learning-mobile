import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #f0edf5;
  flex: 1;
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

export const ContentList = styled(FlatList)``;
