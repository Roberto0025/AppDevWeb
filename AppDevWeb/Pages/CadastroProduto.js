function salvar() {
    $.ajax({
        type: "POST",
        url: "https://localhost:44332/API/Produtos.asmx/SalvarProduto",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            limparCampos();
            carregarProdutos();
        },
        failure: function (msg) { alert(msg); },
        data: JSON.stringify({
            prod: {
                Codigo: $("#txt_codigo").val(),
                Descricao: $("#txt_descricao").val(),
                UnidadeMedida: $("#txt_unidademedida").val(),
                PrecoCusto: $("#txt_precocusto").val(),
                PrecoVenda: $("#txt_precovenda").val(),
                PercentualLucro: $("#txt_percentuallucro").val()
            },
        })
    });
}

function limparCampos() {
    $("#txt_codigo").val("");
    $("#txt_descricao").val("");
    $("#txt_unidademedida").val("");
    $("#txt_precocusto").val("");
    $("#txt_precovenda").val("");
    $("#txt_percentuallucro").val("");
}

function carregarProdutos() {
    $.ajax({
        type: "GET",
        url: "https://localhost:44332/API/Produtos.asmx/ListarProdutos",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#grid_produtos tbody").html("");
            var produtos = data.d;
            for (var i = 0; i < produtos.length; i++) {
                $("#grid_produtos tbody").append("<tr>" +
                    "<td>" + produtos[i].Codigo + "</td>" +
                    "<td>" + produtos[i].Descricao + "</td>" +
                    "<td>" + produtos[i].PrecoVenda + "</td>" +
                    "<td>" +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-primary btn-editar' " +
                    "         data-codigo='" + produtos[i].Codigo + "'" +
                    ">Editar</button> " +
                    " <button type='button' " +
                    "         class='btn btn-xs btn-danger btn-remover' " +
                    "         data-codigo='" + produtos[i].Codigo + "'" +
                    ">Remover</button > " +
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
            url: "https://localhost:44332/API/Produtos.asmx/GetProduto",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var Produto = data.d;
                $("#txt_codigo").val(Produto.Codigo);
                $("#txt_descricao").val(Produto.Descricao);
                $("#txt_unidademedida").val(Produto.UnidadeMedida);
                $("#txt_precocusto").val(Produto.PrecoCusto);
                $("#txt_precovenda").val(Produto.PrecoVenda);
                $("#txt_percentuallucro").val(Produto.PercentualLucro);
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
            url: "https://localhost:44332/API/Produtos.asmx/Remover",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                carregarProdutos();
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({ Codigo: codigo })
        });
    });
}

$(document).ready(function () {
    carregarProdutos();

    $(document).on("click", "#btn_salvar", salvar);
});