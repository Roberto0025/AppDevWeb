namespace AppDevWeb.Modelo.Entidades
{
    public class Produto
    {
        public long Codigo { get; set; }
        public string Descricao { get; set; }
        public string UnidadeMedida { get; set; }
        public decimal PrecoCusto { get; set; }
        public decimal PrecoVenda { get; set; }
        public decimal PercentualLucro { get; set; }

        public Produto()
        {
        }
    }
}