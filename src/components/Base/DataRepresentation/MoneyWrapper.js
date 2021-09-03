import React from 'react';
import { useCurrency, useRerender } from 'tz-hooks';
import dataService from 'tz-model/data-service';

let unsubscribe = null;
const last = dataService.tickers.last;

const MoneyWrapper = ({ children }) => {
  const curr = useCurrency();
  const rerender = useRerender();

  React.useEffect(() => {
    if (curr.isBase && unsubscribe) {
      unsubscribe();
    }
    unsubscribe = curr.isMarket && !curr.isBase ? dataService.tickers.onChange(rerender) : () => {};

    return () => {
      unsubscribe();
    };
  }, [curr.isBase]);

  return children({ ...curr, base: last[curr.base.name] || curr.base, fiat: last[curr.fiat.name] || {}, current: last[curr.current.name] || {} });
};

export default MoneyWrapper;
