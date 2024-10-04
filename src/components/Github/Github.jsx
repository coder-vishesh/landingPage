import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

function GithubInfo() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     try {
  //       fetch("https://api.github.com/users/coder-vishesh")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log(data);
  //           setData(data);
  //         });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);
  return (
    <>
      <div className="flex gap-44 mt-9 mb-24">
        <diV>
          <img
            className="h-64 w-64 rounded-full ml-24"
            src={data.avatar_url}
          ></img>
          <p className="text-center ml-20 text-2xl">{data.name}</p>
        </diV>
        <div>
          <h1>Github Username : {data.login}</h1>
          <h1>Bio : {data.bio}</h1>
          <h1>Github Followers : {data.followers}</h1>
        </div>
      </div>
    </>
  );
}

export default GithubInfo;

export const git = async () => {
  const response = await fetch("https://api.github.com/users/coder-vishesh");
  return response.json();
};
