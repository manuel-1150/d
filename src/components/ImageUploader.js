import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function ImageUploader({ onUpload }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fotografía de la Placa de Trazabilidad</Text>
      <TouchableOpacity style={styles.uploadArea} onPress={onUpload}>
        <Ionicons name="camera-outline" size={40} color={colors.primary} />
        <Text style={styles.uploadText}>Tomar foto o subir imagen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 6,
    fontWeight: '600',
  },
  uploadArea: {
    borderWidth: 2,
    borderColor: colors.primaryLight,
    borderStyle: 'dashed',
    borderRadius: 8,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  uploadText: {
    marginTop: 8,
    color: colors.primary,
    fontWeight: '500',
  },
});
