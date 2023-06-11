import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form, Input, Layout, Modal } from "antd"; //antd components
import { createNotesApi } from "../api/notesApi";
import "../assets/notes.css";

const CreateNotes = () => {
  const navigate = useNavigate();
  const [notesTitle, setNotesTitle] = useState();
  const [notesContent, setNotesContent] = useState();

  // title input handler
  const handleNotesTitle = (e) => {
    setNotesTitle(e.target.value);
  };

  // content input handler
  const handleNotesContent = (e) => {
    setNotesContent(e.target.value);
  };

  //on submit form
  const onFinish = (values) => {
    createNotesApi(values).then((res) => {
      Modal.success({
        className: "popup-model-success",
        centered: true,
        icon: false,
        content: <div>{res.message}</div>,
        onOk() {
          navigate(`/notes`);
        },
      });
    });
  };

  //error on form submit
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Layout className="m-20" style={{ width: "50%" }}>
        <Form
          name="create-notes"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: "100%" }}
        >
          <div>
            <Row align="middle" type="flex" gutter={[8, 16]} className="m-0">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                {/* title */}
                <div>
                  <Row
                    align="middle"
                    type="flex"
                    style={{ padding: "15px 20px 5px" }}
                  >
                    <Col span={24} className="vertical-align">
                      <h4 className="div-head">Enter Title</h4>
                    </Col>
                  </Row>
                  <hr className="mt-10" />
                  <Row
                    align="middle"
                    type="flex"
                    style={{ padding: "0px 20px 20px" }}
                    gutter={[8, 16]}
                  >
                    <Col span={24} className="vertical-align">
                      <Form.Item
                        name="title"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input
                          allowClear={true}
                          className="mt-10"
                          onChange={handleNotesTitle}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
                {/* content */}
                <div>
                  <Row
                    align="middle"
                    type="flex"
                    style={{ padding: "15px 20px 5px" }}
                  >
                    <Col span={24} className="vertical-align">
                      <h4 className="div-head">Enter Content</h4>
                    </Col>
                  </Row>
                  <hr className="mt-10" />
                  <Row
                    align="middle"
                    type="flex"
                    style={{ padding: "0px 20px 20px" }}
                    gutter={[8, 16]}
                  >
                    <Col span={24} className="vertical-align">
                      <Form.Item
                        name="content"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input.TextArea
                          allowClear={true}
                          className="mt-10"
                          onChange={handleNotesContent}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
                <div className="m-10">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className=""
                    // style={{ width: "100%" }}
                  >
                    Save
                  </Button>
                  <Button
                    danger
                    className="ml-10"
                    // style={{ width: "100%" }}
                    onClick={() => navigate("/notes")}
                  >
                    Cancel
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Form>
      </Layout>
    </>
  );
};

export default CreateNotes;
