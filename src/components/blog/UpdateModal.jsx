import * as React from "react";
import Modal from "@mui/material/Modal";
import BlogForm from "./BlogForm";
import { useEffect } from "react";
import { useState } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";

const UpdateModal = ({ info, open, handleClose }) => {
  const [formData, setFormData] = useState(info);
  const { putData } = useBlogCalls();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putData("blogs", formData);
    handleClose();
  };

  useEffect(() => {
    setFormData(info);
  }, [info]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BlogForm
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          text="Update"
        />
      </Modal>
    </div>
  );
};
export default UpdateModal;
