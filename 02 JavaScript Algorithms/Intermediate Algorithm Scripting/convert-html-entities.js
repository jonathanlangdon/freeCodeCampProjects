function convertHTML(str) {
  const htmlEnt = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }
  return str.replace(/[&<>"']/g, match => htmlEnt[match])
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

/*Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/