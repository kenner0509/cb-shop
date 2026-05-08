document.addEventListener("DOMContentLoaded", () => {

    const toast = document.getElementById("toast");

    // TOAST
    function mostrarToast(mensaje){
        toast.textContent = mensaje;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }

    // FORMULARIO
    const form = document.getElementById("formEncuesta");
    const listaComentarios = document.getElementById("listaComentarios");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        // OBTENER DATOS
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const opinion = document.getElementById("opinion").value;

        // CREAR TARJETA
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${nombre} ${apellido}</h3>
            <p>"${opinion}"</p>
        `;

        // AGREGAR TARJETA
        listaComentarios.appendChild(card);

        mostrarToast("¡Gracias por tu opinión! ✅");

        // LIMPIAR
        form.reset();
    });

});
