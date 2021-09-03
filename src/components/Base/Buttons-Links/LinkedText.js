import React from 'reactn';
import { DataView } from 'tz-base';

const LinkedText = ({ children, extern, to, variant, ...props }) => {
  if (extern) {
    return (
      <DataView variant={variant || 'link'} target="_blank" rel="noopener noreferrer" to={to} {...props}>
        {children}
      </DataView>
    );
  } else {
    return (
      <DataView variant={variant || 'link'} to={to} {...props}>
        {children}
      </DataView>
    );
  }
};
export default LinkedText;
