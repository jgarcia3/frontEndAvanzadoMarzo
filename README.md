# Arrancar la base de datos (recordatorio)

./bin/mongod --dbpath ./data/db --directoryperdb

## Configuración

Tras clonar el repositoriose debe crear un fichero .env con las variables de configuración.

Hay un ejemplo de estas variables en .env.example


## Verificar el token

para verificar que el token funciona con éxito, introducir la siguiente dirección en el browser (posiblemente el token haya expirado, en ese caso, usar postman para generar nuevo token):

http://localhost:3000/apiv1/productos?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWFlNGM3N2FhNDc2NzBiZWQzYWRlNWYiLCJpYXQiOjE1MjI0OTA5MjEsImV4cCI6MTUyMjY2MzcyMX0.TSfOMzJt7X3FJOwbQwmk1W5zhHy6KQR-C6FgNIQajfE

## Datos a postman para generar nuevo token

en postman, hacer un POST a la dirección http://localhost:3000/loginJWT en el Body, pinchando en x-www-form-urlencoded, e introduciendo los siguientes datos:

- email: admin@example.com
- password: 1234
