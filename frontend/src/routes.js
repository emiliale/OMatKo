import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import RateEdit from "./containers/RateEditView";
import Login from "./containers/Login";
import ChangePassword from "./containers/ChangePassword";
import Main from "./containers/Main";
import Vote from "./containers/Vote";
import RateList from "./containers/RateListView";


const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticleList} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
    <Route exact path="/rate/:voteID/" component={RateEdit} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/password/" component={ChangePassword} />{" "}
    <Route exact path="/main/" component={Main} />{" "}
    <Route exact path="/vote/" component={Vote} />{" "}
    <Route exact path="/rate/" component={RateList} />{" "}

  </div>
);

export default BaseRouter;
