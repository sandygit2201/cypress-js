import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:'https://opensource-demo.orangehrmlive.com/',
    watchForFileChanges:false,
    pageLoadTimeout:60000,
    defaultCommandTimeout:3000,
    failOnStatusCode: false,
    cacheAcrossSpecs: true,
    headless:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        convertExcelDataToJson: convertExcelToJson,
        deleteJSONFileInFixture: deleteComplianceReportsJSONFiles,
        deleteExcelFileInDownloads: deleteAllExcelFilesInDownloads,
      });
      return config;
    },
    
  },
});

function convertExcelToJson(args) {
  console.log("Download xlsx and Convert to JSON");
  let fileName = fs
    .readdirSync(downloadDir)
    .filter((fn) => fn.endsWith(".xlsx"));
  console.log("Print FileName", fileName);
  const wb = xlsx.readFile(args.excelFileDirectory + fileName);
  for (let i = 0; i < wb.SheetNames.length; i++) {
    let sheetName = wb.SheetNames[i];
    const sheetValue = wb.Sheets[sheetName];
    const reportData = xlsx.utils.sheet_to_json(sheetValue, {
      defval: "",
      raw: false,
    });
    console.log("Writing the json file");
    fs.writeFileSync(
      `${jsonDir}/${sheetName.split(" ").join("-")}.json`,
      JSON.stringify(reportData, null, 2),
    );
    console.log("Successfully converted to json");
  }
  return "@reportData";
}

//Delete the Json File
function deleteComplianceReportsJSONFiles(args) {
  const filesToBeDeleted = fs
    .readdirSync(jsonDir)
    .filter((e) => e.includes(".json"));
  console.log("delete All JSON Files");
  console.log("JSON files to be deleted: ", filesToBeDeleted);
  filesToBeDeleted.forEach((file) => fs.unlinkSync(`${jsonDir}/${file}`));
  return "Deleted";
}

//Delete the Excel File
function deleteAllExcelFilesInDownloads(args) {
  const filesToBeDeleted = fs
    .readdirSync(downloadDir)
    .filter((e) => e.includes(".xlsx"));
  console.log("Delete All excel Files");
  console.log("Files to be deleted: ", filesToBeDeleted);
  filesToBeDeleted.forEach((file) => fs.unlinkSync(`${downloadDir}/${file}`));
  return "Deleted";
}

