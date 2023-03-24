function checkBrackets(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
        stack.push(str[i]);
      } else if (str[i] === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      } else if (str[i] === ']' && stack[stack.length - 1] === '[') {
        stack.pop();
      } else if (str[i] === '}' && stack[stack.length - 1] === '{') {
        stack.pop();
      } else {
        return false;
      }
    }
    return stack.length === 0;
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#brackets').value;
    const result = checkBrackets(input);
    const output = document.querySelector('#output');
    if (result) {
      output.textContent = 'The brackets are balanced.';
    } else {
      output.textContent = 'The brackets are not balanced.';
    }
  });
  