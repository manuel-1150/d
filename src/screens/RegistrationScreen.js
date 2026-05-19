import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card';

export default function RegistrationScreen({ navigation }) {
  const [formData, setFormData] = useState({
    serial: '',
    type: '',
    date: '',
    client: '',
    location: '',
    observations: '',
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    // Basic validation
    if (!formData.serial || !formData.type) {
      Alert.alert('Faltan datos', 'Por favor ingresa al menos el número de serie y tipo de equipo.');
      return;
    }

    Alert.alert(
      'Registro Exitoso',
      'El equipo ha sido registrado correctamente.',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  const handlePhotoUpload = () => {
    Alert.alert(
      'Subir Foto',
      'Aquí se abriría la cámara o galería para subir la foto de la placa.'
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
      <View style={styles.photoUploadContainer}>
        <Text style={styles.sectionTitle}>Placa de Trazabilidad</Text>
        <TouchableOpacity style={styles.photoBox} onPress={handlePhotoUpload}>
          <Ionicons name="camera-outline" size={40} color={colors.primary} />
          <Text style={styles.photoText}>Tomar foto de la placa</Text>
          <Text style={styles.photoSubtext}>(Opcional, los datos se pueden auto-completar)</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Datos del Equipo</Text>
        
        <Input
          label="Número de Serie *"
          placeholder="Ej: W123456789"
          value={formData.serial}
          onChangeText={(text) => handleChange('serial', text)}
        />
        
        <Input
          label="Tipo de Equipo *"
          placeholder="Ej: Motor Eléctrico W22"
          value={formData.type}
          onChangeText={(text) => handleChange('type', text)}
        />
        
        <Input
          label="Fecha de Instalación"
          placeholder="DD/MM/AAAA"
          value={formData.date}
          onChangeText={(text) => handleChange('date', text)}
        />
        
        <Input
          label="Cliente"
          placeholder="Nombre de la empresa"
          value={formData.client}
          onChangeText={(text) => handleChange('client', text)}
        />
        
        <Input
          label="Ubicación"
          placeholder="Planta, sector, etc."
          value={formData.location}
          onChangeText={(text) => handleChange('location', text)}
        />
        
        <Input
          label="Observaciones"
          placeholder="Detalles adicionales..."
          value={formData.observations}
          onChangeText={(text) => handleChange('observations', text)}
          multiline
          numberOfLines={3}
          style={{ height: 100 }}
        />
      </View>

      <Text style={styles.sectionTitle}>Vista Previa</Text>
      <Card style={styles.previewCard}>
        <View style={styles.previewHeader}>
          <Ionicons name="information-circle" size={20} color={colors.primary} />
          <Text style={styles.previewTitle}>Resumen de Registro</Text>
        </View>
        <View style={styles.previewRow}>
          <Text style={styles.previewLabel}>S/N:</Text>
          <Text style={styles.previewValue}>{formData.serial || '-'}</Text>
        </View>
        <View style={styles.previewRow}>
          <Text style={styles.previewLabel}>Tipo:</Text>
          <Text style={styles.previewValue}>{formData.type || '-'}</Text>
        </View>
        <View style={styles.previewRow}>
          <Text style={styles.previewLabel}>Cliente:</Text>
          <Text style={styles.previewValue}>{formData.client || '-'}</Text>
        </View>
      </Card>

      <View style={styles.actionsContainer}>
        <Button title="Registrar Equipo" onPress={handleRegister} />
        <Button 
          title="Cancelar" 
          variant="outline" 
          onPress={() => navigation.goBack()} 
          style={styles.cancelButton}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  photoUploadContainer: {
    marginBottom: 24,
  },
  photoBox: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
    marginTop: 8,
  },
  photoSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 24,
  },
  previewCard: {
    marginBottom: 30,
    backgroundColor: '#F0F8FF', // Very light blue tint
    borderColor: '#CCE5FF',
    borderWidth: 1,
  },
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CCE5FF',
    paddingBottom: 8,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginLeft: 8,
  },
  previewRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  previewLabel: {
    width: 60,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  previewValue: {
    flex: 1,
    color: colors.text,
  },
  actionsContainer: {
    marginTop: 10,
  },
  cancelButton: {
    marginTop: 12,
  }
});
