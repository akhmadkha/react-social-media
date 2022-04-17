import React, { useEffect, useState } from "react";
import { getUsers } from "../../../app/api/users_api";

export default function Users() {
  const [dataUser, setdataUser] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  function getData(params) {
    setloading(true);
    getUsers()
      .then((res) => {
        setdataUser(res.data);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }
  return (
    <div className="pt-20">
      {/* <h1 className="text-lg font-semibold">Daftar Pengguna</h1> */}
      <div
        class="hero min-h-16 rounded-box overflow-hidden"
        style={{
          backgroundImage:
            "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Daftar Pengguna</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button class="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div class="grid grid-cols-2 gap-4">
          {dataUser.map((val, idx) => {
            return (
              <div key={idx} className="flex gap-4 cursor-pointer border hover:border-primary rounded-lg shadow p-4">
                <div className="avatar">
                  <div class="w-10 h-10 rounded-full">
                    <img src={`https://api.lorem.space/image/face?hash=3379${val.id}`} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <p>@{val.username}</p>
                  <h1 className="text-lg font-semibold text-primary">
                    {val.name}
                  </h1>
                  <p>{val.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
