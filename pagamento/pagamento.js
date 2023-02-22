var CLIENT_AUTHORIZATION = "sandbox_s9jj4526_726bxtx8s4s64tt9"
var VAULT_PAYPAL_ACCOUNT = true

var nonceGroup = document.querySelector('.nonce-group');
var nonceInput = document.querySelector('.nonce-group input');
var nonceSpan = document.querySelector('.nonce-group span');

// Create a client.
braintree.client.create({
  authorization: CLIENT_AUTHORIZATION
}, function (clientErr, clientInstance) {

  // Stop if there was a problem creating the client.
  // This could happen if there is a network error or if the authorization
  // is invalid.
  if (clientErr) {
    console.error('Error creating client:', clientErr);
    return;
  }

  // Create a PayPal Checkout component.
  braintree.paypalCheckout.create({
    client: clientInstance
  }, function (paypalCheckoutErr, paypalCheckoutInstance) {
    paypalCheckoutInstance.loadPayPalSDK({
      currency: 'EUR',
      intent: 'authorize'
    }, function () {
      paypal.Buttons({
        fundingSource: paypal.FUNDING.PAYPAL,
        createOrder: function () {
          return paypalCheckoutInstance.createPayment({
            flow: 'checkout', // Required
            amount: 10.00, // Required
            currency: 'EUR', // Required, must match the currency passed in with loadPayPalSDK
            intent: 'authorize', // Must match the intent passed in with loadPayPalSDK            
            // start Checkout With Vault required parameters
            requestBillingAgreement: VAULT_PAYPAL_ACCOUNT,
            billingAgreementDetails: {
              description: 'Some billing agreement description displayed to the customer'
            },
            // end Checkout With Vault required parameters
            enableShippingAddress: true,
            shippingAddressEditable: false,
            shippingAddressOverride: {
              recipientName: 'Bart Simpson',
              line1: 'Evergreen Terrace 742',
              line2: 'Unit 1',
              city: 'Munich',
              countryCode: 'DE',
              postalCode: '8080'
            }
          });
        },

        onApprove: function (data, actions) {
          return paypalCheckoutInstance.tokenizePayment(data, function (err, payload) {
            // Submit `payload.nonce` to your server
            console.error('PayPal approved:', data);
            console.error('Braintree payload:', payload);
            showNonce(payload);
          });
        },

        onCancel: function (data) {
          console.log('PayPal payment cancelled', JSON.stringify(data, 0, 2));
        },

        onError: function (err) {
          console.error('PayPal error', err);
        }
      }).render('#paypal-button').then(function () {
        // The PayPal button will be rendered in an html element with the ID
        // `paypal-button`. This function will be called when the PayPal button
        // is set up and ready to be used
      });

    });

  });

});

function showNonce(payload) {
  nonceSpan.textContent = "Nonce received: ";
  nonceInput.value = payload.nonce;
  nonceGroup.classList.remove('hidden');
}