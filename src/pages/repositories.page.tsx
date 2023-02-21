import React from "react";
import { useSelector } from "react-redux";
import CardGridComponent from "../components/card_grid.component";
import PageTemplate from "../components/templates/page.template";
import { RootState } from "../core/store";

const RepositoriesPage = () => {
  const repos = useSelector((state: RootState) => state.repos.repositories);

  return (
    <PageTemplate>
      <CardGridComponent data={repos} />
    </PageTemplate>
  );
};

export default RepositoriesPage;
