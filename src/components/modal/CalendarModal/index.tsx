import moment from 'moment';
import React from 'react';
import {Calendar, Modal} from '@components';
import {height, width} from '@constants';
import {useMemo, useCallback} from '@hooks';
import {DateData} from '@types';

const MOMENT_FORMAT = 'YYYY-MM-DD';
type TProps = {
  isVisible: boolean;
  value: string;
  setValue: (value: string) => void;
  closeModal: (value: boolean) => void;
};

const CalendarModal: React.FC<TProps> = ({setValue, closeModal, value, isVisible}) => {
  const onChange = useCallback((date?: DateData) => {
    if (date) {
      setValue(date.dateString);
    }
    closeModal(false);
  }, []);

  const maxDate = useMemo(() => moment(new Date()).subtract(18, 'years').format(MOMENT_FORMAT), []);

  const initialDate = useMemo(() => value || maxDate, [value]);
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onChange}
      animationInTiming={400}
      animationOutTiming={400}
      onBackdropPress={onChange}
      deviceWidth={width}
      deviceHeight={height}
      useNativeDriver={true}>
      <Calendar onDayPress={onChange} initialDate={initialDate} maxDate={maxDate} hideExtraDays={false} />
    </Modal>
  );
};

export default CalendarModal;
