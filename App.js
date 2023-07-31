
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

 

export default function App() {
  // Mapeamento de teclas
  const buttons = ['LIMPAR', 'DEL', '%', '/', '+', 7,8 , 9 , '-', 6, 5, 4, '.',  3, 2, 1,  0, , "x", '+/-', '=']

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")


  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    // Faz ação referente tecla pressionada
    switch(operator){
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '-': 
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
      case 'x':
        setCurrentNumber((fistNumber +  lastNumber).toString())
        return
      case '/': 
        setCurrentNumber((fistNumber - lastNumber).toString())
        return

       case '+/-':
  setCurrentNumber((Number(fistNumber) + Number(lastNumber) * -1).toString());
  return;

    }
  }

  function handleInput(buttonPressed){
    console.log(buttonPressed) // Mostra no Console a tecla pressionada
    if(buttonPressed === '+' | buttonPressed === "-"  | buttonPressed === "x" | buttonPressed === "/" ){
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 2)))
        return
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber("") 
        setCurrentNumber("") 
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculator()
        return
      case '+/-':
        return
    }

    setCurrentNumber(currentNumber + buttonPressed)
  }


  return (
    <View style={styles.container}>

      {/* Area onde o resultado é exibido */}
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
        

      {/* Area onde os botões são exibidos*/}
      <View style={styles.buttons}>

        {buttons.map((button) => 
          button === '=' ? // Mapeamento do botão =
        <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#3dd0e3'}]}>
          <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
        </TouchableOpacity>
          : // Mapeamento dos outros botões
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.button}>
            <Text style={[styles.textButton, {color: typeof(button) === 'number' ? 'black': '#0093a6'}]}>{button}</Text>
          </TouchableOpacity>
        )}
        
      </View>
      </View>
      
    
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'justify', 
    backgroundColor: "black",

   
    
    
  },
  results: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#191970',
    
    
  },
  resultText: {
    backgroundColor: '#191970',
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
    padding: 20,
    textAlign: "right",

  
  },
  historyText:{
    color: "white",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
    

  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    color: "white",

    
  },
  button: {
    backgroundColor: '#4b0082',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120, 
    minHeight: 141,

    
  },
  textButton: {
    color: "#ff8c00",
    fontSize: 20,

    
  } 
});