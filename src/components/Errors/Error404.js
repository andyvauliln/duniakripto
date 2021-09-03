import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { setGlobal, useGlobal } from 'reactn';
import { Centered, DataView, H3, MainButton, PageCard } from 'tz-base';
import { getShortHash } from 'tz-utils';

const Error404 = () => {
  const { id } = useParams();
  const [appPage] = useGlobal('appPage');
  const [t] = useTranslation();

  React.useLayoutEffect(() => {
    setGlobal({ isNotFound: true });
    return () => {
      setGlobal({ isNotFound: false });
    };
  }, []);

  return (
    <PageCard py="2em">
      <Centered>
        <H3 k={getShortHash(id, 12)} />
        <DataView mb="1em" variant="label">
          {t('tk_404_message', { type: appPage })}
        </DataView>
        <MainButton handleClick={e => window.location.reload()}>tk_reload</MainButton>
      </Centered>
    </PageCard>
  );
};

export default Error404;
