import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AreaAdmin } from "../pages/AreaAdmin/AreaAdmin";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { Home } from "../pages/Home/Home";
import { Viagens } from "../pages/Viagens/Viagens";

export const Router = () => {
  return (
      
    <BrowserRouter>
      <Switch>
        <Route exact path={"/Home"}>
          <Home />
        </Route>

        <Route exact path={"/Admin"}>
          <AreaAdmin />
        </Route>

        <Route exact path={"/Viagens"}>
          <Viagens />
        </Route>

        <Route exact path={"/Cadastro"}>
          <Cadastro />
        </Route>
      </Switch>

    </BrowserRouter>
  );
};
