

export {
  ActivityIndicator,
  Alert,
  FlatList,
  SectionList,
  Keyboard,
  Linking,
  PermissionsAndroid,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Share,
  StatusBar,
  Switch,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  ImageBackground,
  View,
} from 'react-native';

// MODULES
export {default as Modal} from 'react-native-modal';
export {default as Image} from 'react-native-fast-image';
export {default as LinearGradient} from 'react-native-linear-gradient';
export {Calendar} from 'react-native-calendars';
export {useCameraDevices, Camera} from 'react-native-vision-camera';
export {CodeField, Cursor} from 'react-native-confirmation-code-field';
export {default as Geocoder} from 'react-native-geocoding';
export {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
export {default as Geolocation} from 'react-native-geolocation-service';
export {default as MapViewDirections} from 'react-native-maps-directions';
export {showLocation} from 'react-native-map-link';
export {default as DropShadow} from 'react-native-drop-shadow';
export { TabActions } from '@react-navigation/native';
export { scanBarcodes, BarcodeFormat } from "vision-camera-code-scanner";
export  {mask} from 'react-native-mask-text';

// BEHAVIOR

// BUTTONS
export {default as MainButton} from './button/MainButton';
// CONTROL

// DATAVIEW

// INPUTS
export {default as CheckBox} from './inputs/CheckBox';
export {default as LabeledInput} from './inputs/InputLabeled';
// LAYOUT
export {KeyboardAvoidingView} from './layout/KeyboardAvoidingView/KeyboardAvoidingView';
export {default as Wrapper} from './layout/Wrapper';

// MODAL
export {default as CalendarModal} from './modal/CalendarModal';
export {default as GenderModal} from './modal/GenderModal';
export {default as ScanModal} from './modal/ScanModal';
export {default as SupportModal} from './modal/SupportModal';
// NAVIGATION
export {default as TabBar} from './navigation/TabBar';
export {default as HeaderBackButton} from './navigation/HeaderBackButton';
export {default as HeaderRightSupportButton} from './navigation/HeaderRightSupportButton';
// TYPOGRAPHY
export {Icon} from './typography/Icon/Icon';
export {default as Text} from './typography/Text';
export {default as TextInput} from './typography/TextInput';
