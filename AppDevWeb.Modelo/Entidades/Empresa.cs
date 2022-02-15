using System.Collections.Generic;

namespace AppDevWeb.Modelo.Entidades
{
    public class Empresa
    {
        public long Codigo { get; set; }
        public string CNPJ { get; set; }
        public string Razao_Social { get; set; }
        public string Nome_Fantasia { get; set; }
        public string Inscricao_Estadual { get; set; }
        public string CEP { get; set; }
        public string DDD { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string Numero { get; set; }
        public string Bairro { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }

        public Empresa()
        {
        }

        public List<Filial> Filiais = new List<Filial>();
    }
}
