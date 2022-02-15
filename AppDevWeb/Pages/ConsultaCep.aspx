<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master" AutoEventWireup="true" CodeBehind="ConsultaCep.aspx.cs" Inherits="AppDevWeb.Pages.ConsultaCep" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <script src="ConsultaCep.js"
        type="text/javascript"></script>

    <div class="form-group">
        <div class="row">
            <div class="col-md-3">
                <label for="txt_cep">Cep:</label>
                <input type="text"
                       class="form-control"
                       id="txt_cep"/>
            </div>
            <div class="col-md-4">
                <button type="button"
                        class="btn btn-xs btn-info"
                        id="btn_consultar"
                    >Consultar</button>
                <button type="button"
                        class="btn btn-xs btn-info"
                        id="btn_limpar"
                    >Limpar</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <label>Logradouro:</label>
                <input type="text" class="form-control"
                    id="txt_logradouro" />
            </div>
        </div>
    </div>

</asp:Content>
