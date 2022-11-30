import React from "react";
import { API_URL } from "../services/api.service";
import Link from "next/link";

function Categories({ categories }:{categories: any[]}) {
  return (
    <>
      {categories.length ? (
        <ul className="ml-4">
          {categories.map((category: string, index: number) => (
            <li className="py-1" key={index}>
              <Link href={`${API_URL}`}>
                <p className="text-neutral-500 hover:text-primary-500">
                  {category}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="bg-neutral-200 mt-3 p-5 h-60 flex items-center justify-center">
          <p>No category found!</p>
        </div>
      )}
    </>
  );
}

export default Categories;
