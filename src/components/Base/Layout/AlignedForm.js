import styled from 'styled-components';

const AlignedForm = styled.div`
  display: flex;
  line-height: 1.2rem;
  margin-top: 1em;
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > div:first-child {
    flex: 1;
  }
  & > div:first-child > * {
    padding-left: 0;
  }
  & > div:last-child > * {
    padding-right: 0;
  }
  & > div:not(:first-child) {
    text-align: right;
  }
`;
export default AlignedForm;
