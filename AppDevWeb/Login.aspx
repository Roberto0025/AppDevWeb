<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="AppDevWeb.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Painel de Login</title>
    <meta charset="utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet"
        type="text/css"
        href="Scripts/fontawesome-free-5.15.4-web/css/all.css" />

    <link rel="stylesheet" type="text/css" href="Scripts/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="Scripts/style.css" />
    <script src="Scripts/jquery-3.6.0.min.js"></script>
    <script src="Scripts/bootstrap.bundle.min.js"></script>
    <script src="Login.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div id="container-login"
            class="container">
            <div id="ovDiv_Titulo" runat="server"></div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <label>Usuário:</label>
                        <input type="text"
                            class="form-control"
                            id="ovTXT_Usuario" />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12">
                        <label>Senha:</label>
                        <input type="password"
                            class="form-control"
                            id="ovTXT_Senha" />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-12 pull-right">
                        <button type="button"
                            id="ovBTN_Login"
                            class="btn btn-success">
                            <i class="fa fa-check"></i>
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
