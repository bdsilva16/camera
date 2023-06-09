import React, { useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  useEffect(() => {
    getCameraPermission();
  }, []);

  const getCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('A permissão para acessar a câmera não foi concedida.');
    }
  };

  const handleCameraButtonPress = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      saveToCameraRoll(result);
    }
  };

  const saveToCameraRoll = async (image: ImagePicker.ImagePickerResult) => {
    try {
      if (image) {
        await MediaLibrary.saveToLibraryAsync;
        alert('Imagem capturada e salva na galeria com sucesso!');
      } else {
        console.log('Nenhuma imagem selecionada.');
      }
    } catch (error) {
      console.log('Erro ao salvar na galeria:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <MaterialIcons name="enhance-photo-translate" size={24} color="black" />
        <Button title="Click-me!!!" onPress={handleCameraButtonPress}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop:"100%",
    
    
    width:"100%",
    flexDirection:'row'
    
  },
  
});