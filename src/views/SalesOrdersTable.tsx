import { Button, Space, Table, Tag } from 'antd';
import React, { useState, useEffect } from 'react';

import ProgressCircle from '../components/ProgressCircles/Progress';
const columns = [
  {
    title: 'النوع',
    key: 'product',
    dataIndex: 'product',
    render: (product: {}[]) => (
      <>
        <div>
          <h3 style={{ textAlign: 'center' }}>{product}</h3>
        </div>
      </>
    ),
  },
  {
    title: 'تفاصيل',
    key: 'productSpecifications',
    dataIndex: 'productSpecifications',
    render: (productSpecifications: {}[]) => (
      <>
        {productSpecifications.map((spec: any) => {
          return (
            <div key={spec.clientNo}>
              <h3>أبعاد: </h3>
              <div>
                <h3>
                  <span>طول: {spec.length} سم </span> -{' '}
                  <span> عرض: {spec.width} سم </span>
                </h3>
                <h3>
                  <span>عمق: {spec.depth} سم </span> -{' '}
                  <span> عدد أرفف: {spec.shelvesNo} سم </span>
                </h3>
                <h3>
                  <span>ارتفاع: {spec.height} سم </span>
                </h3>
              </div>
              <Button
                style={{
                  padding: '0.25em 1em 1.75em',
                  height: '2em',
                  margin: '0.5em',
                  color: 'white',
                  backgroundColor: 'rgb(41, 184, 184)',
                  fontFamily: 'Cairo',
                  fontSize: '1.3em',
                  fontWeight: 'bold',
                  borderRadius: '0.25em',
                  borderColor: 'rgb(41, 184, 184)',
                  float: 'left',
                }}
              >
                كل التفاصيل
              </Button>
            </div>
          );
        })}
      </>
    ),
  },
  {
    title: 'تواريخ ',
    key: 'dates',
    dataIndex: 'dates',
    render: (dates: {}[]) => (
      <>
        {dates.map((date: any) => {
          return (
            <div key={date.startDate}>
              <div>
                <h3>تاريخ البدء: </h3>
                <h3>{date.startDate}</h3>
              </div>
              <div>
                <h3>تاريخ الدفعة المقبلة: </h3>
                <h3>{date.nextPatchDate}</h3>
              </div>
            </div>
          );
        })}
      </>
    ),
  },
  {
    title: 'الحالة ',
    key: 'status',
    dataIndex: 'status',
    render: (status: {}[]) => (
      <>
        {status.map((state: any) => {
          return (
            <div key={state.client}>
              <div>
                <h3 style={{ textAlign: 'center' }}>العميل: </h3>
                {/* the text in state.client will be enhanced once we add localization */}
                <h3 className={`project-state ${state.client}`}>
                  {state.client}
                </h3>
              </div>
              <div>
                <h3 style={{ textAlign: 'center' }}>المشروع: </h3>
                {/* the text in state.project will be enhanced once we add localization */}
                <h3 className={`project-state ${state.project}`}>
                  {state.project}
                </h3>
              </div>
            </div>
          );
        })}
      </>
    ),
  },
  {
    title: 'موقف المشروع',
    key: 'progress',
    dataIndex: 'progress',
    render: (progress: number) => (
      <>
        <ProgressCircle percent={progress} width={70} />
      </>
    ),
  },
  {
    title: 'ملاحظات',
    key: 'notes',
    dataIndex: 'notes',
    render: (notes: string[]) => (
      <>
        {notes.map((note: string, index: string | number) => {
          return (
            <ul className="table-notes" key={index}>
              <li>{note}</li>
            </ul>
          );
        })}
      </>
    ),
  },
];

const orders = [
  {
    product: 'دولاب',
    productSpecifications: [
      {
        length: 160,
        width: 140,
        depth: 40,
        shelvesNo: 5,
        height: 20,
      },
    ],
    dates: [
      {
        startDate: 'نوفمبر 2020',
        nextPatchDate: 'ديسمبر 2020',
      },
    ],
    status: [
      {
        client: 'excellent',
        project: 'stopped',
      },
    ],
    progress: 45,
    notes: ['ملاحظة 1', 'ملاحظة 2'],
  },
  {
    product: 'دولاب',
    productSpecifications: [
      {
        length: 160,
        width: 140,
        depth: 40,
        shelvesNo: 5,
        height: 20,
      },
    ],
    dates: [
      {
        startDate: 'اكتوبر 2020',
        nextPatchDate: 'نوفمبر 2020',
      },
    ],
    status: [
      {
        client: 'good',
        project: 'excellent',
      },
    ],
    progress: 100,
    notes: ['ملاحظة 1', 'ملاحظة 2'],
  },
  {
    product: 'دولاب',
    productSpecifications: [
      {
        length: 160,
        width: 140,
        depth: 40,
        shelvesNo: 5,
        height: 20,
      },
    ],
    dates: [
      {
        startDate: 'اكتوبر 2020',
        nextPatchDate: 'نوفمبر 2020',
      },
    ],
    status: [
      {
        client: 'good',
        project: 'excellent',
      },
    ],
    progress: 76,
    notes: ['ملاحظة 1', 'ملاحظة 2'],
  },
  {
    product: 'دولاب',
    productSpecifications: [
      {
        length: 160,
        width: 140,
        depth: 40,
        shelvesNo: 5,
        height: 20,
      },
    ],
    dates: [
      {
        startDate: 'اكتوبر 2020',
        nextPatchDate: 'نوفمبر 2020',
      },
    ],
    status: [
      {
        client: 'good',
        project: 'excellent',
      },
    ],
    progress: 65,
    notes: ['ملاحظة 1', 'ملاحظة 2'],
  },
  {
    product: 'دولاب',
    productSpecifications: [
      {
        length: 160,
        width: 140,
        depth: 40,
        shelvesNo: 5,
        height: 20,
      },
    ],
    dates: [
      {
        startDate: 'اكتوبر 2020',
        nextPatchDate: 'نوفمبر 2020',
      },
    ],
    status: [
      {
        client: 'good',
        project: 'excellent',
      },
    ],
    progress: 65,
    notes: ['ملاحظة 1', 'ملاحظة 2'],
  },
];

export default function SalesOrdersTable() {
  const [ordersState, setOrdersState] = useState<{}[]>([]);

  useEffect(() => {
    setOrdersState(orders);
  }, []);
  return (
    <div>
      <Table
        columns={columns}
        dataSource={ordersState}
        bordered
        scroll={{ x: true }}
      />
    </div>
  );
}
