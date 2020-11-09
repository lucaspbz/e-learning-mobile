import styled from 'styled-components/native';
import CustomButton from '../../components/Button';

export const Container = styled.View`
  background-color: #6548a3;
  height: 100%;
  justify-content: space-around;
`;

export const BackgroundImg = styled.Image`
  position: absolute;
  width: 100%;
`;

export const PersonImg = styled.Image`
  margin: auto auto 64px 36px;
`;

export const Content = styled.View`
  width: 60%;
  margin-left: 40px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  color: #ff6680;
  font-family: 'Rubik_400Regular';
  font-size: 36px;
  line-height: 43px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  line-height: 25px;
  color: #edebf5;
  margin-top: 16px;
`;

export const Button = styled(CustomButton)`
  margin: 0 36px 40px 36px;
`;
