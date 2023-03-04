import React from 'react';
import { Modal, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export const showLoading = () => (
  <Modal transparent animationType="none">
    <View
      style={{
        flex: 1,
        opacity: 0.7,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color="#666" />
    </View>
  </Modal>
);
