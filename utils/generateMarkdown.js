// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Content of the File
    * Description
    * Installation Instructions
    * Usage Information
    * Contribution Guidelines
    * Test Instructions
    * License
    * Questions
## Description
${data.description}

## Installation Instructions
${data.installInstruct}

## Usage Information
${data.usageInfo}

## Contribution Guidelines
${data.contributionGuidelines}

## Test Instructions
${data.testInstruct}

## License
${data.license}

## Questions
github.com/${data.username}

  `;
}

module.exports = generateMarkdown;
