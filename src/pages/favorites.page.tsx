import React from "react";
import { useSelector } from "react-redux";
import CardGridComponent from "../components/card_grid.component";
import PageTemplate from "../components/templates/page.template";
import { RootState } from "../core/store";

const FavoritesPage = () => {
  const favorites = useSelector((state: RootState) => state.repos.favorites);

  return (
    <PageTemplate>
      <CardGridComponent data={favorites} />
    </PageTemplate>
  );
};

export default FavoritesPage;
