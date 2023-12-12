const table = document.getElementById("myTable");

function createTable() {
    //Write your code here

	const rn = getRows();
	const cn = getCols();

	// run a loop for rows
	for (let r = 0; r < rn; r++) {

		const row = document.createElement("tr");
		
		// run a loop for columns
		for (let c = 0; c < cn; c++) {

			const cell = document.createElement("td");
			cell.textContent = `Row-${r} Column-${c}`;

			row.appendChild(cell);		
		}

		table.append(row);
	}
}

function getRows() {
	const rn = Number(prompt("Input number of rows"));
	return Math.floor(rn);
}
function getCols() {
	const cn = Number(prompt("Input number of columns"));
	return Math.floor(cn);
}