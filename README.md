# API REST para Concesionaria de Vehículos

## Descripción

Este proyecto es una API REST desarrollada como trabajo práctico que sigue los principios SOLID. La API gestiona tanto vehículos como clientes, permitiendo crear, buscar, actualizar y eliminar vehículos y clientes, así como aplicar descuentos a los precios de los vehículos. No se requiere conexión a una base de datos real, ya que las acciones se realizan sobre un array simulado.

## Principios SOLID aplicados

1. Single Responsibility Principle (SRP):

    - Separación de responsabilidades en Controladores, Servicios y Repositorios para vehículos y clientes.

2. Open/Closed Principle (OCP):
    - Extensión de la funcionalidad de aplicar descuentos en los precios de los vehículos sin modificar la clase VehicleService original.

3. Liskov Substitution Principle (LSP):
    - Implementación de dos repositorios diferentes para manejar vehículos y clientes (uno simulado para MongoDB y otro para Postgres), los cuales pueden ser usados sin modificar los servicios.

4. Interface Segregation Principle (ISP):
    - Separación de interfaces para las operaciones de vehículos y clientes (IVehicleRepository, IClientRepository).

5. Dependency Inversion Principle (DIP):
    - Los servicios dependen de interfaces (repositorios) en lugar de implementaciones concretas, facilitando la inyección de dependencias.


## Estructura del Proyecto


```bash
/src
  /config
    - environments.ts
  /controllers
    - ClientController.ts
    - VehicleController.ts
  /interfaces
    - IClientRepository.ts
    - IVehicleRepository.ts
  /models
    - Client.model.ts
    - Vehicle.model.ts
  /repositories
    - ClientRepositoryMongo.ts
    - ClientRepositoryPostgres.ts
    - VehicleRepositoryMongo.ts
    - VehicleRepositoryPostgres.ts
  /routes
    - Clients.routes.ts
    - Vehicles.routes.ts
  /services
    - ClientService.ts
    - VehicleService.ts
  app.ts

index.ts
```

## Uso de la API

### Rutas de Clientes

- POST /api/clients: Crear un nuevo cliente.
- GET /api/clients/:id Obtener un cliente por ID.
- PUT /api/clients/:id Actualizar un cliente.
- DELETE /api/clients/:id Eliminar un cliente.

### Rutas de Vehículos

- POST /api/vehicles: Crear un nuevo vehículo.
- GET /api/vehicles/:id Obtener un vehículo por ID.
- PUT /api/vehicles/:id Actualizar un vehículo.
- DELETE /api/vehicles/:id Eliminar un vehículo.
- POST /api/vehicles/discount: Aplicar un descuento a un vehículo.

## Tecnologías Utilizadas

- Node.js: Plataforma de desarrollo.
- Express: Framework para crear el servidor y manejar las rutas.
- TypeScript: Para una escritura tipada del código.
- Principios SOLID: Para mantener el código modular y mantenible

## Próximos pasos

- Implementar autenticación y autorización.
- Conectar la API con una base de datos real (MongoDB o PostgreSQL).
- Añadir validaciones más robustas para las entradas de datos.