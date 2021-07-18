import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #EEF6F7;
    flex: 1;
`;

export const Header = styled.View`
    height: 90px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 3px;
`;

export const BalanceContainer = styled.TouchableOpacity``;

export const Balance = styled.Image`
    height: 100px;
    width: 100px; 
    `;
    
export const Img = styled.Image`
    margin-top: 0px;
    height: 300px;
    width:100%;
    resize-mode= cover;
    align-self:center;
    `;
    
export const Detalhes = styled.Text`
    flex: 2;
    borderColor: #c3b087;
    height: 25px;
    margin: 20px;
    margin-top: 25px;
    margin-bottom: 5px;
    borderBottomWidth: 1px;
    
`;    


export const Footer = styled.View`
    margin: 20px;
    `;