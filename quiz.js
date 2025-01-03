// Click the start button
cy.get('button.start-quiz').click();
// Check if the first question is displayed
cy.get('.question').should('be.visible');
// Check that the question text is present
cy.get('.question').contains('What is the capital of France?'); // Example question
// Answer the question
cy.get('input[type="radio"]').first().check(); // Select the first answer option
// Click the next button
cy.get('button.next').click();
// Check if the next question is displayed
cy.get('.question').should('be.visible');
// Click the start button
cy.get('button.start-quiz').click();
// Answer all questions
cy.get('input[type="radio"]').each(function ($el) {
    cy.wrap($el).check(); // Check each answer
    cy.get('button.next').click(); // Click next
});
// Check if the score is displayed after finishing the quiz
cy.get('.score').should('be.visible');
cy.get('.score').contains('Your score is'); // Example score text
// Click the start button
cy.get('button.start-quiz').click();
// Answer all questions
cy.get('input[type="radio"]').each(function ($el) {
    cy.wrap($el).check(); // Check each answer
    cy.get('button.next').click(); // Click next
});
// Click the button to start a new quiz
cy.get('button.start-new-quiz').click();
// Ensure the quiz starts again
cy.get('.question').should('be.visible');
