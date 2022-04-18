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
      <input type="checkbox" id="modal-preview-photo" class="modal-toggle" />
      <label for="modal-preview-photo" onClick={() => setselectedPhoto({})} class="modal cursor-pointer">

        <label class="modal-box relative" for="">
          <img alt="Photos" className="rounded-box mb-4" src={selectedPhoto.url}/>
          <h3 class="text-lg font-bold">
            {selectedPhoto?.title}
          </h3>
        </label>
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dataPhoto.map((val, idx) => {
          return (
            <label onClick={() => setselectedPhoto(val)} for="modal-preview-photo" className="modal-button cursor-pointer border rounded-lg overflow-hidden max-h-64">
              <div
                class="hero h-full"
                style={{
                  backgroundImage: `url(${val.thumbnailUrl})`,
                }}
              >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-white">
                  <div class="max-w-md pt-16">
                    <p class="">
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
