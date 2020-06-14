import React from 'react';
import { StyleSheet,Text, View, SafeAreaView,Dimensions, TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

const currencyPerRupee={
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLER:0.2,
  CANDOLLER:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.0000041,
}
export default class App extends React.Component { 
constructor(props){
  super(props);
  this.state={
    inputValue:"",
    resultValue:"0.0",
  }
}
buttonPressed=(currency)=>{
  if(this.state.inputValue==""){
    Alert.alert("Enter some value");
  }
     let result =parseFloat(this.state.inputValue)*currencyPerRupee[currency];
     this.setState({resultValue:result.toFixed(2)})

}

render(){
   return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <View style={styles.resultcontainer}>
              <Text style={styles.resultvalue} >
                  {this.state.resultValue}
              </Text> 
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
            style={styles.input}
            selectionColor="#FFF"
            keyboardType="numeric"
            placeholder="Enter value"
            value={this.state.inputValue}
            onChangeText={inputValue=>this.setState({
                inputValue
            })}
            />
          </View>
           <View style={styles.conterterbuttoncontainer}>
              <TouchableOpacity 
               onPress={()=>this.buttonPressed("DOLLAR")}
               style={styles.converterbutton}>
                   <Text style={styles.converterbuttontext}>
                   $
                   </Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={()=>this.buttonPressed("EURO")}
              style={styles.converterbutton}>
                  <Text style={styles.converterbuttontext}>
                  EURO
                  </Text>
             </TouchableOpacity>

             <TouchableOpacity 
              onPress={()=>this.buttonPressed("POUND")}
              style={styles.converterbutton}>
                  <Text style={styles.converterbuttontext}>
                  POUND
                  </Text>
             </TouchableOpacity>
             <TouchableOpacity 
              onPress={()=>this.buttonPressed("RUBEL")}
              style={styles.converterbutton}>
                  <Text style={styles.converterbuttontext}>
                  RUBEL
                  </Text>
             </TouchableOpacity>
             <TouchableOpacity 
              onPress={()=>this.buttonPressed("AUSDOLLER")}
              style={styles.converterbutton}>
                  <Text style={styles.converterbuttontext}>
                  AUSDOLLER
                  </Text>
             </TouchableOpacity>
             <TouchableOpacity 
              onPress={()=>this.buttonPressed("CANDOLLER")}
              style={styles.converterbutton}>
                  <Text style={styles.converterbuttontext}>
                  CANDOLLER
                  </Text>
             </TouchableOpacity>
             <TouchableOpacity 
              onPress={()=>this.buttonPressed("YEN")}
              style={styles.converterbutton}>
                  <Text style={styles.converterbuttontext}>
                  YEN
                  </Text>
             </TouchableOpacity>
             <TouchableOpacity 
              onPress={()=>this.buttonPressed("DINAR")}
              style={styles.converterbutton}>
                  <Text style={styles.converterbuttontext}>
                  DINAR
                  </Text>
             </TouchableOpacity>
             <TouchableOpacity 
              onPress={()=>this.buttonPressed("BITCOIN")}
              style={styles.converterbutton}>
                  <Text style={styles.converterbuttontext}>
                  BITCOIN
                  </Text>
             </TouchableOpacity>
             

               
           </View>
        </View>
      </SafeAreaView>
     // </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop:20,
     backgroundColor: '#535C63',
     alignItems: 'center',
     justifyContent: 'center',
   },
   resultcontainer:{
      height:70,
      width: Dimensions.get('window').width,
      marginTop:80,
      justifyContent:"center",
      borderColor:"#c1c1c1",
      backgroundColor:"#0A79DE",
      alignItems:"center",
      borderRadius:10,
      borderWidth:2,
   },
   resultvalue:{
      fontSize:40,
      fontWeight:"bold",
      color:"#FFF"
   },
  screenview:{
    flex:1,
  },
  inputcontainer:{
     height:70,
     marginTop:10,
     justifyContent:"center",
     alignItems:"center",
     borderColor:"#c1c1c1",
     borderWidth:2,
     backgroundColor:"#0A79DE"
  },
  input:{
     color:"#FFF",
     fontSize:30,
  },
  conterterbuttoncontainer:{
      flexDirection:"row",
      flexWrap:"wrap",
      marginTop:20,
      borderColor:"#c1c1c1",
      borderWidth:3,
  },
  converterbutton:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#0A79DF",
    height:100,
    borderColor:"#c1c1c1",
    borderWidth:2, 
    width:"33.3%"
  },
  converterbuttontext:{
     color:"#FFF",
     fontSize:20,
     fontWeight:"bold",

     
     
  }

});
