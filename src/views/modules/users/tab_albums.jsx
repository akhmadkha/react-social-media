import { ArrowLeftIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TabPhotos from "./tab_photos";

export default function TabAlbums(props) {
  const { idUser, data } = props;
  const [showPhoto, setshowPhoto] = useState(false);
  const [albumSelected, setalbumSelected] = useState({});

  return (
    <div className="mb-20">
      {showPhoto ? (
        <div>
          <div
          className="bg-white z-30 p-6 pb-1 mb-2 rounded-lg"
            style={{
              position: "sticky",
              top: "4rem",
            }}
          >
            <p>Menampilkan foto untuk album</p>
            <h1 className="text-3xl font-bold text-primary">
              {albumSelected?.title}
            </h1>
            <button
              onClick={() => setshowPhoto(false)}
              className="btn my-2 btn-ghost gap-2"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Kembali
            </button>
          </div>
          <TabPhotos albumId={albumSelected.id ?? 0} />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data
            ? data.map((val, idx) => {
                return (
                  <button
                  key={idx}
                    onClick={() => {
                      setshowPhoto(true);
                      setalbumSelected(val);
                    }}
                    className="cursor-pointer border rounded-lg overflow-hidden max-h-64 min-h-16"
                  >
                    <div
                      className="hero h-full"
                      style={{
                        backgroundImage: `url(https://api.lorem.space/image/fashion?hash=3379${val.id})`,
                      }}
                    >
                      <div className="hero-overlay bg-opacity-60"></div>
                      <div className="hero-content text-white">
                        <div className="max-w-md pt-16">
                          <p className="">
                            {val.title.length > 40
                              ? `${val.title.substring(0, 40)}...`
                              : val.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })
            : null}
        </div>
      )}
    </div>
  );
}
