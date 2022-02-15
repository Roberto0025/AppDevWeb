using AppDevWeb.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppDevWeb.Controller.Repositorios
{
    public class ProdutoController
    {
        public List<Produto> Produtos = new List<Produto>();

        public void Salvar(Produto Prod)
        {
            if (GetProduto(Prod.Codigo) == null)
                Produtos?.Add(Prod);
            else
                foreach (Produto produto in Produtos)
                    if (produto.Codigo == Prod.Codigo)
                    {
                        produto.Descricao = Prod.Descricao;
                        produto.PrecoCusto = Prod.PrecoCusto;
                        produto.PrecoVenda = Prod.PrecoVenda;
                        produto.UnidadeMedida = Prod.UnidadeMedida;
                    }
        }

        public List<Produto> GetProdutos()
        {
            return Produtos;
        }

        public void Remover(long Codigo)
        {
            Produtos = Produtos.Where(o => o.Codigo != Codigo)
                               .ToList();
        }

        public Produto GetProduto(long Codigo)
        {
            return Produtos.FirstOrDefault(o => o.Codigo == Codigo);
        }
    }
}
