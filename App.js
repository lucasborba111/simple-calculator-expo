import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Button, TextInput, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  const handleAdicionar = () => {
    setResult(parseFloat(value1) + parseFloat(value2));
  };

  const handleSubtrair = () => {
    setResult(parseFloat(value1) - parseFloat(value2));
  };

  const handleMultiplicacao = () => {
    setResult(parseFloat(value1) * parseFloat(value2));
  };

  const handleDivisao = () => {
    setResult(parseFloat(value1) / parseFloat(value2));
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Calculadora simples</Text>
        <TextInput
          label="Value 1"
          value={value1}
          onChangeText={text => setValue1(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          label="Value 2"
          value={value2}
          onChangeText={text => setValue2(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleAdicionar} style={styles.button}>
            +
          </Button>
          <Button mode="contained" onPress={handleSubtrair} style={styles.button}>
            -
          </Button>
          <Button mode="contained" onPress={handleMultiplicacao} style={styles.button}>
            *
          </Button>
          <Button mode="contained" onPress={handleDivisao} style={styles.button}>
            /
          </Button>
        </View>
        {result !== '' && <Text style={styles.result}>Resultado: {result}</Text>}
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    margin: 4,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  }
});
