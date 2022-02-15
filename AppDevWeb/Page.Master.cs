using AppDevWeb.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace AppDevWeb
{
    public partial class Page : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            div_ident_user.InnerHtml = $"<label>{PageUtil.USUARIO_LOGADO?.Login}</label>";
        }
    }
}