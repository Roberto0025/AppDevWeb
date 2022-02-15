<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master"
    AutoEventWireup="true"
    CodeBehind="CadastroProduto.aspx.cs"
    Inherits="AppDevWeb.Pages.CadastroProduto" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2"
    ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="CadastroProduto.js"
        type="text/javascript"></script>

    <div class="form-group">
        <div class="row">
            <div class="col-md-2">
                <label>Codigo:</label>
                <input type="text"
                    id="txt_codigo"
                    class="form-control" />
            </div>
            <div class="col-md-10">
                <label>Descrição:</label>
                <input type="text"
                    id="txt_descricao"
                    class="form-control" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <label>Un. Medida</label>
                <input type="text"
                    id="txt_unidademedida"
                    class="form-control" />
            </div>
            <div class="col-md-3">
                <label>Preço de Custo</label>
                <input type="text"
                    id="txt_precocusto"
                    class="form-control" />
            </div>
            <div class="col-md-3">
                <label>Preço Venda</label>
                <input type="text"
                    id="txt_precovenda"
                    class="form-control" />
            </div>
            <div class="col-md-3">
                <label>Percentual Lucro</label>
                <input type="text"
                    id="txt_percentuallucro"
                    class="form-control" />
            </div>
        </div>
        <div class="row pull-right" style="padding-top: 20px;">
            <div class="col-md-12">
                <button type="button"
                    class="btn btn-xs btn-success"
                    id="btn_salvar">
                    Salvar</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table id="grid_produtos" class="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Preço de Venda</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


</asp:Content>
