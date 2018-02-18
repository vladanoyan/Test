import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Phone from 'react-icons/lib/md/phone';
import Person from 'react-icons/lib/md/person';
import cs from './component.pcss';


class filterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value.substr(0, 20) });
  }
  render() {
    const itemFilter = this.props.contacts.filter(
      (item) => item.name.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1,
    );
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <input
                type="text"
                className={cs.inputSearch}
                placeholder="serach contacts"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
              />
              {itemFilter.map((item) =>
                <li key={item.id}><p><Person />{item.name}</p><p><Phone />{item.phone}</p></li>)}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

filterList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
export default connect(
  mapStateToProps,
)(filterList);
