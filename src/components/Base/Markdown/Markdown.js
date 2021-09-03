import React from 'react';
import Spinner from '../Spinner';
import Centered from '../Layout/Centered';
import { Showdown } from './Showdown';
import styled from 'styled-components';
import { Box } from '../Layout/FlexBoxes';
import { useAsyncError } from 'tz-hooks';

// Note: no table support in early (legacy) version, but its very small :)
const md = new Showdown.converter();

export default function Markdown({ source, children, ...props }) {
  const [content, setContent] = React.useState();
  const throwError = useAsyncError();

  React.useEffect(() => {
    var ac = new AbortController();
    if (!!source) {
      fetch(source, { signal: ac ? ac.signal : null })
        .then(async resp => {
          if (resp.ok) {
            const text = await resp.text();
            if (text.slice(0, 1) === '<') {
              throwError(new Error('Markdown file ' + source + ' not found.'));
            }
            setContent(md.makeHtml(text || ''));
          } else {
            const text = await resp.text();
            throwError(new Error(text));
          }
        })
        .catch(e => throwError(e));
    } else {
      setContent(md.makeHtml(children.toString()));
    }
    return () => {
      ac.abort();
    };
  }, [source, children]);

  return content ? (
    <MarkdownWrapper {...props} className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <Centered p="2em">
      <Spinner />
    </Centered>
  );
}

export const MarkdownWrapper = styled(Box)`
  line-height: 1.4;
  max-width: 100%;
  color: var(--label-color);
  & > h1,
  & > h2,
  & > h3,
  & > h4 {
    color: var(--headline-color);
    font-weight: 500;
    margin: 1.5em 0 1em;
  }
  & > h1:first-child,
  & > h2:first-child,
  & > h3:first-child,
  & > h4:first-child {
    margin-top: 0;
  }
  & b,
  & strong {
    color: var(--text-color);
  }
  & > p:not(:only-child) {
    margin-bottom: 1em;
  }
  & > ul,
  & > ul > li > ul {
    list-style-type: none;
    margin: 1em 0;
  }
  & > ul > li:before,
  & > ul > li > ul > li:before {
    content: '- ';
  }
  & > code > *,
  & > pre > * {
    font-family: Courier, sans-serif;
  }
`;
