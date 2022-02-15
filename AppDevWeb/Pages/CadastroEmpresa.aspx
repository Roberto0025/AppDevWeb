<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master" 
    AutoEventWireup="true" 
    CodeBehind="CadastroEmpresa.aspx.cs" 
    Inherits="AppDevWeb.Pages.CadastroEmpresa" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" 
    ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="CadastroEmpresa.js"
        type="text/javascript"></script>

    <div class="form-group">
        <h3>Cadastro Empresa</h3>
        <div class="row">
            <div class="col-xs-2 col-sm-2 col-md-2">
                <label>Codigo:</label>
                <input type="text"
                    id="txt_Codigo"
                    class="form-control" />
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3">
                <label>CNPJ</label>
                <input type="text"
                    id="txt_CNPJ"
                    class="form-control" />
            </div>
            <div class="col-xs-5 col-sm-5 col-md-5">
                <label>Razão Social</label>
                <input type="text"
                    id="txt_Razao_Social"
                    class="form-control" />
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2">
                <label>I.E.</label>
                <input type="text"
                    id="txt_IE"
                    class="form-control" />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6">
                <label>Nome Fantasia</label>
                <input type="text"
                    id="txt_Nome_Fantasia"
                    class="form-control" />
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2">
                <label>CEP</label>
                <input type="text"
                    id="txt_CEP"
                    class="form-control" />
            </div>
            <div class="col-xs-1 col-sm-1 col-md-1">
                <label>DDD</label>
                <input type="text"
                    id="txt_DDD"
                    class="form-control" />
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2">
                <label>Telefone</label>
                <input type="text"
                    id="txt_Telefone"
                    class="form-control" />
            </div>
            <div class="col-xs-1 col-sm-1 col-md-1">
                <label>UF</label>
                <input type="text"
                    id="txt_UF"
                    class="form-control" />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4">
                <label>Endereço</label>
                <input type="text"
                    id="txt_Endereco"
                    class="form-control" />
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2">
                <label>N°</label>
                <input type="text"
                    id="txt_Numero"
                    class="form-control" />
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3">
                <label>Bairro</label>
                <input type="text"
                    id="txt_Bairro"
                    class="form-control" />
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3">
                <label>Cidade</label>
                <input type="text"
                    id="txt_Cidade"
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
            <div class="col-xs-5 col-sm-5 col-md-5">
                <h4>Empresas Cadastradas</h4>
            </div>
            <div class="col-md-12">
                <table id="grid_empresas" class="table">
                    <thead>
                        <tr>
                            <th class="col-md-1">Código</th>
                            <th class="col-md-3">Nome Fantasia</th>
                            <th class="col-md-2">Telfone</th>
                            <th class="col-md-2">CNPJ</th>
                            <th class="col-md-4">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</asp:Content>
