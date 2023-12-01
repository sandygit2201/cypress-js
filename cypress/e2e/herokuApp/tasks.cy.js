describe("Export class data to excel", () => {
  
    it("Export Activities", () => {
      const excelFileDirectory = Cypress.env("downloadsDir");
      cy.task("convertExcelDataToJson", { excelFileDirectory });
      cy.fixture("jsonData/sheet.json").then((data) => {
        let columns = Object.keys(data[0]);
        cy.log(JSON.stringify(data[0]));
        expect(columns).to.include("userName");
        expect(columns).to.include("password");
      });
    });
  
    after(() => {
      cy.task("deleteExcelFileInDownloads");
      cy.task("deleteJSONFileInFixture");
    });
  });