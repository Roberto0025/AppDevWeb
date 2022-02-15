$(document).ready(function () {
    $(document).on("click", "#btn_limpar", limparCep);
    $(document).on("click", "#btn_consultar", consultaCep);
});

function limparCep() {

}

function consultaCep() {
    var CepInformado = $("#txt_cep").val();
    var UrlViaCep = "https://viacep.com.br/ws/{cep}/json/";

    $.ajax({
        type: "GET",
        url: UrlViaCep.replace("{cep}", CepInformado),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var objCep = data;
            $("#txt_logradouro").val(objCep.logradouro);
        }
    });
}