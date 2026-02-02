import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { cities } from './src/data/cities';

export default function App() {
  const renderHeader = () => (
    <View style={styles.headerRow}>
      <Text style={[styles.headerText, styles.photoColumn]}>Photo</Text>
      <Text style={[styles.headerText, styles.cityColumn]}>City</Text>
      <Text style={[styles.headerText, styles.countryColumn]}>Country</Text>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
      <View style={styles.photoColumn}>
        <Image source={{ uri: item.imageUrl }} style={styles.cityImage} />
      </View>
      <Text style={[styles.cityName, styles.cityColumn]}>{item.name}</Text>
      <Text style={[styles.countryName, styles.countryColumn]}>{item.country}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E88E5" />

      <View style={styles.header}>
        <Text style={styles.title}>Destinations</Text>
      </View>

      <View style={styles.tableContainer}>
        <FlatList
          data={cities}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={renderHeader}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#1E88E5',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tableContainer: {
    flex: 1,
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E88E5',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  evenRow: {
    backgroundColor: '#FFFFFF',
  },
  oddRow: {
    backgroundColor: '#FAFAFA',
  },
  photoColumn: {
    width: 80,
  },
  cityColumn: {
    flex: 1,
    marginLeft: 16,
  },
  countryColumn: {
    width: 100,
    textAlign: 'right',
  },
  cityImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  cityName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  countryName: {
    fontSize: 14,
    color: '#757575',
  },
});
