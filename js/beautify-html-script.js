function updateLineNumbersAndHeight() {
  const input = document.getElementById('inputHtml');
  const lineNumbers = document.getElementById('inputLineNumbers');
  const lineCount = input.value.split('\n').length;
  let numbersContent = '';
  for (let i = 1; i <= lineCount; i++) {
    numbersContent += `${i}\n`;
  }
  lineNumbers.textContent = numbersContent;
  lineNumbers.style.height = `${input.scrollHeight}px`;
  input.style.height = ''; // Reset height
  input.style.height = `${input.scrollHeight}px`;
}

function updateOutputLineNumbersAndHeight() {
  const output = document.getElementById('outputHtml');
  const lineNumbers = document.getElementById('outputLineNumbers');
  const lineCount = output.value.split('\n').length;
  let numbersContent = '';
  for (let i = 1; i <= lineCount; i++) {
    numbersContent += `${i}\n`;
  }
  lineNumbers.textContent = numbersContent;
  lineNumbers.style.height = `${output.scrollHeight}px`;
}

function beautifyHtml() {
  const inputHtml = document.getElementById('inputHtml').value;
  const outputHtml = document.getElementById('outputHtml');
  outputHtml.value = html_beautify(inputHtml, { indent_size: 2, space_in_empty_paren: true });
  updateOutputLineNumbersAndHeight();
}

function resetFields() {
  document.getElementById('inputHtml').value = '';
  document.getElementById('outputHtml').value = '';
  document.getElementById('inputLineNumbers').textContent = '';
  document.getElementById('outputLineNumbers').textContent = '';
  updateLineNumbersAndHeight();
  updateOutputLineNumbersAndHeight();
}

// Initial call to set line numbers
updateLineNumbersAndHeight();
updateOutputLineNumbersAndHeight();
