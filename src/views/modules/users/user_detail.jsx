import { ArrowLeftIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetailUsers } from "../../../app/api/users_api";
import { getPostUser } from "../../../app/api/posts_api";
import { getAlbumUser } from "../../../app/api/albums_photos_api";
import TabAlbums from "./tab_albums";
import TabPost from "./tab_post";

const dataTab = [
  {
    id: 1,
    title: "Post",
  },
  {
    id: 2,
    title: "Album",
  },
];
export default function UserDetail(props) {
  const [tabActive, settabActive] = useState(1);
  const [dataUser, setdataUser] = useState({});
  const [postUser, setpostUser] = useState([]);
  const [albumUser, setalbumUser] = useState([]);
  const {idUser} = useParams()

  useEffect(() => {
    getDataUser()
  }, []);

  function getDataUser() {
    getDetailUsers(idUser).then(res => {
      setdataUser(res.data)
      getPost()
      getAlbum()
    }).catch((err) => {

    })
  }

  function getPost() {
    getPostUser(idUser).then(res => {
      setpostUser(res.data)
    })
  }
  function getAlbum() {
    getAlbumUser(idUser).then(res => {
      setalbumUser(res.data)
    })
  }
  return (
    <div className="pt-20">
      <div>
        <div
          class="hero min-h-16 rounded-box overflow-hidden"
          style={{
            placeItems: "unset",
            backgroundImage:
              "url(https://api.lorem.space/image/furniture?w=1000&h=800)",
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="justify-start hero-content text-neutral-content">
            <div class="max-w-md pb-36">
              <button
                onClick={() => window.history.back()}
                class="btn bg-white border-none text-gray-500 hover:bg-gray-200 gap-2"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                Kembali
              </button>
            </div>
          </div>
        </div>
        <div className="px-10 bottom-10 relative">
          <div className="p-4 border bg-white rounded-box flex">
            <div>
              <div className="avatar">
                <div class="w-24 h-24 rounded-full">
                  <img src={`https://api.lorem.space/image/face?hash=3379${idUser}`} />
                </div>
              </div>
            </div>
            <div className="flex-1 flex gap-4">
              <div className="w-1/2 px-8">
                <p className="text-sm">@{dataUser?.username}</p>
                <h1 className="text-2xl font-semibold text-primary">{dataUser?.name}</h1>
                <p className="text-sm">{dataUser?.email}</p>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div class="tabs">
            {dataTab.map((val, idx) => {
              return (
                <button
                  key={val}
                  onClick={() => settabActive(val.id)}
                  class={`tab tab-bordered ${
                    val.id === tabActive ? "tab-active" : ""
                  }`}
                >
                  {val.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pt-10">
        {
          tabActive === 1 ? <TabPost idUser={idUser} data={postUser}/> : null
        }
        {
          tabActive === 2 ? <TabAlbums idUser={idUser} data={albumUser}/> : null
        }
      </div>
    </div>
  );
}
