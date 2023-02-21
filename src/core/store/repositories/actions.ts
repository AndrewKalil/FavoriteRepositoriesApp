import { Dispatch } from "react";
import { RepositoriesApi } from "../../services/api/repositories";
import {
  getRepositories,
  getRepositoriesFail,
  getRepositoriesLoading,
} from "./reducer";

export const fetchRepositories = () => async (dispatch: Dispatch<any>) => {
  dispatch(getRepositoriesLoading());
  RepositoriesApi.get()
    .then((res) => {
      dispatch(getRepositories(res.data));
    })
    .catch((error) => {
      dispatch(getRepositoriesFail());
    });
};
