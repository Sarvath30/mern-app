import { axiosInstance } from "../utils/common";

// get notes api
export const getNotesApi = () => {
  return axiosInstance.get("notes").then((res) => res.data);
};

// create note
export const createNotesApi = (notes) => {
  return axiosInstance.post("notes", notes).then((res) => res.data);
};

// delete notes by ID
export const deleteNotesApi = (noteId) => {
  return axiosInstance.delete(`notes/${noteId}`).then((res) => res.data);
};

// edit note by Id
export const editNotesApi = (notesId, notesDetail) => {
  return axiosInstance
    .put(`notes/${notesId}`, notesDetail)
    .then((res) => res.data)
    .catch((e) => console.log("e", e));
};
