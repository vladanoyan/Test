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
      number: '',
    };
  }
  send(e) {
    if (this.state.value !== '' || this.state.number !== '') {
      this.props.dispatchText(this.state.value, this.state.number);
    }
    e.preventDefault();
    this.setState({ value: '', number: '' });
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
              <form>
                <input
                  type="text"
                  className={cs.inputSearch}
                  placeholder="serach contacts"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e.target.value.substr(0, 20) })}
                />
                <input
                  type="text"
                  className={cs.inputSearch}
                  placeholder="serach number"
                  value={this.state.number}
                  onChange={(e) => this.setState({ number: e.target.value })}
                />
                <button className="alert-info" onClick={this.send.bind(this)}>search</button>
                {itemFilter.map((item) =>
                  <li key={item.id}><p><Person />{item.name}</p><p><Phone />{item.phone}</p></li>)}
              </form >
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

filterList.propTypes = {
  dispatchText: PropTypes.func.isRequired,
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
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchText: (name, number) => {
      dispatch({ type: 'ADD_USER', name, number });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(filterList);
