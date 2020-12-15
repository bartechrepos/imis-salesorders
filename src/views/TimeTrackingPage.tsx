import React from 'react';
import { useState } from 'react';
// import { Button, Space, Table, Tag } from 'antd';
import { Row, Col, Divider, Button } from 'antd';
import { useEffect } from 'react';

// local imports
import ProgressCircle from '../components/ProgressCircles/Progress';
import TimerCountDown from '../components/ProjectCountDownTimer/Timer';
interface projectsTyps {
  projectId: string;
  projectName: string;
  projectProgress: number;
  projectType: string;
  projectMainServices: string[];
  projectSecondaryServices: string[];
  ProjectCurrentAccounts: number;
  ProjectRemainingAccounts: number;
  projectNextPatch: string;
  projectStartDate: string;
  projectEndDate: string; // this will no longer be needed once localization is available
  projectDeadLine: string;
}

export default function TimeTrackingPage() {
  let projects = [
    {
      projectId: '1',
      projectName: 'مشروع القاهرة',
      projectProgress: 76,
      projectType: 'فندق',
      projectMainServices: ['غرف', 'سويت'],
      projectSecondaryServices: ['دولاب', 'سرير', 'كومود'],
      ProjectCurrentAccounts: 0,
      ProjectRemainingAccounts: 0,
      projectNextPatch: 'ديسمبر 2020',
      projectStartDate: 'نوفمبر 2020',
      projectEndDate: 'يناير 2021', // this will no longer be needed once localization is available
      projectDeadLine: '2021-1-20', // only this will be formatted for the countdown and the End Date
    },
    {
      projectId: '2',
      projectName: 'مشروع الإسكندرية',
      projectProgress: 50,
      projectType: 'فندق',
      projectMainServices: ['غرف', 'سويت'],
      projectSecondaryServices: ['دولاب', 'سرير', 'كومود'],
      ProjectCurrentAccounts: 200000,
      ProjectRemainingAccounts: 150000,
      projectNextPatch: 'ديسمبر 2020',
      projectStartDate: 'أكتوبر 2020',
      projectEndDate: 'ديسمير 2020', // this will no longer be needed once localization is available
      projectDeadLine: '2020-12-20', // only this will be formatted for the countdown and the End Date
    },
    {
      projectId: '3',
      projectName: 'مشروع مصر الجديدة',
      projectProgress: 100,
      projectType: 'فندق',
      projectMainServices: ['غرف', 'سويت'],
      projectSecondaryServices: ['دولاب', 'سرير', 'كومود'],
      ProjectCurrentAccounts: 200000,
      ProjectRemainingAccounts: 200000,
      projectNextPatch: 'ديسمبر 2020',
      projectStartDate: 'نوفمبر 2020',
      projectEndDate: 'ديسمبر 2020', // this will no longer be needed once localization is available
      projectDeadLine: '2020-12-10', // only this will be formatted for the countdown and the End Date
    },
    {
      projectId: '4',
      projectName: 'مشروع القاهرة',
      projectProgress: 76,
      projectType: 'فندق',
      projectMainServices: ['غرف', 'سويت'],
      projectSecondaryServices: ['دولاب', 'سرير', 'كومود'],
      ProjectCurrentAccounts: 0,
      ProjectRemainingAccounts: 0,
      projectNextPatch: 'ديسمبر 2020',
      projectStartDate: 'نوفمبر 2020',
      projectEndDate: 'مارس 2021', // this will no longer be needed once localization is available
      projectDeadLine: '2021-3-20', // only this will be formatted for the countdown and the End Date
    },
    {
      projectId: '5',
      projectName: 'مشروع القاهرة',
      projectProgress: 70,
      projectType: 'فندق',
      projectMainServices: ['غرف', 'سويت'],
      projectSecondaryServices: ['دولاب', 'سرير', 'كومود'],
      ProjectCurrentAccounts: 0,
      ProjectRemainingAccounts: 0,
      projectNextPatch: 'ديسمبر 2020',
      projectStartDate: 'نوفمبر 2020',
      projectEndDate: 'يناير 2022', // this will no longer be needed once localization is available
      projectDeadLine: '2022-1-20', // only this will be formatted for the countdown and the End Date
    },
  ];
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  const [projectsState, setProjectsState] = useState<projectsTyps[]>([]);
  useEffect(() => {
    setProjectsState(projects);
  }, []);

  return (
    <div className="timeTracking-page">
      تتبع الوقت
      {projectsState.map((project) => {
        return (
          <div
            key={project.projectId}
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
                    <h3 className="project-name">{project.projectName}</h3>
                  </Col>
                  <Col className="gutter-row" xs={24} lg={12}>
                    <ProgressCircle
                      percent={project.projectProgress}
                      width={70}
                    />
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
                        {project.projectType}
                      </Button>
                    </div>
                    <div>
                      {project.projectMainServices.map((service) => {
                        return (
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
                            {service}
                          </Button>
                        );
                      })}
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
                    {project.projectSecondaryServices.map((secService) => {
                      return (
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
                          {secService}
                        </Button>
                      );
                    })}
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
                  <h3 style={{ display: 'inline-block', float: 'left' }}>
                    {project.ProjectCurrentAccounts}
                  </h3>
                </div>
                <div>
                  <h3 style={{ display: 'inline-block', textAlign: 'right' }}>
                    الباقي:{' '}
                  </h3>
                  <h3 style={{ display: 'inline-block', float: 'left' }}>
                    {project.ProjectRemainingAccounts}
                  </h3>
                </div>
                <div>
                  <h3>موعد الدفعة المقبلة: </h3>
                  <h3>{project.projectNextPatch} </h3>
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
                  <h3> {project.projectStartDate}</h3>
                </div>
                <div>
                  <h3>تاريخ الانتهاء</h3>
                  <h3>{project.projectEndDate} </h3>
                </div>
              </Col>
              {/* project countdown */}
              <Col className="gutter-row" xs={24} lg={5}>
                <TimerCountDown deadline={project.projectDeadLine} />
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}
