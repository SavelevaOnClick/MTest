import {AddressComponent} from 'react-native-google-places-autocomplete';

// 

export const formattingGoogleAddressData = (googleAddressData: AddressComponent[]) => {
  const return1 = googleAddressData
    .filter(
      googleAddressData =>
        googleAddressData.types.includes('country') ||
        googleAddressData.types.includes('locality') ||
        googleAddressData.types.includes('route'),
    )
    .map(res => res.long_name);

  const addressForm = {
    country: '',
    locality: '',
    street: '',
    houseNumber: '',
  };
  const return3 = googleAddressData.reduce((ac, address) => {
    if (address.types.includes('country')) {
      ac['country'] = address.long_name;
    } else {
      if (address.types.includes('locality')) {
        ac['locality'] = address.long_name;
      } else {
        if (address.types.includes('route')) {
          ac['street'] = address.long_name;
        } else {
          if (address.types.includes('street_number')) {
            ac['houseNumber'] = address.long_name;
          }
        }
      }
    }
    return ac;
  }, addressForm);

  const return2 = googleAddressData.reduce((ac, address) => {
    ac +=
      address.types.includes('country') ||
      address.types.includes('locality') ||
      address.types.includes('route') ||
      address.types.includes('street_number')
        ? `${address.long_name} `
        : '';
    return ac;
  }, '');

  return Object.values(return3).filter(Boolean).join(', ');
};
