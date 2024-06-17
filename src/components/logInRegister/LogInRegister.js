import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import { styles } from "./style";
import MovieContext from '../../services/AuthContext';
import apiUser from '../../services/LoginRegister/loginRegisterService';

export default function LogInRegister() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  const [esLogin, setEsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const { height, width } = useWindowDimensions();
  const navigation = useNavigation();
  const { handleAuthData } = useContext(MovieContext);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleSubmit = async () => {
    if (!userName || !password) {
      setMessage("completar campos");
      return;
    }
    try {
      if (esLogin) {
        const response = await apiUser.loginUser({ userName, password });
        if (response.success) {
			console.log("RESPONSE DE LOGIN: " + response)
			handleAuthData(response);
			
          navigation.navigate('homeScreen');
        } else {
          setMessage(response.message);
        }
      } else {
        const response = await apiUser.createUser({ userName, password, mail });
        if (response.success) {
          setMessage('Usuario creado con éxito');
          setEsLogin(true);
        } else {
          setMessage(response.message);
        }
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>S<Text style={styles.t}>T</Text>REAM<Text style={styles.plus}>+</Text></Text>
      <View style={styles.form}>
        <Text style={styles.titlePage}>{esLogin ? "Login" : 'Registrarse'}</Text>
        <View style={styles.formField}>
          <Text style={styles.label}>Nombre de usuario:</Text>
          <TextInput
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
            placeholder='Ingrese su usuario...'
          />
        </View>
        {!esLogin && (
          <View style={styles.formField}>
            <Text style={styles.label}>Correo electrónico:</Text>
            <TextInput
              style={styles.input}
              value={mail}
              onChangeText={setMail}
              placeholder='Ingrese su correo...'
            />
          </View>
        )}
        <View style={styles.formField}>
          <Text style={styles.label}>Contraseña:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder='Ingrese su contraseña...'
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.noAccount}>
        {esLogin ? "¿No tienes una cuenta? " : "¿Ya tienes una cuenta? "}
        <Text style={styles.register} onPress={() => setEsLogin(!esLogin)}>
          {esLogin ? 'Regístrate' : 'LogIn'}
        </Text>
      </Text>
      {!isKeyboardVisible && (
        <>
          <Svg style={styles.wave} height="150" width={width} viewBox={`0 0 ${width} 150`}>
            <Path d={`M0 150 L0 0 C100 75 ${width / 1.5} 75 ${width} 75 L${width} 150 Z`} fill="#F7F0F0" />
          </Svg>
          <Text style={styles.tyc}>Términos & Condiciones</Text>
        </>
      )}
    </View>
  );
}
