using AppDevWeb.Controller.Repositorios;
using AppDevWeb.Modelo.Entidades;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.SessionState;

namespace AppDevWeb.API
{
    [ScriptService]
    public class Filiais : WebService, IRequiresSessionState
    {
        private EmpresaController EmpresaController
        {
            get
            {
                if (HttpContext.Current
                               .Session["CONTROLLER_EMPRESA"] == null)
                    HttpContext.Current
                               .Session["CONTROLLER_EMPRESA"] = new EmpresaController();

                return HttpContext.Current
                               .Session["CONTROLLER_EMPRESA"] as EmpresaController;
            }
            set
            {
                HttpContext.Current.Session["CONTROLLER_EMPRESA"] = value;
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                      UseHttpGet = true)]
        public List<Filial> ListarFiliais(long CodigoEmpresa)
        {
            return EmpresaController.GetEmpresas().FirstOrDefault(o => o.Codigo == CodigoEmpresa)?.Filiais;
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Filial GetFilial(long CodigoEmpresa, long Codigo)
        {
            return EmpresaController.GetEmpresas().FirstOrDefault(o => o.Codigo == CodigoEmpresa)?.Filiais.FirstOrDefault(o => o.Codigo == Codigo);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string Remover(long CodigoEmpresa, long Codigo)
        {
            var EmpresaEncontrada = EmpresaController.GetEmpresa(CodigoEmpresa);
            EmpresaController.RemoverFilial(EmpresaEncontrada, Codigo);
            return "OK";
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string SalvarFilial(long CodigoEmpresa, Filial fil)
        {
            var EmpresaEncontrada = EmpresaController.GetEmpresa(CodigoEmpresa);
            EmpresaController.SalvarFilial(EmpresaEncontrada, fil);
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
