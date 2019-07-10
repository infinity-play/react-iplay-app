import { StyleSheet } from 'react-native';


const background = {
  backgroundColor: '#f9f9f9'
};

const flex = {
  flex: 1
};

const backgroundBlack = {
  backgroundColor: '#000'
};

const fullWidth = {
  width: '100%',
};

const fullHeight = {
  height: '100%'
};
const spaceBetween = {
  justifyContent: 'space-between',
};

const center = {
  justifyContent: 'center',
};

const alignCenter = {
  alignItems: 'center',
};

const textContainer = {
  width: 220,
  height: 80,
  marginHorizontal: 5,   
};

const styleVideo = StyleSheet.create({
  item:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 5,
  },
  itemOdd:{
    backgroundColor: '#FFF'
  },
  thumb:{
    flex: 1,
    height: 'auto',
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
    fontSize: 18,
  },
  description: {
    fontSize: 12,
  },
  footer:{
    flex: 0.16,
    paddingHorizontal: 15,
    backgroundColor: '#383838',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

const styleLogin = StyleSheet.create({
  login:{
    flex: 1,
    marginTop: '10%',
    marginBottom: '30%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }, 
});
  
export  { 
  backgroundBlack,
  background, 
  flex,
  fullWidth,
  fullHeight,
  spaceBetween,
  alignCenter,
  center,
  textContainer,
  styleVideo,
  styleLogin,
}