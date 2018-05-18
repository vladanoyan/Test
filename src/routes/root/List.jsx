import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

class List extends React.Component {
  render() {
    return (
      <h1>
        Hello, List
        {renderRoutes(this.props.route.routes)}
      </h1>
    );
  }
}
List.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default List;
