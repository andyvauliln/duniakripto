import momentTimeZone from 'moment-timezone';
import React from 'react';
import { CardWrapper, DataView, FlexRowSpaceBetween } from 'tz-base';
import { useTimeZone } from 'tz-hooks';
import AutocompleteSelector from './AutocompleteSelector';

const TimezonePicker = () => {
  const timezone = useTimeZone();
  const defaultValue = timezone.name;
  const timezones = momentTimeZone.tz.names();
  const selectHandler = value => timezone.setTimeZone({ name: value });

  return <AutocompleteSelector data={timezones} defaultValue={defaultValue} selectHandler={selectHandler} RowTemplate={RowTemplate} />;
};

const RowTemplate = ({ data }) => {
  const arr = data.value.split('/');

  return (
    <CardWrapper className="list-item" cursor="pointer" onMouseDown={data.selectHandler}>
      <FlexRowSpaceBetween width="100%">
        <DataView>{arr[0]}</DataView>
        {arr[1] && <DataView>{arr[1]}</DataView>}
      </FlexRowSpaceBetween>
    </CardWrapper>
  );
};

export default TimezonePicker;
