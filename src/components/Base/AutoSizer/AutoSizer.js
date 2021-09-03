import * as React from 'react';
import createDetectElementResize from './detectElementResize';

//from https://github.com/bvaughn/react-virtualized/
export default class AutoSizer extends React.PureComponent {
  static defaultProps = {
    onResize: () => {},
    disableHeight: false,
    disableWidth: false,
  };

  state = {
    height: 0,
    width: 0,
  };

  componentDidMount() {
    const { nonce } = this.props;
    if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView) {
      // Delay access of parentNode until mount.
      // This handles edge-cases where the component has already been unmounted before its ref has been set,
      // As well as libraries like react-lite which have a slightly different lifecycle.
      this._parentNode = this._autoSizer.parentNode;
      this._window = this._autoSizer.parentNode.ownerDocument.defaultView;

      this._detectElementResize = createDetectElementResize(nonce, this._window);
      this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

      this._onResize();
    }
  }

  componentWillUnmount() {
    if (this._detectElementResize && this._parentNode) {
      this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
    }
  }

  render() {
    const { children, disableHeight, disableWidth, style } = this.props;
    const { height, width } = this.state;

    //const outerStyle = { overflow: 'hidden' };
    const outerStyle = style || {};
    const childParams = {};

    if (!disableHeight) {
      outerStyle.height = style && style.height ? style.height : '100%';
      childParams.height = height;
    }

    if (!disableWidth) {
      outerStyle.width = style && style.width ? style.width : '100%';
      childParams.width = width;
    }

    return (
      <div
        ref={this._setRef}
        style={{
          ...outerStyle,
        }}
      >
        {children(childParams)}
      </div>
    );
  }

  _onResize = () => {
    const { disableHeight, disableWidth, onResize } = this.props;

    if (this._parentNode) {
      const height = this._parentNode.offsetHeight || 0;
      const width = this._parentNode.offsetWidth || 0;

      const win = this._window || window;
      const style = win.getComputedStyle(this._parentNode) || {};
      const paddingLeft = parseInt(style.paddingLeft, 10) || 0;
      const paddingRight = parseInt(style.paddingRight, 10) || 0;
      const paddingTop = parseInt(style.paddingTop, 10) || 0;
      const paddingBottom = parseInt(style.paddingBottom, 10) || 0;

      const newHeight = height - paddingTop - paddingBottom;
      const newWidth = width - paddingLeft - paddingRight;

      if ((!disableHeight && this.state.height !== newHeight) || (!disableWidth && this.state.width !== newWidth)) {
        this.setState({
          height: height - paddingTop - paddingBottom,
          width: width - paddingLeft - paddingRight,
        });

        onResize({ height, width });
      }
    }
  };

  _setRef = autoSizer => {
    this._autoSizer = autoSizer;
  };
}
