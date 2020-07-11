/**
 * @fileoverview JS file for interactive UI
*/

// Add HTML elements
const addElement = (tag, attributes, uniTag, content) => {
  const _attributes = Object.keys(attributes)
    .map(key => `${key}="${attributes[key]}"`)
    .join(' ');

  if (uniTag) return `<${tag} ${_attributes} />`
  else return `<${tag} ${_attributes}>${content}</${tag}>`
};

// Add new Input dinamicaly
const newFormInput = (name) => {
  const attributes = {
    type: 'text',
    class: 'form-control mb-2',
    name: name,
    editable: 'editable',
  };
  return addElement('input', attributes, uniTag = true);
};

const addInput = (groupName) => {
  switch (groupName) {
    case 'ingredients':
      $(`#${groupName}`).append(newFormInput(groupName))
      break;

    case 'instructions':
      $(`#${groupName}`).append(newFormInput(groupName))

    default:
      break;
  }
};

