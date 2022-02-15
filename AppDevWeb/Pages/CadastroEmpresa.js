function salvar() {
    $.ajax({
        type: "POST",
        url: "https://localhost:44332/API/Empresas.asmx/SalvarEmpresa",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            limparCampos();
            carregarEmpresas();
        },
        failure: function (msg) { alert(msg); },
        data: JSON.stringify({
            emp: {
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

function carregarEmpresas() {
    $.ajax({
        type: "GET",
        url: "https://localhost:44332/API/Empresas.asmx/ListarEmpresas",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#grid_empresas tbody").html("");
            var empresas = data.d;
            for (var i = 0; i < empresas.length; i++) {
                $("#grid_empresas tbody").append("<tr>" +
                    "<td>" + empresas[i].Codigo + "</td>" +
                    "<td>" + empresas[i].Nome_Fantasia + "</td>" +
                    "<td>" + empresas[i].Telefone + "</td>" +
                    "<td>" + empresas[i].CNPJ + "</td>" +
                    "<td>" +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-primary btn-editar' " +
                    "         data-codigo='" + empresas[i].Codigo + "'" +
                    ">Editar</button> " +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-danger btn-remover' " +
                    "         data-codigo='" + empresas[i].Codigo + "'" +
                    ">Remover</button > " +
                    " <a href='CadastroFilial.aspx?codigoEmpresa=" + empresas[i].Codigo +"'><button type='button' " +
                    "         class='btn btn-xs btn-secondary btn-filial' id ='btn-filial' " +
                    "         data-codigo='" + empresas[i].Codigo + "'" +
                    ">Filiais</button > </a>" +
                    "</td > " +
                    "</tr>");
            }
            adicionaEventoEditar();
            adicionaEventoRemover();
        },
        failure: function (msg) { alert(msg); },
        data: {}
    });
}

function adicionaEventoEditar() {
    $(document).on("click", ".btn-editar", function () {
        var codigo = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Empresas.asmx/GetEmpresa",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var Empresa = data.d;
                $("#txt_Codigo").val(Empresa.Codigo);
                $("#txt_CNPJ").val(Empresa.CNPJ);
                $("#txt_Razao_Social").val(Empresa.Razao_Social);
                $("#txt_Nome_Fantasia").val(Empresa.Nome_Fantasia);
                $("#txt_IE").val(Empresa.Inscricao_Estadual);
                $("#txt_CEP").val(Empresa.CEP);
                $("#txt_DDD").val(Empresa.DDD);
                $("#txt_Telefone").val(Empresa.Telefone);;
                $("#txt_Endereco").val(Empresa.Endereco);
                $("#txt_Numero").val(Empresa.Numero);
                $("#txt_Bairro").val(Empresa.Bairro);
                $("#txt_Cidade").val(Empresa.Cidade);
                $("#txt_UF").val(Empresa.Estado);
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({ Codigo: codigo })
        });
    });
}

function adicionaEventoRemover() {
    $(document).on("click", ".btn-remover", function () {
        var codigo = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Empresas.asmx/Remover",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                carregarEmpresas();
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({ Codigo: codigo })
        });
    });
}

$(document).ready(function () {
    carregarEmpresas();

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
