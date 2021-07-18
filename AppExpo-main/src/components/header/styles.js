import styled from 'styled-components/native';

export const Header = styled.View`
    height: 90px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 3px;
`;

export const BalanceContainer = styled.TouchableOpacity`
    flex: 1;
    alignItems: center;
    `;

export const Balance = styled.Image`
    height: 100px;
    width: 100px; 
    `;
    
export const Img = styled.Image`
    margin-top: 0px;
    height: 300px;
    width:100%;
    `;

export const Perfil = styled.TouchableOpacity`
    flex: 1;
    margin-top: 20px;
`;    

export const Logout = styled.TouchableOpacity`
    flex: 1; 
    alignItems: flex-end;
`;
    
export const BalanceName = styled.Text`
    color: #c3b087;
    font-size: 16px;
    margin-left: 1px
`;