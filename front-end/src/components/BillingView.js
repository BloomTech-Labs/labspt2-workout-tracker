import React, { Component } from 'react';
import { connect } from 'react-redux';

class BillingView extends Component {
  render() {
    return (
      <div>
        <h1>Billing View</h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(BillingView);