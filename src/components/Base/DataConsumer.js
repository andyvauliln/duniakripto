import { isEqual } from 'lodash-es';
import React from 'react';
import { FEATURES } from 'tz-config';
import dataService from 'tz-model/data-service';
import { getObjValues } from 'tz-utils';

//Todo make it better
const DataConsumer = ({ children, dprops = [], d = [] }) => {
  const [data, setData] = React.useState(getObjValues(dprops, dataService.getData));

  function onPropsChange() {
    const newData = getDataIfChanged();
    if (newData) {
      setData(newData);
    }
  }
  function getDataIfChanged() {
    const obj = dataService.getData;

    const newData = getObjValues(dprops, obj);
    if (!isEqual(newData, data)) {
      return newData;
    }
    return null;
  }

  React.useEffect(() => {
    if (dprops.length > 0) {
      const tipUnRegister = dataService.tip.onChange(() => onPropsChange());
      const configUnRegister = dataService.config.onChange(() => onPropsChange());
      const tickersUnRegister = FEATURES.hasMarket ? dataService.tickers.onChange(() => onPropsChange()) : () => {};
      return () => {
        tipUnRegister();
        configUnRegister();
        tickersUnRegister();
      };
    }
  }, []);

  return React.useMemo(() => children(data), [data, ...d]);
};

export default DataConsumer;
