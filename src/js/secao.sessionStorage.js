function atualizaStatus() {
    var status, 
        typeStatus,
        contadorOffline;

    status = null;
    typeStatus = null;
    alertStatus = null;
    contadorOffline = sessionStorage.getItem('offline') || 0;

    if (navigator.onLine) {
        typeStatus = "Online";
        status = "- Você pode criar, editar e salvar suas listas;";
        $("#onlineStatus .alert").removeClass("alert-danger");
        $("#onlineStatus .alert").addClass("alert-success");
    } else {
        typeStatus = "Offline";
        status = "- Crie ou edite suas listas de compras mesmo offline;";
        $("#onlineStatus .alert").removeClass("alert-success");
        $("#onlineStatus .alert").addClass("alert-danger");
        contadorOffline = sessionStorage.getItem('offline') || 0;
        contadorOffline = parseInt(contadorOffline) + 1;
        sessionStorage.setItem('offline', contadorOffline);
    }

    $("#onlineStatus .typeStatus").text(typeStatus);
    $("#onlineStatus .status").text(status);
    //$("#onlineStatus .quedas").text(contadorOffline);

}

$(window).on("online offline", atualizaStatus);
atualizaStatus();
