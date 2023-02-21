import React from "react";
import { Repository } from "../core/types/repository.type";
import CardComponent from "./card.component";

type CardGridProps = {
  data: Repository[];
};

const CardGridComponent = ({ data }: CardGridProps) => {
  return data.length > 0 ? (
    <div
      style={{ gridAutoRows: "11rem" }}
      className="w-full h-full grid grid-cols-4 gap-4 overflow-auto p-4"
    >
      {data.map((repo) => {
        const { id } = repo;
        return <CardComponent key={id} repo={repo} />;
      })}
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      There is no data to be loaded in this page :(
    </div>
  );
};

export default CardGridComponent;
