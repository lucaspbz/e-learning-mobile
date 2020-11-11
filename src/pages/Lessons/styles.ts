import { FlatList } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface ICompletedProps {
  completed: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #f0edf5;
`;

export const Content = styled.View`
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

export const LessonContainer = styled.View`
  background-color: #fff;
  margin-bottom: 16px;
  width: 85%;
  margin: 0 24px 16px auto;
  min-height: 100px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
`;

export const LessonName = styled.Text`
  margin: 16px auto 16px 0;
  max-width: 186px;
  font-family: 'Rubik_400Regular';
  font-size: 15px;
  line-height: 20px;
  color: #6c6c80;
`;

export const LessonFooter = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
`;

export const LessonNumber = styled.Text`
  font-size: 10px;
  line-height: 12px;
  color: #c4c4d1;
`;

export const LessonDuration = styled.Text`
  font-size: 10px;
  line-height: 12px;
  color: #c4c4d1;
  margin-left: 5px;
`;

export const LessonDurationContainer = styled.View`
  margin-left: 16px;
  flex-direction: row;
  align-items: center;
`;

export const CompletedBadge = styled.View`
  background-color: #61c5bd;
  border-radius: 12px;
  padding: 4px 8px;
  margin: 0 16px 0 auto;
`;

export const CompletedBadgeText = styled.Text`
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  color: #ffffff;
`;

export const PlayIcon = styled.TouchableOpacity<ICompletedProps>`
  background-color: #ff6680;
  border-radius: 16px;
  width: 68px;
  height: 68px;
  align-items: center;
  justify-content: center;
  margin-left: -34px;

  ${props =>
    props.completed &&
    css`
      background-color: #61c5bd;
    `}
`;

export const LessonContent = styled.View`
  flex: 1;
  margin-left: 24px;
`;
