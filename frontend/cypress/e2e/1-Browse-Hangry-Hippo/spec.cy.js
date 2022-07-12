describe('Hits Home Page', () => {
  it('passes', () => {
    cy.visit('http://hangry-web-dev.us-east-1.elasticbeanstalk.com/');
  });
  it('displays the Welcome message', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('h1').should(
      'have.text',
      "Welcome to Hangry Hippo! Hungry? Let's get started!"
    );
  });
});

describe('Hits Order Page', () => {
  it('passes', () => {
    cy.visit('http://hangry-web-dev.us-east-1.elasticbeanstalk.com/order');
  });
  it('shows Your Order title', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('h3').should('have.text', 'Your Order');
  });
});
