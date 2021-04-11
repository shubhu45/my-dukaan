import PropTypes from 'prop-types';
import React from 'react';
import './ContainerComponent.scss';

export default function ContainerComponent(props) {
  return <div className="container" id={props.pageId}>
    {props.children}
  </div>
}

ContainerComponent.propTypes = {
  pageId: PropTypes.string,
  children: PropTypes.object
};