import React, { useEffect } from "react";
import "./App.css";
import RoutesComponent from "./components/routes.component";
import { getUser } from "./core/services/auth";
import { useAppDispatch } from "./core/store";
import { fetchRepositories } from "./core/store/repositories/actions";
import { getUserSuccess } from "./core/store/user/reducer";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRepositories());
    const user = getUser();
    if (user) {
      dispatch(getUserSuccess({ ...user, password: "####" }));
    }
  }, [dispatch]);

  return <RoutesComponent />;
}

export default App;
