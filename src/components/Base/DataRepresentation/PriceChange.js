import React from 'react';
import DataView from './DataView';

const PriceChange = ({ value, fsize = 'sm' }) => {
  return (
    <DataView fsize={fsize} dformat="&0.0 %" variant={value < 0 ? 'alert' : 'success'}>
      {value}
    </DataView>
  );
};

export default PriceChange;
