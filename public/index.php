<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestión de productos - Minimarket</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="font-sans bg-gray-100">
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Gestión de productos - Minimarket</h1>

    <form id="productoForm" class="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto">
      <div class="mb-4">
        <label for="nombreProducto" class="block text-gray-700 font-bold mb-2">Nombre del producto:</label>
        <input type="text" id="nombreProducto" name="nombreProducto" required class="w-full px-3 py-2 border border-gray-300 rounded">
        <span class="error text-red-500 text-sm mt-1" id="nombreProductoError"></span>
      </div>

      <div class="mb-4">
        <label for="precioUnidad" class="block text-gray-700 font-bold mb-2">Precio por unidad:</label>
        <input type="number" id="precioUnidad" name="precioUnidad" min="0.01" step="0.01" required class="w-full px-3 py-2 border border-gray-300 rounded">
        <span class="error text-red-500 text-sm mt-1" id="precioUnidadError"></span>
      </div>

      <div class="mb-4">
        <label for="cantidadInventario" class="block text-gray-700 font-bold mb-2">Cantidad en inventario:</label>
        <input type="number" id="cantidadInventario" name="cantidadInventario" min="0" required class="w-full px-3 py-2 border border-gray-300 rounded">
        <span class="error text-red-500 text-sm mt-1" id="cantidadInventarioError"></span>
      </div>

      <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar producto</button>
    </form>

    <table id="productosTable" class="min-w-full bg-white shadow-md rounded mt-6">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Nombre Producto</th>
          <th class="py-2 px-4 border-b">Precio por Unidad</th>
          <th class="py-2 px-4 border-b">Cantidad Inventario</th>
          <th class="py-2 px-4 border-b">Valor total</th>
          <th class="py-2 px-4 border-b">Estado</th>
        </tr>
      </thead>
      <tbody id="productosTableBody"></tbody>
    </table>
  </div>
  <script src="script.js"></script>
</body>
</html>