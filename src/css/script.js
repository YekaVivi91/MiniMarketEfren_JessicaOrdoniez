document.addEventListener('DOMContentLoaded', () => {
    const productoForm = document.getElementById('productoForm');
    const productosTableBody = document.getElementById('productosTableBody');
    const productos = [];
  
    productoForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nombreProducto = document.getElementById('nombreProducto').value.trim();
      const precioUnidad = parseFloat(document.getElementById('precioUnidad').value);
      const cantidadInventario = parseInt(document.getElementById('cantidadInventario').value);
  
      // Validation logic
      let valid = true;
  
      // Validate product name
      const nombreProductoRegex = /^[A-Za-z\s]+$/;
      if (!nombreProducto) {
        document.getElementById('nombreProductoError').innerText = 'El nombre del producto es obligatorio.';
        valid = false;
      } else if (!nombreProductoRegex.test(nombreProducto)) {
        document.getElementById('nombreProductoError').innerText = 'El nombre del producto solo puede contener letras y espacios.';
        valid = false;
      } else {
        document.getElementById('nombreProductoError').innerText = '';
      }
  
      // Validate price
      if (isNaN(precioUnidad) || precioUnidad <= 0) {
        document.getElementById('precioUnidadError').innerText = 'El precio debe ser mayor a 0.';
        valid = false;
      } else {
        document.getElementById('precioUnidadError').innerText = '';
      }
  
      // Validate quantity
      if (isNaN(cantidadInventario) || cantidadInventario < 0) {
        document.getElementById('cantidadInventarioError').innerText = 'La cantidad debe ser mayor o igual a 0.';
        valid = false;
      } else {
        document.getElementById('cantidadInventarioError').innerText = '';
      }
  
      if (!valid) {
        return;
      }
  
      // Calculate total value and state
      const valorTotal = precioUnidad * cantidadInventario;
      const estado = cantidadInventario > 0 ? 'Disponible' : 'Agotado';
  
      // Create product object
      const producto = {
        nombreProducto,
        precioUnidad,
        cantidadInventario,
        valorTotal,
        estado
      };
  
      // Add product to array and update table
      productos.push(producto);
      actualizarTabla(productos);
      productoForm.reset();
    });
  
    function actualizarTabla(productos) {
      productosTableBody.innerHTML = ''; // Clear existing content
  
      productos.forEach(producto => {
        const fila = document.createElement('tr');
  
        const celdaNombre = document.createElement('td');
        celdaNombre.innerText = producto.nombreProducto;
        celdaNombre.className = 'py-2 px-4 border-b';
        fila.appendChild(celdaNombre);
  
        const celdaPrecio = document.createElement('td');
        celdaPrecio.innerText = producto.precioUnidad.toFixed(2);
        celdaPrecio.className = 'py-2 px-4 border-b';
        fila.appendChild(celdaPrecio);
  
        const celdaCantidad = document.createElement('td');
        celdaCantidad.innerText = producto.cantidadInventario;
        celdaCantidad.className = 'py-2 px-4 border-b';
        fila.appendChild(celdaCantidad);
  
        const celdaValorTotal = document.createElement('td');
        celdaValorTotal.innerText = producto.valorTotal.toFixed(2);
        celdaValorTotal.className = 'py-2 px-4 border-b';
        fila.appendChild(celdaValorTotal);
  
        const celdaEstado = document.createElement('td');
        celdaEstado.innerText = producto.estado;
        celdaEstado.className = 'py-2 px-4 border-b';
        fila.appendChild(celdaEstado);
  
        productosTableBody.appendChild(fila);
      });
    }
  });