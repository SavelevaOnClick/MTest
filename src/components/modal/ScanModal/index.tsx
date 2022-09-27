import React from 'react';
import { StyleSheet} from 'react-native';
import {Barcode, BarcodeFormat} from 'vision-camera-code-scanner';
import {Camera, Icon, Modal, Pressable, SafeAreaView, Text, useCameraDevices, View} from '@components';
import {colors, height, width} from '@constants';
import {useCallback, useState, useEffect, useScanBarcodes} from '@hooks';
import styles from './styles';

type TProps = {
  isVisible: boolean;
  setClose: (value: boolean) => void;
  getCode: (code: string) => void;
};

const ScanModal: React.FC<TProps> = ({isVisible, setClose, getCode}) => {
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS]);
  const [barcode, setBarcode] = useState<string>('');

  const toggleActiveState = useCallback(async () => {
    if (barcodes && barcodes.length > 0) {
      barcodes.forEach(async (scannedBarcode: Barcode) => {
        if (scannedBarcode.rawValue && scannedBarcode.rawValue !== barcode) {
          setBarcode(scannedBarcode.rawValue);
          getCode(scannedBarcode.rawValue);
          setClose(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    toggleActiveState();
    return () => {
      barcodes;
    };
  }, [barcodes]);

  const onPressClose = useCallback(() => setClose(false), []);

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={400}
      animationOutTiming={400}
      deviceWidth={width}
      deviceHeight={height}
      backdropOpacity={0.8}
      style={styles.modal}
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}>
      <SafeAreaView style={styles.flexContainer}>
            <View style={styles.modalHeaderContainer}>
              <Text style={styles.title}>Сканування штрих-коду картки</Text>
              <Pressable onPress={onPressClose} style={styles.iconClose}>
                <Icon name="Close" size={24} color={colors.white_FFFFFF} />
              </Pressable>
            </View>
            {device != null ? (
              <>
                <View style={styles.focusContainer}>
                  <View style={styles.innerFocusContainer}>
                    <View style={styles.focusLeftTopCorner} />
                    <View style={styles.focusRightTopCorner} />
                    <View style={styles.focusLeftBottomCorner} />
                    <View style={styles.focusRightBottomCorner} />
                  </View>
                </View>

                <Camera
                  style={StyleSheet.absoluteFill}
                  device={device}
                  isActive={true}
                  frameProcessor={frameProcessor}
                  frameProcessorFps={5}
                />
              </>
            ) : null}
      </SafeAreaView>
    </Modal>
  );
};

export default ScanModal;
