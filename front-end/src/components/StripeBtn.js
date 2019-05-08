class stripeBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const publishableKey = 'pk_test_Gju9VkToEjZsO1RhYkIXmApE00zNqTr7sN';
    const onToken = token => {
      const body = {
        amount: 999,
        token: token
      };
      axios
        .post('https://workout-tracker-pt2.herokuapp.com/api/payment', body)
        .then(response => {
          if (response) {
            this.props.getPremium();
          }
          console.log('AXIOS RESPONSE', response);
          alert('Payment Success');
        })
        .catch(error => {
          console.log('Payment Error: ', error);
          alert('Payment Error');
        });
    };
    return (
      <StripeCheckout
        label="Go Gold" //Component button text
        name="Workout Tracker" //Modal Header
        description="Upgrade your account today."
        panelLabel="Go Gold" //Submit button in modal
        amount={125} //Amount in cents $1.25
        token={onToken}
        stripeKey={publishableKey}
        image={logo} //Pop-in header image
        billingAddress={false}
      />
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { getPremium }
)(stripeBtn);
