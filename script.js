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

    // FORMULARIO ENCUESTA
    const form = document.getElementById("formEncuesta");
    const listaComentarios = document.getElementById("listaComentarios");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        if (!form.checkValidity()) {
            mostrarToast("Completa todos los campos correctamente ❌");
            return;
        }

        // OBTENER DATOS
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const edad = document.getElementById("edad").value;

        const compra = form.querySelectorAll("select")[0].value;
        const opinion = form.querySelector("textarea").value;

        // CREAR TARJETA
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${nombre} ${apellido}</h3>
            <p><strong>Edad:</strong> ${edad} años</p>
            <p><strong>Compra frecuente:</strong> ${compra}</p>
            <p>"${opinion}"</p>
        `;

        // AGREGAR COMENTARIO
        listaComentarios.appendChild(card);

        mostrarToast("¡Gracias por tu opinión! ✅");

        form.reset();
    });

});
