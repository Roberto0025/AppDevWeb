using AppDevWeb.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppDevWeb.Controller.Repositorios
{
    public class EmpresaController
    {
        private List<Empresa> Empresas = new List<Empresa>();

        public void Salvar(Empresa Emp)
        {
            if (GetEmpresa(Emp.Codigo) == null)
            {
                Empresas?.Add(Emp);
            }
            else
                foreach (Empresa empresa in Empresas)
                    if (empresa.Codigo == Emp.Codigo)
                    {
                        empresa.CNPJ = Emp.CNPJ;
                        empresa.Razao_Social = Emp.Razao_Social;
                        empresa.Nome_Fantasia = Emp.Nome_Fantasia;
                        empresa.Inscricao_Estadual = Emp.Inscricao_Estadual;
                        empresa.CEP = Emp.CEP;
                        empresa.DDD = Emp.DDD;
                        empresa.Telefone = Emp.Telefone;
                        empresa.Endereco = Emp.Endereco;
                        empresa.Numero = Emp.Numero;
                        empresa.Bairro = Emp.Bairro;
                        empresa.Cidade = Emp.Cidade;
                        empresa.Estado = Emp.Estado;
                    }
        }

        public List<Empresa> GetEmpresas()
        {
            return Empresas;
        }

        public void Remover(long Codigo)
        {
            Empresas = Empresas.Where(o => o.Codigo != Codigo)
                               .ToList();
        }

        public Empresa GetEmpresa(long Codigo)
        {
            return Empresas.FirstOrDefault(o => o.Codigo == Codigo);
        }




        // Controller de Filiais
        public void SalvarFilial(Empresa Emp, Filial Fil)
        {

            if (GetFilial(Emp, Fil.Codigo) == null)
                Emp.Filiais?.Add(Fil);
            else
                foreach (Filial Filial in Emp.Filiais)
                    if (Filial.Codigo == Fil.Codigo)
                    {
                        Filial.CNPJ = Fil.CNPJ;
                        Filial.Razao_Social = Fil.Razao_Social;
                        Filial.Nome_Fantasia = Fil.Nome_Fantasia;
                        Filial.Inscricao_Estadual = Fil.Inscricao_Estadual;
                        Filial.CEP = Fil.CEP;
                        Filial.DDD = Fil.DDD;
                        Filial.Telefone = Fil.Telefone;
                        Filial.Endereco = Fil.Endereco;
                        Filial.Numero = Fil.Numero;
                        Filial.Bairro = Fil.Bairro;
                        Filial.Cidade = Fil.Cidade;
                        Filial.Estado = Fil.Estado;
                    }
        }

        public List<Filial> GetFiliais(Empresa Emp)
        {
            return Emp.Filiais;
        }

        public void RemoverFilial(Empresa Emp, long Codigo)
        {
            Emp.Filiais = Emp.Filiais.Where(o => o.Codigo != Codigo).ToList();
        }

        public Filial GetFilial(Empresa Emp, long Codigo)
        {
            return Emp.Filiais.FirstOrDefault(o => o.Codigo == Codigo);
        }
    }
}
