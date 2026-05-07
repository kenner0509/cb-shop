document.addEventListener("DOMContentLoaded", () => {

    let carrito = [];
    const toast = document.getElementById("toast");
    const cartPanel = document.getElementById("cartPanel");
    const cartItems = document.getElementById("cartItems");
    const total = document.getElementById("total");

    // TOAST 
    function mostrarToast(mensaje){
        toast.textContent = mensaje;
        toast.classList.add("show");

        setTimeout(()=>{
            toast.classList.remove("show");
        }, 2500);
    }

    // CARRITO 
    function actualizarCarrito(){
        cartItems.innerHTML = "";
        let totalPrecio = 0;

        carrito.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
                <span>${item.nombre}</span>
                <span>C$${item.precio}</span>
            `;
            cartItems.appendChild(div);

            totalPrecio += item.precio;
        });

        total.textContent = "Total: C$" + totalPrecio;
    }

    const botones = document.querySelectorAll(".card button");

    botones.forEach(btn => {
        btn.addEventListener("click", () => {

            const card = btn.parentElement;
            const nombre = card.querySelector("h3").textContent;
            const precioTexto = card.querySelector("p").textContent;
            const precio = parseInt(precioTexto.replace("C$", ""));

            carrito.push({nombre, precio});

            mostrarToast("Producto agregado al carrito 🛒");
            actualizarCarrito();
        });
    });

    // ABRIR CARRITO
    document.querySelector(".fa-shopping-cart").addEventListener("click", () => {
        cartPanel.classList.add("active");
    });

    // FORMULARIO ENCUESTA
    const form = document.getElementById("formEncuesta");

    form.addEventListener("submit", (e) => {
        const listaComentarios = document.getElementById("listaComentarios");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
        mostrarToast("Completa todos los campos correctamente ❌");
        return;
    }

    // OBTENER DATOS
    const opinion = form.querySelector("textarea").value;
    const compra = form.querySelectorAll("select")[0].value;

    // CREAR TARJETA
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${form.querySelector("input[type='email']").value}</h3>
        <p><strong>Compra frecuente:</strong> ${compra}</p>
        <p>"${opinion}"</p>
    `;

    
    listaComentarios.appendChild(card);

    mostrarToast("¡Gracias por tu opinión! ✅");
    form.reset();
});
    });

});

// CERRAR CARRITO
function cerrarCarrito(){
    document.getElementById("cartPanel").classList.remove("active");
}