import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Card } from "antd"; //antd components
import { LeftOutlined } from "@ant-design/icons";
import "../assets/notes.css";

const ViewNotes = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <Row type="flex" align="middle">
        <Col span={8}>
          <Card
            type="inner"
            title="Notes"
            bordered={true}
            extra={<LeftOutlined title="Back" onClick={() => navigate("/notes")} />}
            className="mt-15"
          >
            <p>
              <span className="title">Title:</span> {state.title}
            </p>
            <p>
              <span className="title">Content:</span> {state.content}
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ViewNotes;
