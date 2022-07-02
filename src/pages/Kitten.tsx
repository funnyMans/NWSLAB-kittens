import React from "react";
import { useParams } from "react-router-dom";
import { useGetKittenQuery } from "../redux/api/baseApi";

const Kitten = () => {
  const { kittenId } = useParams();
  const { data: kittens } = useGetKittenQuery(kittenId!);
  console.log(kittens);

  return (
    <>
      {kittens?.map((cat) => {
        return <div className="mx-auto my-auto ">
            <img src={cat.url} alt={cat.url} />
            <p>{cat.id}</p>
        </div>;
      })}
    </>
  );
};

export default Kitten;
