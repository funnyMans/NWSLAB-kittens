import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pagination from "../layouts/Pagination";
import { useGetKittiesByIdQuery } from "../redux/api/baseApi";

const CatList = () => {
  const { id } = useParams();
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState('1')
  const { data: content } = useGetKittiesByIdQuery({
    limit,
    page,
    id,
  });

  useEffect(() => {
    setLimit("10");
  
 
  }, [id])
  const changeLimit = ()=> {
    setLimit("20")
  }
  return (
    <div className="bg-gray-100 w-full min-h-screen h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-10 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">
            {content && content[0].categories[0].name.toUpperCase()}
          </h2>

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-x-6">
            {content?.map((kitty: any) => (
              <div key={kitty.id} className="group relative rounded">
                <div className="relative w-full h-full bg-white rounded overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={kitty.url}
                    alt={kitty.id}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link to={`/kitties/${id}/${kitty.id}`}>
                    <span className="absolute inset-0" />
                    {kitty.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {kitty.description}
                </p>
              </div>
            ))}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>changeLimit()}>
              Upload more...
            </button>
          </div>
          <Pagination page={page} setPage={setPage}/>
        </div>
      </div>
    </div>
  );
};

export default CatList;
