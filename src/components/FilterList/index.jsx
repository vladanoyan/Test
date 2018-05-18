import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Phone from 'react-icons/lib/md/phone';
import Delete from 'react-icons/lib/go/trashcan';
import Person from 'react-icons/lib/md/person';
import { actionDel } from '../../actions/actionDel';
import cs from './component.pcss';


class filterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      number: '',
      id: '',
    };
  }
  send(e) {
    if (this.state.value !== '' || this.state.number !== '') {
      this.props.dispatchText(this.state.value, this.state.number, Date.now());
    }
    e.preventDefault();
    this.setState({ value: '', number: '' });
  }
  rem(e) {
    console.log(e);
    this.props.sendDelete(e);
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
                  placeholder="name"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e.target.value.substr(0, 20) })}
                />
                <input
                  type="number"
                  className={cs.inputSearch}
                  placeholder="number"
                  value={this.state.number}
                  onChange={(e) => this.setState({ number: e.target.value })}
                />
                <button className="alert-info" onClick={this.send.bind(this)}>Add contact</button>
                {itemFilter.map((item) => (
                  <li className={cs.listLi} key={item.id}>
                    <p><Person />{item.name}</p><p><Phone />{item.phone}</p>
                    <Delete
                      className={cs.delete}
                      onClick={this.rem.bind(this, item.id)}
                    /></li>))}
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
  sendDelete: PropTypes.func.isRequired,
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
    dispatchText: (name, number, ky) => {
      dispatch({ type: 'ADD_USER', name, number, ky });
    },
    sendDelete: (num) => {
      dispatch(actionDel(num));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(filterList);
