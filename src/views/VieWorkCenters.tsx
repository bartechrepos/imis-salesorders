import React, { useState, useEffect } from "react";
import { Row, Col, Button, Collapse } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { createNullishCoalesce } from "typescript";
const ViewWorkCenter = () => {
  interface factory {
    name: string;
    receivedMaterials: string[];
    sentMaterials: string[];
    finishedPiecesNo: number | string;
    remainingPiecesNo: number | string;
    timeSpent: string;
  }
  const factories = [
    {
      name: "1 مركز تقطيع",
      receivedMaterials: [
        "Wood",
        "Plywood",
        "Shiplap",
        "Tounge and Groove",
        "Stud",
        "Joist",
        "Rafter",
      ],
      sentMaterials: ["3 Doors", "5 bed boards"],
      finishedPiecesNo: "10",
      remainingPiecesNo: "6",
      timeSpent: "3:10",
    },
    {
      name: "مركز تجميع 2",
      receivedMaterials: [
        "Wood",
        "Plywood",
        "Shiplap",
        "Tounge and Groove",
        "Stud",
        "Joist",
        "Rafter",
      ],
      sentMaterials: ["table", "5 chairs"],
      finishedPiecesNo: "6",
      remainingPiecesNo: "5",
      timeSpent: "6:40",
    },
    {
      name: "3 مركز تغليف",
      receivedMaterials: [
        "Wood",
        "Plywood",
        "Shiplap",
        "Tounge and Groove",
        "Stud",
        "Joist",
        "Rafter",
      ],
      sentMaterials: ["night stand", "cupboard"],
      finishedPiecesNo: "12",
      remainingPiecesNo: "8",
      timeSpent: "5:00",
    },
  ];
  const { Panel } = Collapse;

  const [factoriesState, setFactoriesState] = useState<factory[]>([]);
  const [factoryState, setFactoryState] = useState<any>({});
  const [showDetailsState, setShowDetailsState] = useState<boolean>(false);
  useEffect(() => {
    setFactoriesState(factories);
  }, []);
  const showDetailsHandler = (clickedFactory: factory) => {
    let factoryDetails = { ...clickedFactory };
    setFactoryState(factoryDetails);
    setShowDetailsState(true);
    console.log(factoryDetails);
  };
  return (
    <>
      {/* the factories */}
      <Row
        gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
        style={{ direction: "rtl" }}
      >
        {factoriesState.map((factory) => {
          return (
            <Col
              xs={8}
              lg={8}
              style={{
                backgroundColor: "#f3f3f3",
                border: "1px solid #707070",
                cursor: "pointer",
                // margin: '5px 10px',
              }}
              onClick={() => showDetailsHandler(factory)}
            >
              <h3>{factory.name}</h3>
              <h5>
                عدد القطع: {factory.finishedPiecesNo} /{" "}
                {factory.remainingPiecesNo}
              </h5>
              <h5>وقت العمل : {factory.timeSpent}</h5>
            </Col>
          );
        })}
      </Row>
      {/* selected factory details */}
      {showDetailsState && (
        <div className="factory-details">
          <div className="factory-header">
            <Button
              className="close-details"
              onClick={() => {
                setShowDetailsState(false);
              }}
            >
              <CloseOutlined />
            </Button>
            <h2 className="factory-title">{factoryState.name}</h2>
          </div>
          <div className="factory-content">
            <div className="received-materials">
              <Collapse>
                <Panel header="الخامات المستلمة" key="1">
                  {factoryState.sentMaterials.map((material: string) => {
                    return (
                      <span style={{ display: "inline-block" }}>
                        {material}
                      </span>
                    );
                  })}
                </Panel>
                <Panel header="الخامات المرسلة" key="2">
                  {factoryState.receivedMaterials.map((material: string) => {
                    return (
                      <span style={{ display: "inline-block" }}>
                        {material}
                      </span>
                    );
                  })}
                </Panel>
              </Collapse>
            </div>
            <div className="sent-materials">
              <h4></h4>
            </div>

            <h3 className="factory-numbers">
              القطع التي تم انهاؤها: {factoryState.finishedPiecesNo}
            </h3>
            <h3 className="factory-numbers">
              القطع المتبقية: {factoryState.remainingPiecesNo}
            </h3>
            <h3 className="factory-numbers">
              الوقت المستغرق لإنهاء الأعمال: {factoryState.timeSpent}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};
export default ViewWorkCenter;
