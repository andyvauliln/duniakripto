import React from 'react';
import { withTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Icons } from 'tz-base';

const CopyButton = ({ t, value, ...props }) => {
  return (
    <Wrapper
      onClick={e => {
        try {
          e.stopPropagation();
          e.preventDefault();
          copyToClipboard(value);
          toast.info(t('tk_copied'));
        } catch (e) {
          toast.error(e);
        }
      }}
    >
      <Icons {...props} type="copy" variant="inherit" />
    </Wrapper>
  );
};

const Wrapper = styled.a`
  cursor: pointer;
  color: var(--label-color);
  &:hover {
    color: var(--highlight-color);
  }
`;

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export default withTranslation()(CopyButton);
