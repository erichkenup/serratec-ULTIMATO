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
    'Authorization': "Coffee eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImlhdCI6MTYyNjY0NDM3MiwiZXhwIjoxNjI2NzMwNzcyfQ.h88bqb1aHctRoaxf7aEdn1Iz3W5Qwu_m65UMmnFZ-EoHkwfcWZ8C-WTNmLmXmG9_xAVvG1VuWefFQvLVBnEn-A"
  },
});