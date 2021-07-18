import styled from 'styled-components/native';



export const Wrapper = styled.SafeAreaView`
    background: #EEF6F7;
    flex: 1;
`;

export const Container = styled.ScrollView`
width:100%;
`;

export const Header = styled.View`
    height: 90px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 3px;
`;

export const BalanceContainer = styled.View``;

export const Balance = styled.Image`
height: 100px;
width: 80px; 
`;

export const Formulario = styled.TextInput`
borderRadius: 10,
color: #c3b087;
border-color: #c3b087;
height: 40;
margin: 12;
borderWidth: 1;
`;