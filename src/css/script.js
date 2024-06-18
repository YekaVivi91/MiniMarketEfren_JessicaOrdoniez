// Función para agregar un producto al array
function agregarProducto(nombre, precio, cantidad) {
    // Validar datos de entrada
    if (!nombre) {
      alert('Error: El nombre del producto no puede estar vacío.');
      return false;
    }
  
    if (precio <= 0) {
      alert('Error: El precio por unidad debe ser un número mayor que cero.');
      return false;
    }
  
    if (cantidad < 0) {
      alert('Error: La cantidad en inventario debe ser un número entero mayor o igual que cero.');
      return false;
    }
  
    // Crear objeto producto
    const producto = {
      nombre: nombre,
      precioUnidad: precio,
      cantidadInventario: cantidad,
      valorTotal: precio * cantidad,
      estado: cantidad > 0 ? 'Stock' : 'Agotado'
    };
  
    // Agregar producto al array
    productos.push(producto);
  
    // Actualizar tabla de productos
    actualizarTablaProductos();
  
    return true;
  }
  
  // Función para actualizar la tabla de productos
  function actualizarTablaProductos() {
    const productosTableBody = productosTable.querySelector('tbody');
    productosTableBody.innerHTML = ''; // Limpiar contenido actual
  
    productos.forEach((producto) => {
      const fila = productosTableBody.insertRow();
  
      const nombreCelda = fila.insertCell();
      nombreCelda.textContent = producto.nombre;
  
      const precioCelda = fila.insertCell();
      precioCelda.textContent = producto.precioUnidad.toFixed(2);
  
      const cantidadCelda = fila.insertCell();
      cantidadCelda.textContent = producto.cantidadInventario;
  
      const valorTotalCelda = fila.insertCell();
      valorTotalCelda.textContent = producto.valorTotal.toFixed(2);
  
      const estadoCelda = fila.insertCell();
      estadoCelda.textContent = producto.estado;
    });
  }
  
  // Evento submit del formulario
  productoForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const nombreProducto = document.getElementById('nombreProducto').value.trim();
    const precioUnidad = parseFloat(document.getElementById('precioUnidad').value);
    const cantidadInventario = parseInt(document.getElementById('cantidadInventario').value);
  
    if (agregarProducto(nombreProducto, precioUnidad, cantidadInventario)) {
      productoForm.reset(); // Limpiar formulario
    }
  });
  