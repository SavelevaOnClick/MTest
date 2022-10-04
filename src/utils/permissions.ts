import { ios } from '@constants';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export const checkCameraPermission = async () => {
    let result = await check(ios ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
    console.log(ios, 'ios', result)
    if (result !== 'granted') {
      result = await request(ios ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
      console.log(ios, 'ios', result, 'second')
    }
    return result === 'granted';
  };

  export const checkGeolocationPermission = async () => {
    let result = await check(ios ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result !== 'granted') {
      result = await request(ios ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    return result === 'granted';
  };