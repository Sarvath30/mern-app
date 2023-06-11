import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, Button, Popconfirm, Modal } from "antd"; //antd components
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "../assets/notes.css";
import { getNotesApi, deleteNotesApi } from "../api/notesApi";

const Notes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  // get note api response
  const notesData = () => {
    getNotesApi().then((res) => {
      setNotes(res.data);
    });
  };

  useEffect(() => {
    notesData();
  }, []);

  // delete api
  const deleteNote = (id) => {
    deleteNotesApi(id).then((res) => {
      Modal.success({
        className: "popup-model-success",
        centered: true,
        icon: false,
        content: <div>{res.message}</div>,
        onOk() {
          navigate(`/notes`);
        },
      });
      notesData();
    });
  };

  return (
    <>
      <Button
        type="primary"
        className="m-15"
        onClick={() => navigate("/create/notes")}
      >
        Create
      </Button>
      {notes.map((data) => {
        return (
          <>
            <Row align="middle">
              <Col span={8}>
                <Card
                  type="inner"
                  title="Notes"
                  bordered={true}
                  className="m-15"
                  extra={
                    <>
                      <EyeOutlined
                        title="View"
                        onClick={() => navigate(`/view/notes`, { state: data })}
                      />{" "}
                      &nbsp;
                      <EditOutlined
                        title="Edit"
                        onClick={() => navigate(`/edit/notes`, { state: data })}
                      />
                      &nbsp;
                      <Popconfirm
                        title="Delete Notes"
                        description={`Are you sure to delete ${data.title}`}
                        onConfirm={() => deleteNote(data._id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <DeleteOutlined title="Delete" />
                      </Popconfirm>
                    </>
                  }
                >
                  <p>
                    <span className="title">Title:</span> {data.title}
                  </p>
                  <p className="text_overflow">
                    <span className="title">Content:</span> {data.content}
                  </p>
                </Card>
              </Col>
            </Row>
          </>
        );
      })}
    </>
  );
};

export default Notes;
