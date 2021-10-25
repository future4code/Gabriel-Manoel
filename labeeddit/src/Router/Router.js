import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "../pages/Feed/Feed";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import Post from "../pages/Post/Post";
import Erro from "../pages/Erro/Erro";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/cadastro">
          <Cadastro />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
        <Route exact path="/erro">
          <Erro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
