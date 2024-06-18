<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de productos - Minimarket</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Gestión de productos - Minimarket</h1>

    <form id="productoForm">
        <label for="nombreProducto">Nombre del producto:</label>
        <input type="text" id="nombreProducto" name="nombreProducto" required>
        <span class="error" id="nombreProductoError"></span>

        <label for="precioUnidad">Precio por unidad:</label>
        <input type="number" id="precioUnidad" name="precioUnidad" min="0.01" step="0.01" required>
        <span class="error" id="precioUnidadError"></span>

        <label for="cantidadInventario">Cantidad en inventario:</label>
        <input type="number" id="cantidadInventario" name="cantidadInventario" min="0" required>
        <span class="error" id="cantidadInventarioError"></span>

        <button type="submit">Agregar producto</button>
    </form>

    <table id="productosTable">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio por unidad</th>
                <th>Cantidad</th>
                <th>Valor total</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <script src="script.js"></script>
</body>
</html>
