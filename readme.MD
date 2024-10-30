


### 1. **Crear una cabina**
   - **Método**: `POST`
   - **Endpoint**: `/api/cabinas/crear`
   - **Descripción**: Crea una nueva cabina con los datos proporcionados.
   - **Body (JSON)**:
     ```json
     {
       "identificador": "C1",
       "capacidadMaxima": 6
     }
     ```
   - **Respuesta**: Devuelve el objeto de la cabina creada.

---

### 2. **Eliminar una cabina**
   - **Método**: `DELETE`
   - **Endpoint**: `/api/cabinas/:id`
   - **Descripción**: Elimina una cabina específica según su ID.
   - **Parámetros en URL**:
     - `id` (string): El ID de la cabina a eliminar.
   - **Respuesta**: Mensaje de confirmación de eliminación.

---

### 3. **Mover una cabina**
   - **Método**: `PUT`
   - **Endpoint**: `/api/cabinas/mover/:id`
   - **Descripción**: Actualiza la posición de una cabina específica.
   - **Parámetros en URL**:
     - `id` (string): El ID de la cabina que se va a mover.
   - **Body (JSON)**:
     ```json
     {
       "nuevaPosicion": "Estacion A"
     }
     ```
   - **Respuesta**: Devuelve el objeto de la cabina con la nueva posición.

---

### 4. **Mover una cabina entre estaciones**
   - **Método**: `PUT`
   - **Endpoint**: `/api/cabinas/mover-entre-estaciones/:id`
   - **Descripción**: Mueve una cabina de una estación a otra.
   - **Parámetros en URL**:
     - `id` (string): El ID de la cabina que se va a mover.
   - **Body (JSON)**:
     ```json
     {
       "estacionOrigen": "Estacion A",
       "estacionDestino": "Estacion B"
     }
     ```
   - **Respuesta**: Devuelve el objeto de la cabina con la nueva estación.

---

### 5. **Verificar la disponibilidad de una cabina**
   - **Método**: `GET`
   - **Endpoint**: `/api/cabinas/disponibilidad/:id`
   - **Descripción**: Verifica si una cabina específica está disponible.
   - **Parámetros en URL**:
     - `id` (string): El ID de la cabina que se quiere verificar.
   - **Respuesta**: Devuelve un mensaje de disponibilidad de la cabina.

---

### 6. **Obtener todas las cabinas**
   - **Método**: `GET`
   - **Endpoint**: `/api/cabinas/`
   - **Descripción**: Obtiene una lista de todas las cabinas almacenadas en la base de datos.
   - **Respuesta**: Devuelve un array con todas las cabinas.

---

Esta documentación cubre las rutas y los datos esperados en cada una. Puedes probarlas en Thunder Client o Postman para verificar que todo esté funcionando correctamente.

en el .env puedes colocar esta informacion
MONGO_URI=mongodb://mongo:VpxbvqMzmpgfBFZGHKmdLykHgyHpnrTt@autorack.proxy.rlwy.net:37717
PORT=3000
