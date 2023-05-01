import "./header.css";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Header() {
  // useLocation() - hook do react-router-dom que retorna o objeto location que contém informações sobre a URL atual e fornece acesso ao objeto history.

  const [currentUrl, setCurrentUrl] = useState(""); // currentUrl - estado que armazena a URL atual.

  const { pathname } = useLocation(); // pathname - propriedade do objeto location que retorna o caminho da URL atual.

  useEffect(() => {
    setCurrentUrl(pathname);
  }, [pathname]);

  return (
    <>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <svg
              class="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            ></svg>
          </a>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="/" class="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="planos" class="nav-link px-2 link-dark">
                Planos
              </a>
            </li>
            <li>
              <a href="sobre" class="nav-link px-2 link-dark">
                Sobre
              </a>
            </li>
          </ul>

          <div class="col-md-3 text-end">
            <Link to="/login" class="btn btn-outline-primary me-2">
              {"Login "}{" "}
            </Link>

            {/* <Link to="/cadastro" class="btn btn-primary"> {"Cadastrar "}</Link> */}

            {currentUrl === "/cadastro" ? (
              <Link to="/" class="btn btn-primary">
                {"Voltar "}
              </Link>
            ) : (
              <Link to="/cadastro" class="btn btn-primary">
                {"Cadastrar "}
              </Link>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
