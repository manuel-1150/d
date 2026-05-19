import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import Button from '../components/Button';
import Card from '../components/Card';

export default function HomeScreen({ navigation }) {
  // Simulated data
  const recentRegistrations = [
    { id: '1', serial: 'W12345', type: 'Motor Eléctrico W22', date: '2026-04-10' },
    { id: '2', serial: 'W67890', type: 'Variador de Frecuencia', date: '2026-04-12' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        {/* Placeholder for WEG Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>WEG</Text>
        </View>
        <Text style={styles.title}>Trazabilidad de Equipos</Text>
        <Text style={styles.description}>
          Bienvenido al sistema de trazabilidad de equipos de WEG. Aquí puedes registrar
          y dar seguimiento a la información de tus equipos instalados para asegurar su
          garantía y mantenimiento.
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <Button
          title="Registrar Nuevo Equipo"
          onPress={() => navigation.navigate('Registration')}
        />
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Resumen</Text>
        <View style={styles.statsRow}>
          <Card style={styles.statCard}>
            <Ionicons name="hardware-chip-outline" size={32} color={colors.primary} />
            <Text style={styles.statValue}>15</Text>
            <Text style={styles.statLabel}>Equipos Totales</Text>
          </Card>
          <Card style={styles.statCard}>
            <Ionicons name="calendar-outline" size={32} color={colors.primary} />
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Este Mes</Text>
          </Card>
        </View>
      </View>

      <View style={styles.recentContainer}>
        <Text style={styles.sectionTitle}>Registros Recientes</Text>
        {recentRegistrations.map((item) => (
          <Card key={item.id} style={styles.recentCard}>
            <View style={styles.recentIcon}>
              <Ionicons name="checkmark-circle" size={24} color={colors.success} />
            </View>
            <View style={styles.recentInfo}>
              <Text style={styles.recentSerial}>SN: {item.serial}</Text>
              <Text style={styles.recentType}>{item.type}</Text>
              <Text style={styles.recentDate}>Registrado el {item.date}</Text>
            </View>
          </Card>
        ))}
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
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  logoContainer: {
    width: 80,
    height: 80,
    backgroundColor: colors.primary,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  actionsContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  statsContainer: {
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    paddingVertical: 20,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  recentContainer: {
    marginBottom: 20,
  },
  recentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  recentIcon: {
    marginRight: 12,
  },
  recentInfo: {
    flex: 1,
  },
  recentSerial: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  recentType: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  recentDate: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
});
