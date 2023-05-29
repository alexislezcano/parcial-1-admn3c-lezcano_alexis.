 
 /* El componente formulario gestiona los datos relacionados a las tareas.
 usa estas propiedades para almacenar información, por otra parte son utilizadas para capturar y manipular los datos ingresados en el formulario.
 */
 Vue.component('formulario', {
    data:function(){
      return {
        tarea: '',
        check: true,
        string: true,
        lista: [],
        ingreso: null
      }
    },
  

    /* El template representa la estructura y se utiliza para mostrar y gestionar una lista de tareas.
    El template permite interactuar con una lista de tareas incluye un formulario, una tabla para mostrar tareas como completadas y eliminarlas.
    
    */
    template: `
      <div>
        <div class="d-flex mt-5">
          <input v-model="tarea" class="form-control me-2 bg-sutext-light" type="text" placeholder="Ingrese una nueva tarea"
            aria-label="Nueva tarea">
          <button type="button" class="btn bg-success text-light" @click="ingresarTarea">Añadir</button>
        </div>
  
  
        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">TAREAS</th>
              <th scope="col" class="text-center">COMPLETADAS</th>
              <th scope="col" class="text-center">ELIMINAR</th>
            </tr>
          </thead>
    
          <template v-if="string">
            <p>Añade alguna tarea</p>
          </template>

          <template v-else>
            <tbody>
              <tr v-for="(tarea, index) in lista" :key="index" :class="tarea.prioridad" class="mb-3">
                <th scope="row">{{tarea.comentario | primerLetra}}</th>
    
                <td>
                <input type="checkbox" class="form-check-input botones">
                </td>
    
                <td>
                  <div class="text-center">
                    <button type="button" class="btn text-center" @click="eliminarTarea">
                      <img src="img/eliminar.png" class="img-eliminar text-center" alt="img de eliminar"></img>
                    </button>
                  </div>
                  
                </td>
    
              </tr>
            </tbody>
          </template>
        </table>
    </div>
    
    `,

    

    /* El método ingresarTarea se utiliza para agregar una tarea a una lista. En primer lugar, verifica si no se ha ingresado ningún valor para la tarea y establece una propiedad check en false. Si el valor de entrada relacionado con la tarea es null, se agrega un nuevo objeto a la lista con un comentario igual al valor de la tarea ingresada. Si hay una condición relacionada con la tarea, se actualiza el comentario de la primera tarea en la lista. 
    El método eliminarTarea elimina una tarea de la lista según el índice proporcionado mediante el uso del método splice. */
  
    methods: {
      ingresarTarea: function() {
        if (this.tarea.length === 0) {
          this.check = false
          return
        }
  
        if (this.ingreso == null) {
          this.check = true
          this.string = false
          this.lista.push({
            comentario: this.tarea
          })
          this.tarea = ''
        } else {
          this.lista.comentario = this.tarea;
          this.tarea = ''
        }
      },
  
      eliminarTarea: function(index) {
        this.lista.splice(index, 1)
      },

    },


  
    /* primerLetra Verifica si el valor es nulo o indefinido. Si es así, retorna una cadena vacía ('').
    Convierte el valor a una cadena de texto utilizando el método toString().
    Capitaliza la primera letra del valor utilizando el método charAt(0).toUpperCase(), que devuelve la primera letra en mayúscula.
    Luego, utiliza el método slice(1) para obtener el resto del valor desde el segundo carácter en adelante.
    Finalmente, retorna el valor modificado con la primera letra en mayúscula.*/
    filters: {
      primerLetra: function(value) {
        if (!value) return '',
          value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
    
  })
  
  // Representa el encabezado del HTML.
  Vue.component('vue-header', {
    template: `
    <div>
      <header>
      <img src="img/fondo.png" alt="imagen de fondo">
      </header>
    </div>
    `
  })
  
  // Pie de página del HTML.
  Vue.component('vue-footer' , {
    template: `
    <div>
      <footer class="py-3 my-10">
        <p class="text-center bg-dark text-light">Alexis Lezcano</p>
      </footer>
    </div>
    `
  })
  
  // Título de mi página web.
  var app = new Vue({
    el: "#app",
    data: {
      titulo: 'LISTA DE TAREAS'
    },
  })

  