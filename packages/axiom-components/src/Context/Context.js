import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Tip from '../Tip/Tip';
import './Context.css';

export default class Context extends Component {
  static propTypes = {
    arrowRef: PropTypes.func,
    children: PropTypes.node,
    color: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
    maxHeight: PropTypes.string,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    width: PropTypes.string,
  };

  static defaultProps = {
    maxHeight: '30rem',
    position: 'top',
    width: '14.5rem',
  };

  render() {
    const {
      arrowRef,
      children,
      maxHeight,
      position,
      width,
      color,
      ...rest
    } = this.props;

    const classes = classnames('ax-context', `ax-context--${position}`, {
      [`ax-context--${color}`]: color,
    });
    const content = () => <div className="ax-context__content" style={ { maxHeight } }>
      { children }
    </div>;
    return (
      <Base theme="day" { ...rest } className={ classes } style={ { width } }>
        { arrowRef ?
          <Tip arrowRef={ arrowRef } color={ color } direction={ position }>
            { content() }
          </Tip> :
        content()
        }
      </Base>
    );
  }
}
