function autenticarUsuario() {
    $.ajax({
        type: "POST",
        url: "https://localhost:44332/Login.aspx/autenticar",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d == "OK") {
                window.location.href = $("#form1").attr("app_url") +
                    "/Pages/CadastroProduto.aspx";
            }
        },
        failure: function (msg) { alert("Sorry!!! "); },
        data: JSON.stringify({
            usuario: $("#ovTXT_Usuario").val(),
            senha: $("#ovTXT_Senha").val(),
        })
    });
}

$(document).ready(function () {
    $(document).on("click", "#ovBTN_Login", autenticarUsuario);
});