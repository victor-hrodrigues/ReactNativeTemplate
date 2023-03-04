import alertImg from '@assets/alert.png';
import secureImg from '@assets/secure.png';
import { AppButton } from '@components/AppButton';
import { AppText } from '@components/AppText';
import React from 'react';
import { Image } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import { ModalContent } from './styles';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  variant: 'success' | 'alert';
  title: string;
  children: React.ReactElement;
}

export const AppModal = ({
  visible,
  onDismiss,
  variant,
  title,
  children,
}: Props): JSX.Element => {
  const variantTypes = {
    success: {
      image: secureImg,
      textColor: 'green500',
    },
    alert: {
      image: alertImg,
      textColor: 'red300',
    },
  };

  return (
    <Portal>
      <Modal
        contentContainerStyle={{
          marginHorizontal: 24,
          backgroundColor: '#fff',
          alignItems: 'center',
          borderRadius: 24,
          padding: 24,
        }}
        visible={visible}
        onDismiss={onDismiss}>
        <Image
          style={{ width: 64, height: 64 }}
          source={variantTypes[variant].image}
        />
        <AppText textColor={variantTypes[variant].textColor} variant="h5">
          {title}
        </AppText>
        <ModalContent>{children}</ModalContent>
        <AppButton
          uppercase
          buttonColor="blue500"
          textColor="white"
          onPress={onDismiss}>
          Ok
        </AppButton>
      </Modal>
    </Portal>
  );
};
