import { StyleSheet } from 'react-native';


const background = {
  backgroundColor: '#f9f9f9'
};

const styles = StyleSheet.create({
    video:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FFF',
      marginBottom: 10,
    },
    videoOdd:{
      backgroundColor: '#FFF'
    },
    thumb:{
      flex: 1,
      height: 'auto',
    },
    main:{
      width: 220,
      height: 80,
      marginHorizontal: 5,   
    },
    info:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    detail:{
      fontSize: 10,
      color: '#999',
    },
    title: {
        fontSize: 24,
    }
  });
  
export  { background, styles }