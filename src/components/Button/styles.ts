import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #ff6680;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  padding-top: 19px;
  padding-bottom: 19px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;
