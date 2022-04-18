import React, { useEffect, useState } from "react";
import { getPhotoAlbum } from "../../../app/api/albums_photos_api";

export default function TabPhotos(props) {
  const { albumId } = props;
  const [dataPhoto, setdataPhoto] = useState([]);
  const [selectedPhoto, setselectedPhoto] = useState({});

  useEffect(() => {
    getPhoto();
  }, []);

  function getPhoto(params) {
    getPhotoAlbum(albumId).then((res) => {
      setdataPhoto(res.data);
    });
  }
  return (
    <>
      <input type="checkbox" id="modal-preview-photo" className="modal-toggle" />
      <label for="modal-preview-photo" onClick={() => setselectedPhoto({})} className="modal cursor-pointer">

        <label className="modal-box relative" for="">
          <img alt="Photos" className="rounded-box mb-4" src={selectedPhoto.url}/>
          <h3 className="text-lg font-bold">
            {selectedPhoto?.title}
          </h3>
        </label>
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dataPhoto.map((val, idx) => {
          return (
            <label key={idx} onClick={() => setselectedPhoto(val)} for="modal-preview-photo" className="modal-button cursor-pointer border rounded-lg overflow-hidden max-h-64">
              <div
                className="hero h-full"
                style={{
                  backgroundImage: `url(${val.thumbnailUrl})`,
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
            </label>
          );
        })}
      </div>
    </>
  );
}
