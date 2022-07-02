import React from "react";
import { Link } from "react-router-dom";
import { useGetKittyCategoriesQuery } from "../redux/api/baseApi";

const SideBar = () => {
  const { data: kittyCategories } = useGetKittyCategoriesQuery("categories");

  return (
    <aside className="w-1/5  h-full" aria-label="Sidebar">
      <nav className="overflow-y-auto min-h-screen py-4 px-3 bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2">
          {kittyCategories?.map((category) => {
            return (
              <li key={category.id}>
                <Link
                  to={`/kitties/${category.id}`}
                  className="flex items-center py-2 text-base font-bold text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3 text-2xl">{category.name.toUpperCase()}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
