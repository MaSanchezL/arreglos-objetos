const propiedades_venta = [
  {
    imagen:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    titulo: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    precio: 5000,
    restricciones: {
      fumar: false,
      mascotas: false,
    },
  },
  {
    imagen:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    titulo: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    direccion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    precio: 1200,
    restricciones: {
      fumar: true,
      mascotas: true,
    },
  },
  {
    imagen:
      "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    titulo: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    direccion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    precio: 4500,
    restricciones: {
      fumar: false,
      mascotas: true,
    },
  },
  {
    imagen: "https://raw.githubusercontent.com/MaSanchezL/arreglos-objetos/refs/heads/main/assets/img/moderna.webp",
    titulo: "Casa moderna con vista al lago",
    descripcion:
      "Esta casa moderna ofrece vistas al lago y amplios espacios interiores.",
    direccion: "345 Lakeview Drive, Lakeside, CA 67890",
    habitaciones: 5,
    baños: 4,
    precio: 6500,
    restricciones: {
      fumar: true,
      mascotas: false,
    },
  },
  {
    imagen: "https://raw.githubusercontent.com/MaSanchezL/arreglos-objetos/refs/heads/main/assets/img/mansion.webp",
    titulo: "Mansión colonial en el campo",
    descripcion:
      "Esta mansión colonial está ubicada en un entorno rural tranquilo con amplios jardines.",
    direccion: "987 Country Road, Green Hills, TX 54321",
    habitaciones: 6,
    baños: 5,
    precio: 8000,
    restricciones: {
      fumar: false,
      mascotas: true,
    },
  },
  {
    imagen: "https://raw.githubusercontent.com/MaSanchezL/arreglos-objetos/refs/heads/main/assets/img/rustica.webp",
    titulo: "Cabaña rústica en el bosque",
    descripcion:
      "Una acogedora cabaña rústica rodeada de naturaleza en un hermoso bosque.",
    direccion: "234 Forest Path, Woodland Retreat, OR 67812",
    habitaciones: 3,
    baños: 2,
    precio: 3000,
    restricciones: {
      fumar: true,
      mascotas: true,
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

function presentarInmueblesVentas(cantidad = 0, divSelector) {
  const divInmuebles = document.querySelector(divSelector);
  let htmlInmuebles = "";
  htmlInmuebles = `<div class="row">`;

  const propiedades =
    cantidad === 0 ? propiedades_venta : propiedades_venta.slice(0, cantidad);

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

