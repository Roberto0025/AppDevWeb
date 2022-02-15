using AppDevWeb.Controller.Repositorios;
using AppDevWeb.Modelo.Entidades;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.SessionState;

namespace AppDevWeb.API
{
    [ScriptService]
    public class Produtos : System.Web.Services.WebService, IRequiresSessionState
    {
        private ProdutoController Controller
        {
            get
            {
                if (HttpContext.Current
                               .Session["CONTROLLER_PRODUTO"] == null)
                    HttpContext.Current
                               .Session["CONTROLLER_PRODUTO"] = new ProdutoController();

                return HttpContext.Current
                               .Session["CONTROLLER_PRODUTO"] as ProdutoController;
            }
            set
            {
                HttpContext.Current.Session["CONTROLLER_PRODUTO"] = value;
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                      UseHttpGet = true)]
        public List<Produto> ListarProdutos()
        {
            return Controller.GetProdutos();
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Produto GetProduto(long Codigo)
        {
            return Controller.GetProduto(Codigo);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string Remover(long Codigo)
        {
            Controller.Remover(Codigo);
            return "OK";
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string SalvarProduto(Produto prod)
        {
            Controller.Salvar(prod);
            return "OK";
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                      UseHttpGet = true)]
        public string ChamadaGet(string a, string b)
        {
            return $"{a}, {b}";
        }
    }
}
