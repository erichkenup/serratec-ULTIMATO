import  React,{useRef} from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import ModalizeAdicionar from '../ModalizeAdicionar';




const MyComponent = () => {

  const modalizeRef = useRef(null)

  return(
    <>
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() =>  modalizeRef.current?.open() 
     } />
  <ModalizeAdicionar modalizeRef={modalizeRef}/>
  </>
  )
     
  };

const styles = StyleSheet.create({
  fab: {

    backgroundColor:"#e7b2a4",
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
},
})

export default MyComponent;
