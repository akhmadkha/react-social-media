import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { update, deleteComment } from "../../../app/reducer/comment_reducer";

export default function CommentBubble(props) {
  const { name, email, body, id, postId } = props;
  const [isEdit, setisEdit] = useState(false);
  const dispatch = useDispatch();
  const alert = useAlert()

  function onEdit(e) {
    let name = e.target.namaKomentar.value;
    let body = e.target.komentar.value;
    let payload = {
      email,
      id,
      postId,
      name,
      body,
    };
    dispatch(update({ data: payload }));
    setisEdit(false);
    alert.show("Berhasil edit komentar");
  }

  function onDelete(e) {
    switchModalDelete(false)
    let payload = {
      id,
      postId,
    };
    dispatch(deleteComment({data: payload}))
    alert.show("Berhasil menghapus komentar");
  }

  function switchModalDelete(params) {
    if (params) {
      document
        .getElementById(`modalDeleteComment${id}`)
        .classList.add("modal-open");
    } else {
      document
        .getElementById(`modalDeleteComment${id}`)
        .classList.remove("modal-open");
    }
  }
  return (
    <>
      <div id={`modalDeleteComment${id}`} class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Konfirmasi</h3>
          <p class="py-4">Klik lanjut untuk menghapus komentar</p>
          <div class="modal-action">
            <label
              onClick={() => switchModalDelete(false)}
              for="my-modal"
              class="btn"
            >
              Batal
            </label>
            <label
              onClick={() => {
                onDelete()
              }}
              for="my-modal"
              class="btn btn-error"
            >
              Lanjut
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-2 p-1">
        <div className="avatar">
          <div class="w-8 h-8 rounded-full">
            <img alt="socialmedia-asset" src={`https://api.lorem.space/image/face?hash=3379${Math.floor(Math.random() * 10)}`} />
          </div>
        </div>
        <div className="flex-1 border rounded-xl bg-gray-100 p-2">
          {email === "user@root.com" ? (
            isEdit ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onEdit(e);
                }}
              >
                <div className="flex flex-col mb-2">
                  <p className="text-sm">Edit komentar</p>
                  <input
                    type="text"
                    name="namaKomentar"
                    placeholder="Nama komentar"
                    class="input input-bordered w-full"
                    defaultValue={name}
                  />
                </div>
                <textarea
                  class="textarea textarea-bordered w-full"
                  name="komentar"
                  placeholder="Ketik komentar"
                >
                  {body}
                </textarea>
                <div className="flex mt-2 justify-end gap-2">
                  <button
                    onClick={() => setisEdit(false)}
                    className="btn btn-sm btn-ghost"
                  >
                    Batal
                  </button>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Simpan
                  </button>
                </div>
              </form>
            ) : (
              <>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col">
                      <p className="text-sm">{email}</p>
                      <p className="text-primary font-bold">{name}</p>
                    </div>
                    <div class="dropdown dropdown-end">
                      <label tabindex="0" class="btn btn-xs">
                        <DotsHorizontalIcon className="h-4 w-4" />
                      </label>
                      <ul
                        tabindex="0"
                        class="dropdown-content gap-2 menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <button
                            onClick={() => setisEdit(true)}
                            className="btn btn-sm btn-ghost"
                          >
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              switchModalDelete(true);
                            }}
                            className="btn btn-sm btn-error"
                          >
                            Hapus
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-sm">{body}</p>
              </>
            )
          ) : (
            <>
              <div className="flex justify-between items-center mb-2">
                <div className="flex flex-col">
                  <p className="text-sm">{email}</p>
                  <p className="text-primary font-bold">{name}</p>
                </div>
              </div>
              <p className="text-sm">{body}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
