import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const pegarToken = async () =>{
  const token = await AsyncStorage.getItem('token')
  return token

}
// assync function google (){
//  jogar axios.creater aqui
// }


export default axios.create({
  baseURL: 'http://192.168.1.3:8080/api',
  headers: {
    "Content-Type": "application/json",
    'Authorization': "Coffee eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImlhdCI6MTYyNjU1MDE5OCwiZXhwIjoxNjI2NjM2NTk4fQ.hakNbUD3rB4-tf5tsJZxiw0thwLsVwX8sFALk2LMKuYjdwzosB-lrDotlr9BsU4Qs5_uoEJ_amQAeoG8PhRzLQ"
  },
});