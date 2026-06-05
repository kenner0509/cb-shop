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
        e.preventDefault();

        if (!form.checkValidity()) {
            mostrarToast("Completa todos los campos correctamente ❌");
            return;
        }

        mostrarToast("¡Gracias por responder la encuesta! ✅");

        form.reset();
    });

});

// CERRAR CARRITO
function cerrarCarrito(){
    document.getElementById("cartPanel").classList.remove("active");
}