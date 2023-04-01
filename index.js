const loadData = async () => {
  const response = await fetch('./data.csv');
  const data = await response.text();
  return data;
};

const generateHeader = (data) => {
  let thead = '<tr>';
  const headers = data.split(',');
  for (let i = 0; i < headers.length; i++) {
    thead += `<th>${headers[i]}</th>`;
  }
  thead += '</tr>';
  document.querySelector('thead').innerHTML = thead;
};

const generateBody = (data) => {
  let tbody = '';
  for (let i = 0; i < data.length; i++) {
    const rowData = data[i].split(',');
    let row = '<tr>';
    for (let j = 0; j < rowData.length; j++) {
      row += `<td>${rowData[j]}</td>`;
    }
    row += '</tr>';
    tbody += row
  }
  document.querySelector('tbody').innerHTML = tbody;
};

const main = async () => {
  const data = await loadData();
  const rows = data.split('\n');
  console.log(rows)
  const headerData = rows[0];
  const bodyData = rows.slice(1, -1);
  generateHeader(headerData);
  generateBody(bodyData);
}

main();