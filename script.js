//your JS code here. If required.
describe('Testimonial Section', () => {
    beforeEach(() => {
        cy.visit('index.html'); // Assuming your HTML file is named index.html
    });

    it('should display elements correctly', () => {
        cy.get('h1').should('have.length', 1); // Check if there's exactly one h1 element
        cy.get('.testimonial-container').find('.testimonial').should('have.length', 3); // Check if there are exactly three testimonials
        cy.get('.testimonial').each((testimonial, index) => {
            cy.wrap(testimonial).within(() => {
                cy.get('.testimonial-text').should('exist'); // Ensure each testimonial has the testimonial text
                cy.get('.author').should('exist'); // Ensure each testimonial has the author
            });
        });
    });
});
