const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const fs = require('fs');

// Read the content of the home.ejs file
const templateContent = fs.readFileSync('./views/home.ejs', 'utf-8');

// Define a function to render the template and return the DOM
function renderTemplate(template) {
  const dom = new JSDOM(`<!DOCTYPE html><html><body>${template}</body></html>`);
  return dom.window.document;
}

// Describe the test suite
describe('Home Template', function () {
  it('should contain an h1 element with the correct text', function () {
    // Render the template
    const document = renderTemplate(templateContent);

    // Find the h1 element
    const h1 = document.querySelector('h1');

    // Assert that the h1 element exists
    expect(h1).to.exist;

    // Assert that the h1 element has the correct text
    expect(h1.textContent).to.equal('Hello DevOps Engineer');
  });

  it('should have h1 text aligned to the center', function () {
    // Render the template
    const document = renderTemplate(templateContent);

    // Find the h1 element
    const h1 = document.querySelector('h1');

    // Assert that the h1 element has the "align" attribute set to "center"
    expect(h1.getAttribute('align')).to.equal('center');
  });
});
