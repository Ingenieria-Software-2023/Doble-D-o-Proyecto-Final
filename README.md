# Doble-Dúo-Proyecto-Final
Repositorio del equipo Doble Dúo
- [Metodologia](#Metodologia)
- [Casos de uso](#Casos-de-uso)
- [Arquitectura](#Arquitectura)
  
## Metodologia 
Dada la naturaleza de los requerimientos presentados, una metodología de desarrollo ágil sería la más adecuada. Entre las metodologías Agiles, consideramos que Scrum es la mejor para este proyecto.

La metodologia Scrum promueve una colaboración constante con el cliente. Esto significa que podemos definir y ajustar los requerimientos a lo largo del proyecto, asegurando que la aplicación cumpla con las expectativas y necesidades del usuario final. Ademas, dado que Agile se centra en iteraciones rápidas, se puede desarrollar y probar la aplicación en diferentes plataformas (iOS y Android) de manera simultánea, garantizando una interfaz adaptativa y amigable. 

En cuestion de la aplicación, esta metodologia nos ayuda ya que podemos comenzar con un catálogo básico y expandirlo o modificarlo en sprints posteriores, basándonos en los comentarios de los usuarios y en las tendencias del mercado. Tambien, podemos integrar una variedad de métodos de pago y adaptarse a los cambios en las tecnologías de pago, como las criptomonedas.

Finalmente para la dinamica del trabajo, se implementaria el uso de sprints. Al inicio de cada sprint, se lleva a cabo una reunión de planificación donde el equipo seleccionara las tareas del backlog (lista de pendientes) para trabajar durante ese sprint. Esta reunión puede durar bastante tiempo. Normalmente, los sprints duran entre 2 y 4 semanas. Este período es suficiente para desarrollar y entregar una porción de trabajo significativa, pero es lo suficientemente corto para permitir una rápida adaptación a los cambios. En adición, durante un sprint, el equipo de desarrollo debe realizar reuniones diarias, generalmente de no más de 15 minutos. En estas reuniones, los miembros del equipo discuten lo que hicieron el día anterior, lo que planean hacer ese día y cualquier obstáculo que puedan estar enfrentando. Al final de cada sprint, se realiza una revisión de sprint. Esta es una oportunidad para recibir retroalimentación y ajustar los planes para los próximos sprints.


## Casos de uso

### Plataformas y Usabilidad:

#### Caso de Uso: App en Android sin Cuenta Vinculada

Descripción: Este caso de uso es completo y considera la situación en la que un usuario de Android no tiene una cuenta vinculada. Proporciona opciones claras para iniciar sesión con usuario y contraseña, utilizar una cuenta de Google o crear una nueva cuenta. Este enfoque facilita la experiencia del usuario y promueve la accesibilidad.

#### Caso de Uso: App en iOS sin Cuenta Vinculada

Descripción: Similar al caso de Android, este caso de uso aborda la situación de un usuario en iOS sin una cuenta vinculada. También proporciona opciones claras para el inicio de sesión y la creación de cuenta, adaptándose a las convenciones de inicio de sesión de iOS, como el uso de cuentas de iCloud. Esto contribuye a una experiencia consistente en ambas plataformas.

#### Caso de Uso: App con Cuenta Vinculada tanto en Android como en iOS

Descripción: Este caso de uso es eficiente al mostrar rápidamente una pantalla de bienvenida y luego dirigirse a la pantalla principal para la selección de bebidas. La sincronización de la experiencia entre Android e iOS, especialmente para usuarios con cuentas vinculadas, mejora la coherencia y la facilidad de uso.

### Catálogo de Bebidas:

#### Caso de Uso: Mostrar Bebidas

Descripción: Este caso de uso es claro en cuanto a la presentación de las bebidas de la más popular a la menos popular, lo que facilita la experiencia del usuario al encontrar las bebidas más cotidianas. Asegúrate de que la presentación de las bebidas sea intuitiva y que la información relevante sea visible para los usuarios.

#### Caso de Uso: Buscador de Bebidas

Descripción: Este caso de uso es útil para los usuarios que desean buscar bebidas específicas. La implementación de un buscador mejorará la experiencia del usuario al permitirles encontrar rápidamente lo que están buscando. Asegúrate de que el algoritmo de búsqueda sea efectivo y la interfaz sea fácil de usar.

#### Caso de Uso: Detalles de la Bebida

Descripción: Este caso de uso ofrece una visión detallada de una bebida seleccionada, proporcionando información clave como descripción y precio. La inclusión de botones para agregar directamente al carrito y personalizar la bebida es una buena adición, ya que agiliza el proceso de pedido y permite opciones de personalización. Asegúrate de que la información presentada sea suficiente y relevante para el usuario.

### Métodos de Pago: Al usuario se le presentaron 3 maneras principalmente de pagar su pedido: Pago con tarjeta, criptomonedas y efectivo.

#### Caso de Uso: Pago con Tarjeta

Descripción: Este caso de uso es claro en cuanto a la opción de pago con tarjeta, ya sea ingresando nuevos datos bancarios o seleccionando una tarjeta previamente guardada. La posibilidad de guardar múltiples tarjetas y la activación de la casilla para futuras cuentas son características útiles y brindan flexibilidad al usuario.

### Caso de Uso: Criptomonedas

Descripción: Este caso de uso aborda la opción de pago con criptomonedas de manera efectiva. El proceso de redireccionar al usuario a una página de transferencia desde su propia billetera es una práctica común. La validación a través de la muestra de transferencia al recibir el café es un buen enfoque para garantizar la confirmación del pago.

#### Caso de Uso: Efectivo

Descripción: Este caso de uso considera el pago en efectivo de manera práctica. El envío de un mensaje al cajero/cajera con la información del pedido y el nombre del usuario facilita la coordinación del pago.

### Evaluación y Retroalimentación: se evaluarán distintas características como: atención, los productos ordenados, limpieza del lugar, tiempo de entrega, etc… También se le dará la opción de que deje una nota al final de la evaluación la cual será evaluada para mejorar nuestro servicio o mantenerlo en caso de que sea una evaluación positiva.

#### Caso de Uso: Evaluación mediante Notificación

Descripción: Este caso de uso es efectivo al aprovechar el momento posterior a la entrega para solicitar la evaluación. La inclusión de diferentes parámetros a evaluar y la opción de agregar una nota adicional permiten recopilar información detallada sobre la experiencia del usuario. La retroalimentación constructiva y la posibilidad de mantener buenas prácticas son aspectos positivos.

#### Caso de Uso: Evaluación mediante Historial

Descripción: Este caso de uso es práctico al proporcionar otra oportunidad para que los usuarios evalúen sus experiencias pasadas. Utilizar el historial de pedidos como punto de acceso es conveniente, ya que algunos usuarios podrían preferir evaluar después de haber tenido tiempo de reflexión. La consistencia en la encuesta de evaluación es una buena práctica.

#### Caso de Uso Adicional: Retroalimentación Personalizada

Descripción: Los usuarios tendrán la opción de proporcionar retroalimentación personalizada en cualquier momento, no solo después de la entrega. En la sección de retroalimentación, podrán escribir comentarios específicos sobre aspectos que deseen destacar, sugerencias para mejorar, o cualquier otra información que deseen compartir. Esta retroalimentación personalizada se recopilará de manera anónima para su análisis.

### Personalización de Bebidas:

#### Caso de Uso: Personalización de Ingredientes

Descripción: Los usuarios podrán personalizar las bebidas seleccionando ingredientes específicos según sus preferencias. Por ejemplo, podrían elegir el tipo de leche (entera, descremada, vegetal), agregar algún saborizante o elegir entre opciones de azúcares. El sistema mostrará los cambios de precio en tiempo real a medida que el usuario personaliza su bebida.

#### Caso de Uso: Tamaño y Temperatura Personalizados

Descripción: Los usuarios podrán ajustar el tamaño de su bebida (pequeño, mediano, grande) y especificar la temperatura deseada (caliente, frío, temperatura ambiente). El sistema adaptará automáticamente el precio según las elecciones del usuario. Esta personalización permite a los clientes tener mayor control sobre aspectos clave de su bebida.

#### Caso de Uso: Guardar Perfiles de Personalización

Descripción: Los usuarios tendrán la opción de guardar perfiles de personalización para bebidas frecuentemente ordenadas. Por ejemplo, si un cliente siempre pide un café con leche de almendra y jarabe de vainilla, podrá guardar esta configuración como un perfil personalizado. Esto agiliza el proceso de pedido para futuras ocasiones, ya que pueden cargar rápidamente su configuración guardada.

## Arquitectura
La elección de una arquitectura de microservicios para el desarrollo de nuestra aplicación destinada a la cafetería de la universidad se basa en múltiples beneficios estratégicos y técnicos que esta arquitectura ofrece, especialmente adecuados para las necesidades dinámicas de nuestro entorno universitario.
Necesitamos una arquitectura con ciertas características para que su desarrollo sea el óptimo:

1.- Tenga un eficiente proceso de desarrollo: 
La arquitectura de microservicios permite que diferentes equipos trabajen en distintos servicios de manera independiente, lo que es crucial para nuestro equipo de desarrollo, compuesto por cinco integrantes. Cada miembro puede enfocarse en un servicio específico, optimizando el tiempo de desarrollo y facilitando un despliegue continuo y eficiente.

2.-Que se pueda subir fácilmente la información a la producción: 
La cafetería tiene las bebidas dependiendo de la disponibilidad de ingredientes, además se generan nuevas bebidas dependiendo de la temporada en la que nos encontremos, se necesita que sea fácil de añadir la nueva información a la aplicación.

3.-Que sea fácil de probar: 
Para entregar un buen producto se debe hacer una serie de pruebas para probar la funcionalidad individual y global del producto, que este dividido en servicios hace más fácil esta serie de pruebas, además tiene una buena capacidad para manejar fallos de manera aislada. Un fallo en un servicio no compromete la integridad de la aplicación completa, asegurando una mayor disponibilidad y confiabilidad del sistema. 

4.-Que pueda ser escalable: 
Esto es particularmente importante para adaptarse a las variaciones en la demanda de los usuarios, que pueden fluctuar considerablemente, por ejemplo, durante los exámenes o eventos especiales en el campus, además de que la cantidad de posibles usuarios esta sujeta a la cantidad de estudiantes que ingreses y egresen de la universidad

5.- Fácil de desarrollar: 
Se tenía un tiempo limitado para entregar este proyecto, entonces se buscó que su desarrollo fuera fácil para poder agregar todas las funcionalidades que se necesitarán, además de que se obtendría un mejor resultado 

6.-Mejorar la experiencia de ususario
La arquitectura de microservicios nos permite realizar actualizaciones y mejoras con mínima interrupción para el usuario, lo que garantiza una experiencia de usuario fluida y continua.

El siguiente diagrama es el que se utilizó como referencia para desarrollarlo, en donde los client requests se efectúan al ingresar a la aplicación, pedir una bebida o hacer el pago. De todas estos requests se van a responder en la aplicación con los diferentes servicios que se necesitan para dar estas funcionalidades.
![image](https://github.com/Ingenieria-Software-2023/Doble-Duo-Proyecto-Final/assets/91972908/e0d16335-bb13-4ac6-a81e-633d5864cefd)

 



