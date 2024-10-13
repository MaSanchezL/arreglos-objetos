const propiedades_alquiler = [
  {
    imagen:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    precio: 2000,
    restricciones: {
      fumar: false,
      mascotas: true,
    },
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    titulo: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    precio: 2500,
    restricciones: {
      fumar: true,
      mascotas: true,
    },
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    titulo: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    direccion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    precio: 2200,
    restricciones: {
      fumar: false,
      mascotas: false,
    },
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVudGhvdXNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Penthouse de lujo con piscina privada",
    descripcion:
      "Un penthouse de lujo en la ciudad con su propia piscina privada y vistas panorámicas.",
    direccion: "789 Skyview Blvd, Downtown, CA 91234",
    habitaciones: 4,
    baños: 4,
    precio: 5500,
    restricciones: {
      fumar: true,
      mascotas: true,
    },
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    titulo: "Apartamento minimalista en zona tranquila",
    descripcion:
      "Un apartamento moderno y minimalista en una tranquila área residencial, perfecto para relajarse.",
    direccion: "321 Peaceful Lane, Quiet Town, CA 91011",
    habitaciones: 2,
    baños: 2,
    precio: 1800,
    restricciones: {
      fumar: false,
      mascotas: false,
    },
  },
  {
    imagen:
      "../../assets/img/loft.jpg",
    titulo: "Loft industrial en el centro de la ciudad",
    descripcion:
      "Un elegante loft de estilo industrial, ideal para quienes buscan un ambiente moderno en el centro.",
    direccion: "987 Industrial St, City Center, CA 91210",
    habitaciones: 3,
    baños: 2,
    precio: 2300,
    restricciones: {
      fumar: true,
      mascotas: false,
    },
  },
];
function presentaInmueble(inmueble) {
  let htmlInmueble = `
  <div class="card">
    <img src="${inmueble.imagen}"  class="card-img-top" >
    <div class="card-body">
      <h2 class="card-title">${inmueble.titulo}</h2>
      <p class="card-text">${inmueble.descripcion}</p>
      <p> <i class="fas fa-bed"></i> : ${inmueble.habitaciones} Habitaciones - <i class="fas fa-bath"></i> : ${inmueble.baños} Baños</p>
      <p> Precio: <i class="fas fa-dollar-sign"></i>${inmueble.precio}</p>
    `;

  if (inmueble.restricciones.mascotas === true) {
    htmlInmueble += `<p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>`;
  } else {
    htmlInmueble += `<p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>`;
  }

  if (inmueble.restricciones.fumar === true) {
    htmlInmueble += `<p class="text-success">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>`;
  } else {
    htmlInmueble += `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`;
  }
  htmlInmueble += "</div></div>";
  // console.log("inmueble individual", htmlInmueble);
  return htmlInmueble;
}
function presentarInmueblesAlquiler(cantidad = 0, divSelector) {
  const divInmuebles = document.querySelector(divSelector);
  let htmlInmuebles = "";
  htmlInmuebles = `<div class="row">`;

  const propiedades =
    cantidad === 0 ? propiedades_alquiler : propiedades_alquiler.slice(0, cantidad);

  for (let objetoInmueble of propiedades) {
    const divInmueble = presentaInmueble(objetoInmueble);

    htmlInmuebles += `
      
    <div class="col-md-4 mt-4 mb-4">
  
        ${divInmueble}
  
    </div>
      `;
  }
  htmlInmuebles += "</div>";
  // console.log("htmlFinal",htmlInmuebles)
  divInmuebles.innerHTML = htmlInmuebles;
}