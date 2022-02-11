// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case '':
      return '';
      break;
    case 'MIT':
      return 'https://img.shields.io/badge/license-MIT-green';
      break;
    case 'APACHE':
      return 'https://img.shields.io/badge/license-Apache-blue';
      break;
    case 'GPL':
      return 'https://img.shields.io/badge/license-GPL-blue';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case '':
      return '';
      break;
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'APACHE':
      return 'https://www.apache.org/licenses/LICENSE-2.0.txt';
      break;
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  }
  else {
  return `
  ## License
  [${license}](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![License badge](${renderLicenseBadge(data.license)})
  
  ## Description

  ${data.description}

  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation

  ${data.install}
  
  ## Usage

  ${data.usage_instructions}
  
  ![Screenshot](assets/images/screenshot.png)
  
  ## Contribute

  ${data.contrib}
  
  ## Test

  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  
  [GitHub Profile](https://github.com/${data.github_user}).
  
  Questions? You can email me at ${data.email}.
  `;
}


module.exports = {generateMarkdown};
