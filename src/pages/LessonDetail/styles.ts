import styled, { css } from 'styled-components/native';

interface ICompletedProp {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const VideoContainer = styled.View``;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 24px;
  margin-bottom: 24px;
`;

export const LessonName = styled.Text`
  font-family: 'Rubik_400Regular';
  font-size: 30px;
  line-height: 36px;
  color: #3d3d4c;
  margin-bottom: 16px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const LessonNumber = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #a0a0b2;
  margin-right: 16px;
`;

export const LessonDuration = styled.Text`
  margin-left: 8px;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #a0a0b2;
`;

export const LessonDescription = styled.Text`
  font-size: 15px;
  line-height: 25px;
  color: #6c6c80;
`;

export const Footer = styled.View`
  margin: auto 0 24px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const PreviousLessonButton = styled.TouchableOpacity<ICompletedProp>`
  height: 56px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  flex-direction: row;

  ${props =>
    props.active &&
    css`
      background: #ff6680;
    `}
`;

export const PreviousLessonButtonText = styled.Text<ICompletedProp>`
  font-size: 15px;
  line-height: 18px;
  color: #ff6680;

  margin-left: 8px;

  ${props =>
    props.active &&
    css`
      color: #fff;
    `}
`;

export const NextLessonButton = styled.TouchableOpacity<ICompletedProp>`
  height: 56px;
  background: #fff;
  border-radius: 40px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 8px 16px;

  ${props =>
    props.active &&
    css`
      background: #ff6680;
    `}
`;

export const NextLessonButtonText = styled.Text<ICompletedProp>`
  font-size: 15px;
  line-height: 18px;
  color: #ff6680;
  margin-right: 8px;

  ${props =>
    props.active &&
    css`
      color: #fff;
    `}
`;
