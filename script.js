function comprobarCodigo() {

    const codigoCorrecto = "170821140917010914101097230592040384";

    const codigoIntroducido = document.getElementById("codigo").value;

    document.getElementById("video").style.display = "none";

    if (codigoIntroducido === codigoCorrecto) {

        document.getElementById("mensaje").innerHTML =
            "COMPROBANDO REGISTROS...";

        setTimeout(function () {

            document.getElementById("mensaje").innerHTML +=
                "<br><br>██████████████ 100%";

        }, 1000);

        setTimeout(function () {

            document.getElementById("mensaje").innerHTML +=
                "<br><br>VERIFICANDO IDENTIDADES...";

        }, 2000);

        setTimeout(function () {

            document.getElementById("mensaje").innerHTML +=
                "<br><br>ACCESO CONCEDIDO.";

        }, 3000);

        setTimeout(function () {

            document.getElementById("mensaje").innerHTML +=
                "<br><br>RECUPERANDO MENSAJE DE BIENVENIDA...";

        }, 5000);

        setTimeout(function () {

            document.getElementById("mensaje").innerHTML +=
                "<br><br>Buscando archivos...";

        }, 6500);

        setTimeout(function () {

            document.getElementById("mensaje").innerHTML +=
                "<br><br>Archivo encontrado:<br>LS_WELCOME_1986.mp4";

        }, 8000);

        setTimeout(function () {

            document.getElementById("mensaje").innerHTML +=
                "<br><br>Abriendo archivo...";

        }, 9500);

        setTimeout(function () {

            document.getElementById("video").style.display = "block";

        }, 11000);

    } else {

        document.getElementById("mensaje").innerHTML =
            "ERROR<br><br>Las ID introducidas no son correctas.";

    }

}