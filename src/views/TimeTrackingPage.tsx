import React from 'react';
import { useState } from 'react';
// import { Button, Space, Table, Tag } from 'antd';
import { Row, Col, Divider, Button } from 'antd';
import { useEffect } from 'react';

// local imports
import ProgressCircle from '../components/ProgressCircles/Progress';
import TimerCountDown from '../components/ProjectCountDownTimer/Timer';

export default function TimeTrackingPage() {
  let projects = ['project1', 'project2', 'project3'];
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  const [projectsState, setProjectsState] = useState(projects);

  return (
    <div>
      تتبع الوقت
      {projectsState.map((project) => {
        return (
          <div
            key={project}
            className="project-container"
            style={{
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
              {/* project name and progress */}
              <Col
                className="gutter-row"
                xs={24}
                lg={4}
                style={{ borderLeft: '1px solid #ccc' }}
              >
                <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                  <Col className="gutter-row" xs={24} lg={12}>
                    <h3>مشروع القاهرة</h3>
                  </Col>
                  <Col className="gutter-row" xs={24} lg={12}>
                    <ProgressCircle percent={100} width={70} />
                  </Col>
                </Row>
              </Col>
              {/* project services */}
              <Col
                className="gutter-row"
                xs={24}
                lg={6}
                style={{ borderLeft: '1px solid #ccc' }}
              >
                <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                  <Col className="gutter-row" xs={18} lg={18}>
                    <div>
                      <Button
                        style={{
                          padding: '.25em 1em 1.7em 1em',
                          height: '1.75em',
                          margin: '.5em',
                          color: 'white',
                          backgroundColor: '#625EF7',
                          fontFamily: 'Cairo',
                          fontSize: '1.3em',
                          fontWeight: 'bold',
                          borderRadius: '.25em',
                          borderColor: '#625EF7',
                        }}
                      >
                        فندق
                      </Button>
                    </div>
                    <div>
                      <Button
                        style={{
                          padding: '.25em 1em 1.7em 1em',
                          height: '1.75em',
                          margin: '.5em',
                          color: 'white',
                          backgroundColor: '#29B8B8',
                          fontFamily: 'Cairo',
                          fontSize: '1.3em',
                          fontWeight: 'bold',
                          borderRadius: '.25em',
                          borderColor: '#29B8B8',
                        }}
                      >
                        غرف
                      </Button>
                      <Button
                        style={{
                          padding: '.25em 1em 1.7em 1em',
                          height: '1.75em',
                          margin: '.5em',
                          color: 'white',
                          display: 'inline-block',
                          backgroundColor: '#29B8B8',
                          fontFamily: 'Cairo',
                          fontSize: '1.3em',
                          fontWeight: 'bold',
                          borderRadius: '.25em',
                          borderColor: '#29B8B8',
                        }}
                      >
                        سويت
                      </Button>
                    </div>
                  </Col>
                  <Col className="gutter-row" xs={6} lg={6}>
                    <Button
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        whiteSpace: 'break-spaces',
                        color: '#fff',
                        backgroundColor: '#B733F5',
                        marginRight: '-50%',
                        borderColor: '#B733F5',
                        fontFamily: 'Cairo',
                        fontSize: '1em',
                        fontWeight: 'bold',
                      }}
                    >
                      كل التفاصيل
                    </Button>
                  </Col>
                  <div>
                    <Button
                      style={{
                        padding: '.25em 1em 1.7em 1em',
                        height: '1.75em',
                        margin: '.5em',
                        color: 'white',
                        display: 'inline-block',
                        backgroundColor: '#787575',
                        fontFamily: 'Cairo',
                        fontSize: '1.3em',
                        fontWeight: 'bold',
                        borderRadius: '.25em',
                        borderColor: '#787575',
                      }}
                    >
                      دولاب
                    </Button>
                    <Button
                      style={{
                        padding: '.25em 1em 1.7em 1em',
                        height: '1.75em',
                        margin: '.5em',
                        color: 'white',
                        display: 'inline-block',
                        backgroundColor: '#787575',
                        fontFamily: 'Cairo',
                        fontSize: '1.3em',
                        fontWeight: 'bold',
                        borderRadius: '.25em',
                        borderColor: '#787575',
                      }}
                    >
                      سرير
                    </Button>
                    <Button
                      style={{
                        padding: '.25em 1em 1.7em 1em',
                        height: '1.75em',
                        margin: '.5em',
                        color: 'white',
                        display: 'inline-block',
                        backgroundColor: '#787575',
                        fontFamily: 'Cairo',
                        fontSize: '1.3em',
                        fontWeight: 'bold',
                        borderRadius: '.25em',
                      }}
                    >
                      كومود
                    </Button>
                  </div>
                </Row>
              </Col>
              {/* project accounts */}
              <Col
                className="gutter-row"
                xs={24}
                lg={5}
                style={{ borderLeft: '1px solid #ccc' }}
              >
                <div>
                  <h3 style={{ display: 'inline-block', textAlign: 'right' }}>
                    الرصيد:{' '}
                  </h3>
                  <h3 style={{ display: 'inline-block', float: 'left' }}>0</h3>
                </div>
                <div>
                  <h3 style={{ display: 'inline-block', textAlign: 'right' }}>
                    الباقي:{' '}
                  </h3>
                  <h3 style={{ display: 'inline-block', float: 'left' }}>0</h3>
                </div>
                <div>
                  <h3>موعد الدفعة المقبلة: </h3>
                  <h3>ديسمبر 2020</h3>
                </div>
              </Col>
              {/* project dates */}
              <Col
                className="gutter-row"
                xs={24}
                lg={4}
                style={{ borderLeft: '1px solid #ccc' }}
              >
                <div>
                  <h3>تاريخ البدء</h3>
                  <h3>نوفمبر 2020</h3>
                </div>
                <div>
                  <h3>تاريخ الانتهاء</h3>
                  <h3>نوفمبر 2020</h3>
                </div>
              </Col>
              {/* project countdown */}
              <Col className="gutter-row" xs={24} lg={5}>
                <TimerCountDown deadline={deadline} />
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}
