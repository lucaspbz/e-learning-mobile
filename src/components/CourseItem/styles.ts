import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 156px;
  height: 172px;
  background: #ffffff;
  border-radius: 16px;
  margin: 0 auto 18px 0;
  padding: 24px;
`;

export const ItemImg = styled.Image`
  flex: 1;
  margin-bottom: 24px;
`;

export const ItemName = styled.Text`
  font-family: 'Rubik_400Regular';
  font-size: 15px;
  line-height: 20px;
  color: #6c6c80;
  margin-bottom: 4px;
`;

export const ItemDescription = styled.Text`
  font-size: 10px;
  line-height: 12px;
  color: #c4c4d1;
`;
