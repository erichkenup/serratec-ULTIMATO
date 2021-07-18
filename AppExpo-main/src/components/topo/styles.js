import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  
  height: 200px;
`;

export const Option = styled.View`
  width: 350px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image`
margin-top: 100px;
height: 300px;
width:100%;
`;

