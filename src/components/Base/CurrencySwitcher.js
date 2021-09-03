import React from 'react';
import { DataView, FlexRow, ToggleButton } from 'tz-base';
import { useCurrency } from 'tz-hooks';

const CurrencySwitcher = () => {
  const currency = useCurrency();

  return currency.isMarket ? (
    <FlexRow
      justifyContent="flex-end"
      onClick={e => {
        currency.switch();
        e.stopPropagation();
        e.preventDefault();
        return false;
      }}
    >
      <DataView mx="0.3em" fsize="sm" variant="label">
        {currency.fiat.name}
      </DataView>
      <ToggleButton both={true} checked={currency.isBase} />
      <DataView mx="0.3em" fsize="sm" variant="label">
        tk_curr_XTZ
      </DataView>
    </FlexRow>
  ) : null;
};

export default CurrencySwitcher;
