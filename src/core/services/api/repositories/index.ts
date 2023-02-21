import { Api } from "..";
import { Repository } from "../../../types/repository.type";

const baseUrl = process.env.REACT_APP_BASE_URL || "";
const accessToken = process.env.REACT_APP_GH_PAT || "";
export const RepositoriesApi = new Api<Repository>(
  "repos",
  baseUrl,
  accessToken
);

export const StarredRepositoriesApi = new Api<Repository>(
  "starred",
  baseUrl,
  accessToken
);
