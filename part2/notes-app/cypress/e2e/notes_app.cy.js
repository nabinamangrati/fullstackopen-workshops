describe("Note app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    const user = {
      name: "Matti Luukkainen",
      username: "mluukkai",
      password: "salainen",
    };
    cy.request("POST", "http://localhost:3001/api/users/", user);
    cy.visit("http://localhost:5173");
  });
  it("front page can be opened", function () {
    cy.visit("http://localhost:5173");
    cy.contains("Notes");
    cy.contains("this is fake note");
  });
  it("login form can be opened", function () {
    cy.visit("http://localhost:5173");
    cy.contains("show login").click();
    cy.get("#username").type("mluukkai");
    cy.get("#password").type("salainen");
    cy.get("#login-button").click();
    cy.contains("Login");
  });
  describe("when logged in", function () {
    beforeEach(function () {
      cy.contains("show login").click();
      cy.get("#username").type("mluukkai");
      cy.get("#password").type("salainen");
      cy.get("#login-button").click();
    });

    it("a new note can be created", function () {
      // cy.contains("new note").click();
      cy.get("#inputNote").type("a note created by cypress");
      cy.contains("save").click();
      cy.contains("a note created by cypress");
    });
  });
});
