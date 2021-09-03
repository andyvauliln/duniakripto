import React from 'react';
import { Series, SeriesApi } from 'tz-api';
import { useCurrency, useAsyncError } from 'tz-hooks';

const ChartMoneyWrapper = ({ children, data, fields, series = Series.D1D, limit = 60 }) => {
  const curr = useCurrency();
  const [convertedData, setConvertedData] = React.useState([]);
  const throwError = useAsyncError();

  React.useEffect(() => {
    if (!curr.isBase) {
      SeriesApi.getOhlcv('kraken', `XTZ_${curr.fiat.name}`, {
        columns: ['time', 'vwap'],
        collapse: series,
        limit: limit,
      })
        .then(resp => setConvertedData(convertData(resp.data, data, fields)))
        .catch(e => throwError(e));
    }
  }, [curr.isBase]);

  return curr.isBase ? children(data, curr) : convertedData.length > 0 && children(convertedData, curr);
};

function convertData(priceArr, data, fields) {
  return data.map((item, index) => {
    const d = { ...item };
    const valueTime = new Date(d.time);
    // time-window merge, find the latest price before or at value time
    const price = priceArr.find((p, i) => (priceArr.length > i + 1 ? priceArr[i + 1].time > valueTime : true));
    fields.forEach(field => {
      d[field] = d[field] * price.vwap;
    });
    return d;
  });
}

export default ChartMoneyWrapper;
