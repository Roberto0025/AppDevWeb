using AppDevWeb.Modelo.Entidades;
using AppDevWeb.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AppDevWeb
{
    public partial class Login : System.Web.UI.Page
    {
        private static string CHAVE_USUARIOS = "LOGIN_USUARIOS";
        public static List<Usuario> Usuarios
        {
            get
            {
                if (HttpContext.Current.Session[CHAVE_USUARIOS] == null)
                {
                    var UsuariosPermitidos = new List<Usuario>
                    {
                        new Usuario("Teste", "123"),
                        new Usuario("Jacare", "1234")
                    };
                    HttpContext.Current.Session[CHAVE_USUARIOS] = UsuariosPermitidos;
                }
                return HttpContext.Current.Session[CHAVE_USUARIOS] as List<Usuario>;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            ovDiv_Titulo.InnerHtml = "<h3>Painel de Login</h3>";
            form1.Attributes["app_url"] = PageUtil.URLInicial;

            if (PageUtil.USUARIO_LOGADO != null)
                Page.Response.Redirect(PageUtil.URLInicial +
                    "/Pages/CadastroProduto.aspx");
        }

        [WebMethod]
        public static string autenticar(string usuario,
                                        string senha)
        {
            Usuario Autenticado = Usuarios.FirstOrDefault(o => o.Login == usuario
                                                            && o.Senha == senha);
            if (Autenticado != null)
            {
                PageUtil.USUARIO_LOGADO = Autenticado;
                return "OK";
            }
            return "Usuário ou senha Incorretos!";
        }
    }
}