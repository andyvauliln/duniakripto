import React from 'react';
import ErrorMessage from '../DataRepresentation/ErrorMessage';
import NoDataFound from '../DataRepresentation/NoDataFound';
import Loading from '../Loading';

export default function DataWrapper({ data, children, onChange = null }) {
  // Note: don't touch or release data here, it is managed outside
  return data ? (
    <>
      {data.isLoaded && children}
      {data.isLoading && <Loading />}
      {data.isError && <ErrorMessage error={data.error} />}
      {data.isEmpty && <NoDataFound />}
    </>
  ) : (
    <Loading />
  );
}
