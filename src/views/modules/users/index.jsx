import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../../app/api/users_api";
import SkeletonLoading from "../../components/skeleton_loading";

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
        className="hero min-h-16 rounded-box overflow-hidden"
        style={{
          backgroundImage:
            "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Daftar Pengguna</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {
            loading ?
            <>
              <SkeletonLoading/>
              <SkeletonLoading/>
              <SkeletonLoading/>
              <SkeletonLoading/>
            </>
            :
            dataUser.map((val, idx) => {
              return (
                <Link key={idx} to={"/users/" + val.id}>
                  <div className="flex gap-4 cursor-pointer border hover:border-primary rounded-lg shadow p-4">
                    <div className="avatar">
                      <div className="w-10 h-10 rounded-full">
                        <img
                        alt=""
                          src={`https://api.lorem.space/image/face?hash=3379${val.id}`}
                        />
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
                </Link>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
