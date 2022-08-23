//import _ from 'lodash';
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // Lodash, imported by this script, is required for this line to work
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.textContent = myName('Mike');
  return element;
}

document.body.appendChild(component());
