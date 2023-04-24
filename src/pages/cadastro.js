import React, { useState } from "react";
import Title from "../components/Title";

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    numeroCartao: "",
    validadeCartao: "",
    cvv: "",
    plano: "",
  });

  const [plan, setPlan] = useState("free");

  formData.plano = plan;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      nome,
      email,
      cpf,
      telefone,
      numeroCartao,
      validadeCartao,
      cvv,
      plano,
    } = formData;

      formData.plano = plan;

    alert(
      `Nome: ${nome}\nE-mail: ${email}\nCPF: ${cpf}\nTelefone: ${telefone}\nNúmero do cartão: ${numeroCartao}\nValidade do cartão: ${validadeCartao}\nCVV: ${cvv}\nPlano escolhido: ${plano}`
    );
  };

  return (
    <div>
      <Title title={"Cadastro"} />

      {/* <!-- Formulário de cadastro --> conteinar com duas divs uma ao lado da outra de uma lado os dados pessoas e do outro dados do cartão de credito usando bootestrap */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Dados pessoais</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="nomeCompleto" className="form-label">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nomeCompleto"
                  placeholder="Digite seu nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  name="nome"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite seu e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cpf" className="form-label">
                  CPF
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cpf"
                  placeholder="Digite seu CPF"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  name="cpf"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefone" className="form-label">
                  Telefone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefone"
                  placeholder="Digite seu telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  name="telefone"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Dados do cartão de crédito</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="numeroCartao" className="form-label">
                  Número do cartão
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="numeroCartao"
                  placeholder="Digite o número do seu cartão de crédito"
                  value={formData.numeroCartao}
                  onChange={handleInputChange}
                  name="numeroCartao"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="validadeCartao" className="form-label">
                  Validade do cartão
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validadeCartao"
                  placeholder="MM/AAAA"
                  value={formData.validadeCartao}
                  onChange={handleInputChange}
                  name="validadeCartao"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  placeholder="Digite o CVV do seu cartão de crédito"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  name="cvv"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-start">
            <button
              type="button"
              className={`btn ${
                plan === "free" ? "btn-primary" : "btn-outline-primary"
              } me-2`}
              onClick={() => setPlan("free")}
            >
              Free
            </button>
            <button
              type="button"
              className={`btn ${
                plan === "plus" ? "btn-primary" : "btn-outline-primary"
              } me-2`}
              onClick={() => setPlan("plus")}
            >
              Plus $29,90
            </button>
          </div>
        </div>
        <hr></hr>

        <div className="row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Assinar
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cadastro;
