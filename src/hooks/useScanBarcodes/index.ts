import { scanBarcodes } from "@components";
import { useState } from "@hooks";
import { Barcode, BarcodeFormat, CodeScannerOptions } from "@types";
import { runOnJS } from "react-native-reanimated";
import { Frame, useFrameProcessor } from "react-native-vision-camera";

function useScanBarcodes(types: BarcodeFormat[], options?: CodeScannerOptions): [(frame: Frame) => void, Barcode[]] {
    const [barcodes, setBarcodes] = useState<Barcode[]>([]);
    const frameProcessor = useFrameProcessor(frame => {
      'worklet';
      const detectedBarcodes = scanBarcodes(frame, types, options);
      runOnJS(setBarcodes)(detectedBarcodes);
    }, []);
    return [frameProcessor, barcodes];
  }

export default useScanBarcodes;