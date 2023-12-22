// if (typeof(Storage) !== "undefined") {
//     // Code for localStorage/sessionStorage.
//     console.log("Si se puede")
// // Store
// //localStorage.setItem("lastname", "Smith");
// //sessionStorage.setItem("nombre", "Roberto")

// // Retrieve
// ;


//   } else {
//     console.log(" Sorry! No Web Storage support..");
//   }


//   document.getElementById("result").innerHTML = localStorage.getItem("lastname")
//   document.getElementById("nombre").innerHTML = sessionStorage.getItem("nombre")



const Carrito = function () {
    let Nombre;
    let Ubicacion;
    let arrProductos=[];
    function cargarProductos(){
        arrProductos = [
            {
                nombre:"RX 78-2",
                descripcion : "El RX-78-2 Gundam es un robot tripulado ficticio, presentado en 1979 en la serie de anime Mobile Suit Gundam de Yoshiyuki Tomino y Sunrise.",
                precio: 200.00,
                img:"1.jpg"
            },
            {
                nombre:"Wing Gundam",
                descripcion : "Pilotado por Heero Yuy, es uno de los Gundams principales de la serie. Tiene la capacidad de transformarse entre su forma móvil y una forma más aerodinámica conocida como Bird Mode.",
                precio: 250.00,
                img:"2.jpg"
            },
            {
                nombre:"Gouf M'Quve",
                descripcion : "Él es un oficial de alto rango dentro de la fuerza militar de Zeon, y se desempeña como el comandante de las minas de asteroides de la colonia espacial Side 6. M'Quve es un estratega inteligente y astuto, aunque a veces también es retratado como un tanto arrogante.",
                precio: 199.99,
                img:"3.jpg"
            },
            {
                nombre:"Gouf",
                descripcion : "El Gouf es un Mobile Suit de combate producido por la Principality of Zeon en la serie original de \"Mobile Suit Gundam\". Es una unidad de alta movilidad y se considera un sucesor del Zaku II, con mejoras significativas en términos de potencia de fuego y agilidad.",
                precio: 180.00,
                img:"4.jpg"
            },
            {
                nombre:"Gundam Aerial",
                descripcion : "El XVX-016 Gundam Aerial es un mobile suit presentado en la serie Mobile Suit Gundam the Witch from Mercury. Es pilotado por Suletta Mercury.",
                precio: 150.00,
                img:"5.jpg"
            },
            {
                nombre:"Sazabi",
                descripcion : "El Sazabi es una unidad de combate muy grande y poderosa, que se destaca por su diseño elegante y su armamento pesado. Fue diseñado específicamente para Char Aznable por el ingeniero móvil móvil de renombre, Anaheim Electronics.",
                precio: 389.78,
                img:"6.jpg"
            }
            
        ]

    }
    function dibujarProductos(){
        let strHtml ="";
        arrProductos.forEach(element => {
            console.log(element)
            strHtml +=`<div class="col-md-3 col-sm-6">
            <div class="product-grid">
                <div class="product-image">
                    <a href="#">
                        <img class="pic-1" src="img/${element.img}">
                        <img class="pic-2" src="img/${element.img}">
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">Sale</span>
                    <span class="product-discount-label">20%</span>
                </div>
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star disable"></li>
                </ul>
                <div class="product-content">
                    <h3 class="title"><a href="#">${element.nombre}</a></h3>
                    
                    <div class="price">${element.precio}
                    </div>
                    <a class="add-to-cart" href="">+ Add To Cart</a>
                </div>
            </div>
        </div>`;
        });
        //console.log(strHtml)
        let divProductos = document.getElementById("productos");
        divProductos.innerHTML=strHtml;
    }
    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion = parametros.Ubicacion;
            cargarProductos();
            dibujarProductos();
            // eventos();
        },
    };
}();