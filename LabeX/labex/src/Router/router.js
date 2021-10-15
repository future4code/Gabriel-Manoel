import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AreaAdmin } from "../pages/AreaAdmin/AreaAdmin";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Home } from "../pages/Home/Home";
import { Viagens } from "../pages/Viagens/Viagens";
import { CriarViagens } from "../pages/CriarViagem/CriarViagem";
import { Inscrever } from "../pages/Inscrever/Inscrever";
import { Logout } from "../pages/Logout/Logout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/Admin"}>
          <AreaAdmin />
        </Route>

        <Route exact path={"/Viagens"}>
          <Viagens />
        </Route>

        <Route exact path={"/CriarViagem"}>
          <CriarViagens />
        </Route>

        <Route exact path={"/Cadastro"}>
          <Cadastro />
        </Route>

        <Route exact path={"/Inscrever"}>
          <Inscrever />
        </Route>

        <Route exact path={"/Logout"}>
          <Logout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
