/*
 <div class="whatever">
  <h1>Hello World</h1>
  <h2>Welcome <user> to this 3rd class</h2>
  <h3>We are going to talk about String Literals</h3>
  <h4>address</h4>
 </div>

 '' "" ``
 */

const user = {
  name: 'Pepito',
  address: 'Whatever'
}

// Hard way
const html = '<div class="whatever">\n' +
  '<h1>Hello World</h1>\n' +
  '<h2>Welcome ' + user.name + ' to this 3rd class</h2>\n' + 
  '<h3>We are going to talk about String Literals</h3>\n' +
  '<h4>' + user.address + '</h4>\n' +
'</div>';

console.log(html);


// Template Literals

const templateLiterals = `line1
${user.name}
linea2`;

console.log(templateLiterals);

// Easy way
const html2 = `
<div class="whatever">
  <h1>Hello World</h1>
  <h2>Welcome ${user.name} to this 3rd class</h2>
  <h3>We are going to talk about String Literals</h3>
  <h4>${user.address}</h4>
</div>`;

// Note: this doesn't work in Node.js, cause there's no document or DOM
// document.body.innerHTML = html2;

console.log(html2);