function updateLineNumbersAndHeight(textarea, lineNumbersId) {
  const lineCount = textarea.value.split("\n").length;
  const lineNumbersElement = document.getElementById(lineNumbersId);
  let lineNumbersHtml = "";
  
  for (let i = 1; i <= lineCount; i++) {
    lineNumbersHtml += i + "\n";
  }

  lineNumbersElement.textContent = lineNumbersHtml;
  lineNumbersElement.style.height = `${textarea.scrollHeight}px`; // Điều chỉnh chiều cao
}

function beautifyHtml() {
  const inputHtml = document.getElementById('inputHtml').value;
  // Sử dụng thư viện làm đẹp HTML ở đây, ví dụ: html_beautify(inputHtml)
  const outputHtml = html_beautify(inputHtml); // Giả sử bạn có hàm html_beautify
  document.getElementById('outputHtml').value = outputHtml;

  // Cập nhật số dòng cho output
  updateLineNumbersAndHeight(document.getElementById('outputHtml'), 'outputLineNumbers');
}

function resetFields() {
  document.getElementById('inputHtml').value = '';
  document.getElementById('outputHtml').value = '';
  document.getElementById('inputLineNumbers').textContent = '';
  document.getElementById('outputLineNumbers').textContent = '';
}
