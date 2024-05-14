import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Button, TextInput, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  const handleAdicionar = () => {
    if (value1 === '' || value2 === '') {
      setResult('Por favor, informe ambos os valores.');
    } else {
      setResult(parseFloat(value1) + parseFloat(value2));
    }
  };

  const handleSubtrair = () => {
    if (value1 === '' || value2 === '') {
      setResult('Por favor, informe ambos os valores.');
    } else {
      setResult(parseFloat(value1) - parseFloat(value2));
    }
  };

  const handleMultiplicacao = () => {
    if (value1 === '' || value2 === '') {
      setResult('Por favor, informe ambos os valores.');
    } else {
      setResult(parseFloat(value1) * parseFloat(value2));
    }
  };

  const handleDivisao = () => {
    if (value1 === '' || value2 === '') {
      setResult('Por favor, informe ambos os valores.');
    } else {
      setResult(parseFloat(value1) / parseFloat(value2));
    }
  };

  const handleChangeValue1 = text => {
    setValue1(text.replace(/[^0-9.]/g, ''));
  };

  const handleChangeValue2 = text => {
    setValue2(text.replace(/[^0-9.]/g, ''));
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Calculadora simples</Text>
        <TextInput
          label="Value 1"
          value={value1}
          onChangeText={handleChangeValue1}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          label="Value 2"
          value={value2}
          onChangeText={handleChangeValue2}
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
