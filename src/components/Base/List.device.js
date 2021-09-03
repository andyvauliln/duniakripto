import React from 'react';
import styled from 'styled-components';
import { Centered, DataView, Spinner } from 'tz-base';
import { useInfiniteScroll } from 'tz-hooks';

const List = ({ collection, RowTemplate, empty, target = 'body' }) => {
  // 1 Auto-fetch more data on scroll (when remaining data is less than 1 page high)
  //
  // Arguments
  //
  // * generic callback function to load more data, must return
  //   the count of new elements (will stop calling the callback
  //   when count was zero == EOF)
  // * takes the name of a DOM id attribute or 'body' as argument
  //   to attach scroll listeners and run size checks
  //
  const doRender = useInfiniteScroll(() => collection.more(), target);

  // 2 Generic render update trigger (required for 3 below)
  // const doRender = React.useReducer(() => ({}))[1];

  // 3 Kick-off data loading or refresh
  //
  // When a collection is fresh or reused (i.e. has not loaded any data yet or
  // data exists from before) we fetch initial / fresh data.
  React.useEffect(() => {
    if (!collection.isLoaded) {
      collection.get().finally(doRender);
    } else {
      collection.fresh().finally(doRender);
    }
    doRender();
  }, [collection, doRender]); // update only when collection changes

  // 4. Render list items and different states (loading, empty, error)
  //
  // `collection.data` is the raw value array, `isXxx` are flags defined by
  // PagedResource or TableResource.
  return (
    <>
      <Wrapper>
        {collection.data.map((item, index) => {
          return <RowTemplate key={index} index={index + 1} data={item} />;
        })}
        {collection.isFetching && (
          <Centered p="2em" mb={collection.isFresh ? '100vh' : 0} bt={!collection.isFresh}>
            <Spinner />
          </Centered>
        )}
        {collection.isEmpty &&
          (empty ? (
            empty
          ) : (
            <Centered p="2em" mb="50vh">
              <DataView variant="label">tk_no_data_found</DataView>
            </Centered>
          ))}
        {collection.isError && (
          <Centered p="2em" mb="50vh">
            <DataView variant="label">{collection.error.message}</DataView>
          </Centered>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  > *:not(:only-child):not(:last-child):not(.noborder) {
    border-bottom: 1px solid var(--divider-color);
  }
  &:empty {
    margin-bottom: 100vh;
  }
`;

export default List;
