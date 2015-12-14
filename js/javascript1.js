window.addEventListener('load', function () {
    var intputElements = document.getElementsByTagName("input");
    for (var i = 0; i < intputElements.length; i++) {
        intputElements[i].oninvalid = function (e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                if (e.target.name == "usuario") {
                    e.target.setCustomValidity('Debes rellenar el campo "Nombre"');
                }
                else {
                    e.target.setCustomValidity('Debes rellenar el campo "Contraseña"');
                }
            }
        };
    }
});