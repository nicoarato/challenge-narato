import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import DetailView from "../../views/Detail";
import SearchView from "../../views/Search";
import "./NavigationContent.scss";

export function NavigationContent() {
    const query = new URLSearchParams(useLocation().search);

    return (
        <main role="main">
            <div className="contenido">
                <Switch>
                    <Route
                        exact
                        path="/items"
                        render={() => <SearchView search={query.get("search")} />}
                    />
                    <Route path="/items/:id" component={DetailView} />
                    <Redirect to="/items" />
                </Switch>
            </div>
        </main>
    );
}
