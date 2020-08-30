// https://docs.cypress.io/api/introduction/api.html

describe("Create task", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Home");
    cy.get("button").click();
    cy.contains("label", "Key");
  });
});
