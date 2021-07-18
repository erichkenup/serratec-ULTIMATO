import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #EEF6F7;
    flex: 1;
`;

export const Container = styled.ScrollView`
    width:100%;
    `;

export const ContainerBanner = styled.View`
    padding-right: 20px;
    padding-left: 14px;
    width: 45%;
    
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

export const GridFlex = styled.View`
    flex: 20;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    `;

export const Balance = styled.Image`
    height: 100px;
    width: 80px; 
    `;

export const BalanceName = styled.Text`
    color: #c3b087;
    font-size: 16px;
    margin-left: 1px
`;

export const Card = styled.View`
    background: #c3b087;
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 2px;
    width: 105%;
    height: 250px;
`;

export const CardHeader = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const CardBody = styled.View`
    margin-top: 5px;
`;

export const CardFooter = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Value = styled.Text`
    color: #000;
    font-size: 14px;
    font-weight: bold;
    margin-left: 15px;
    margin-top: 1px;

`;

export const Descricao = styled.TouchableOpacity`
`;

export const Details = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 130px;
    height: 173px;
    margin: 5px;
    margin-left: 10px;
    border-radius: 4px;
  `;

export const Divider = styled.View`
    width: 2px;
    height: 13px;
    background: rgba(255, 255, 255, 0.4);
    margin: 0 10px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 12px;
`;