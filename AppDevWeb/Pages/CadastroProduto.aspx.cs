using AppDevWeb.Utils;
using System;
using System.Collections.Generic;
using System.Web.Script.Services;
using System.Web.Services;

namespace AppDevWeb.Pages
{
    public partial class CadastroProduto : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (PageUtil.USUARIO_LOGADO == null)
                Page.Response.Redirect(PageUtil.URLInicial + "/Login.aspx");
        }        
    }
}