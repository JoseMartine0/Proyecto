document.getElementById('add-instrument-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const cantidad = document.getElementById('cantidad').value;
    const estado = document.getElementById('estado').value;

    // Generar una nueva fila para la tabla
    const table = document.getElementById('inventory-table');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${table.rows.length}</td>
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>${cantidad}</td>
        <td>${estado}</td>
        <td><button onclick="this.parentElement.parentElement.remove()">Eliminar</button></td>
    `;

    // Limpiar el formulario
    this.reset();
});
