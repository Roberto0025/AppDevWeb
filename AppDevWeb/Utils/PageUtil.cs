using AppDevWeb.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AppDevWeb.Utils
{
    public class PageUtil
    {
        public static string CHAVE_USUARIO_AUTENTICADO = "PAGE_USER";

        public static Usuario USUARIO_LOGADO
        {
            get
            {
                return HttpContext.Current
                    .Session[CHAVE_USUARIO_AUTENTICADO] as Usuario;
            }
            set
            {
                HttpContext.Current
                    .Session[CHAVE_USUARIO_AUTENTICADO] = value;
            }
        }

        public static string URLInicial
        {
            get
            {
                return HttpContext.Current.Request
                .Url.AbsoluteUri.Replace(HttpContext.Current.Request
                .Url.AbsolutePath, string.Empty);
            }
        }
    }
}