import React from 'react';
import { CardWrapper, FlexColumn, Icons, LinkedCardWrapper } from 'tz-base';

const ColumnCard = ({ type, to, ivariant = 'compl2', isize = 'x3l', children }) => {
  return to ? (
    <LinkedCardWrapper to={to}>
      {type && <Icons my="auto" mr="1em" type={type} variant={ivariant} fsize={isize} />}
      <FlexColumn flex="1">{children}</FlexColumn>
    </LinkedCardWrapper>
  ) : (
    <CardWrapper>
      {type && <Icons my="auto" mr="1em" type={type} variant={ivariant} fsize={isize} />}
      <FlexColumn flex="1">{children}</FlexColumn>
    </CardWrapper>
  );
};

export default ColumnCard;
