function salvar() {
    $.ajax({
        type: "POST",
        url: "https://localhost:44332/API/Filiais.asmx/SalvarFilial",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            limparCampos();
            carregarFiliais();
        },
        failure: function (msg) { alert(msg); },
        data: JSON.stringify({
            CodigoEmpresa: getCodigoEmpresa(),
            fil: {
                Codigo: $("#txt_Codigo").val(),
                CNPJ: $("#txt_CNPJ").val(),
                Razao_Social: $("#txt_Razao_Social").val(),
                Nome_Fantasia: $("#txt_Nome_Fantasia").val(),
                Inscricao_Estadual: $("#txt_IE").val(),
                CEP: $("#txt_CEP").val(),
                DDD: $("#txt_DDD").val(),
                Telefone: $("#txt_Telefone").val(),
                Endereco: $("#txt_Endereco").val(),
                Numero: $("#txt_Numero").val(),
                Bairro: $("#txt_Bairro").val(),
                Cidade: $("#txt_Cidade").val(),
                Estado: $("#txt_UF").val(),
            },
        })
    });
}

function limparCampos() {
    $("#txt_Codigo").val("");
    $("#txt_CNPJ").val("");
    $("#txt_Razao_Social").val("");
    $("#txt_Nome_Fantasia").val("");
    $("#txt_IE").val("");
    $("#txt_CEP").val("");
    $("#txt_DDD").val("");
    $("#txt_Telefone").val("");
    $("#txt_Endereco").val("");
    $("#txt_Numero").val("");
    $("#txt_Bairro").val("");
    $("#txt_Cidade").val("");
    $("#txt_UF").val("");
}

function carregarFiliais() {
    $.ajax({
        type: "GET",
        url: "https://localhost:44332/API/Filiais.asmx/ListarFiliais",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#grid_empresas tbody").html("");
            var filiais = data.d;
            for (var i = 0; i < filiais.length; i++) {
                $("#grid_empresas tbody").append("<tr>" +
                    "<td>" + filiais[i].Codigo + "</td>" +
                    "<td>" + filiais[i].Nome_Fantasia + "</td>" +
                    "<td>" + filiais[i].Telefone + "</td>" +
                    "<td>" + filiais[i].CNPJ + "</td>" +
                    "<td>" +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-primary btn-editar' " +
                    "         data-codigo='" + filiais[i].Codigo + "'" +
                    ">Editar</button> " +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-danger btn-remover' " +
                    "         data-codigo='" + filiais[i].Codigo + "'" +
                    ">Remover</button > " +
                    "</td > " +
                    "</tr>");
            }
            adicionaEventoEditar();
            adicionaEventoRemover();
        },
        failure: function (msg) { alert(msg); },
        data: { CodigoEmpresa: getCodigoEmpresa() }
    });
}

function adicionaEventoEditar() {
    $(document).on("click", ".btn-editar", function () {
        var codigo = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Filiais.asmx/GetFilial",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var Filial = data.d;
                $("#txt_Codigo").val(Filial.Codigo);
                $("#txt_CNPJ").val(Filial.CNPJ);
                $("#txt_Razao_Social").val(Filial.Razao_Social);
                $("#txt_Nome_Fantasia").val(Filial.Nome_Fantasia);
                $("#txt_IE").val(Filial.Inscricao_Estadual);
                $("#txt_CEP").val(Filial.CEP);
                $("#txt_DDD").val(Filial.DDD);
                $("#txt_Telefone").val(Filial.Telefone);;
                $("#txt_Endereco").val(Filial.Endereco);
                $("#txt_Numero").val(Filial.Numero);
                $("#txt_Bairro").val(Filial.Bairro);
                $("#txt_Cidade").val(Filial.Cidade);
                $("#txt_UF").val(Filial.Estado);
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({ CodigoEmpresa: getCodigoEmpresa(), Codigo: codigo })
        });
    });
}

function adicionaEventoRemover() {
    $(document).on("click", ".btn-remover", function () {
        var codigo = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Filiais.asmx/Remover",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                carregarFiliais();
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({ CodigoEmpresa: getCodigoEmpresa(), Codigo: codigo })
        });
    });
}

$(document).ready(function () {
    carregarFiliais();

    $(document).on("click", "#btn_salvar", salvar);
});

$(document).ready(function () {
    function limpa_formulário_cep() {
        $("#txt_DDD").val("");
        $("#txt_UF").val("");
        $("#txt_Endereco").val("");
        $("#txt_Bairro").val("");
        $("#txt_Cidade").val("");
    }
    $("#txt_CEP").blur(function () {
        var cep = $(this).val().replace(/\D/g, '');
        if (cep != "") {
            var validacep = /^[0-9]{8}$/;
            if (validacep.test(cep)) {
                $("#txt_DDD").val("...");
                $("#txt_UF").val("...");
                $("#txt_Endereco").val("...");
                $("#txt_Bairro").val("...");
                $("#txt_Cidade").val("...");
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {
                    if (!("erro" in dados)) {
                        $("#txt_DDD").val(dados.ddd);
                        $("#txt_UF").val(dados.uf);
                        $("#txt_Endereco").val(dados.logradouro);
                        $("#txt_Bairro").val(dados.bairro);
                        $("#txt_Cidade").val(dados.localidade);
                    }
                    else {
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            }
            else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {
            limpa_formulário_cep();
        }
    });
});

function getCodigoEmpresa() {
    return new URLSearchParams(window.location.search).get("codigoEmpresa");
}