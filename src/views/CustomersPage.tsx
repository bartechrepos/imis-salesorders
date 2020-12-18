import { Button, Space, Table, Tag } from 'antd';
import React, { useState, useEffect } from 'react';
import AddCustomerModal from '../components/customers/AddCustomerModal';
import ProgressCircle from '../components/ProgressCircles/Progress';
const columns = [
  {
    title: 'العميل',
    key: 'clientDetails',
    dataIndex: 'clientDetails',
    render: (clientDetails: {}[]) => (
      <>
        {clientDetails.map((detail: any) => {
          return (
            <div key={detail.clientNo}>
              <div>
                <h3>رقم العميل: </h3>
                <h3 className="table-data">{detail.clientNo}</h3>
              </div>
              <div>
                <h3>اسم الشركة: </h3>
                <h3 className="table-data">{detail.companyName}</h3>
              </div>
              <div>
                <h3>اسم العميل: </h3>
                <h3 className="table-data">{detail.clientName}</h3>
              </div>
            </div>
          );
        })}
      </>
    ),
  },
  {
    title: 'الموقف المالي',
    key: 'accounts',
    dataIndex: 'accounts',
    render: (accounts: {}[]) => (
      <>
        {accounts.map((account: any) => {
          return (
            <div key={account.current}>
              <div>
                <h3>الرصيد: </h3>
                <h3 className="table-data">{account.current}</h3>
              </div>
              <div>
                <h3>المدفوع: </h3>
                <h3 className="table-data">{account.paid}</h3>
              </div>
              <div>
                <h3>المتبقي: </h3>
                <h3 className="table-data">{account.remaining}</h3>
              </div>
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

const clients = [
  {
    clientDetails: [
      {
        clientNo: '223425235235',
        clientName: 'أحمد محمد',
        companyName: 'العقيل للأثاث',
      },
    ],
    accounts: [
      {
        current: '1500',
        paid: '2000',
        remaining: '3000',
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
    clientDetails: [
      {
        clientNo: '223425235235',
        clientName: 'مؤمن بيومي ',
        companyName: 'بار للتقنية',
      },
    ],
    accounts: [
      {
        current: '3500',
        paid: '2000',
        remaining: '3000',
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
    clientDetails: [
      {
        clientNo: '223425235235',
        clientName: 'مؤمن بيومي ',
        companyName: 'بار للتقنية',
      },
    ],
    accounts: [
      {
        current: '3500',
        paid: '2000',
        remaining: '3000',
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
    clientDetails: [
      {
        clientNo: '223425235235',
        clientName: 'مؤمن بيومي ',
        companyName: 'بار للتقنية',
      },
    ],
    accounts: [
      {
        current: '3500',
        paid: '2000',
        remaining: '3000',
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
    clientDetails: [
      {
        clientNo: '223425235235',
        clientName: 'مؤمن بيومي ',
        companyName: 'بار للتقنية',
      },
    ],
    accounts: [
      {
        current: '3500',
        paid: '2000',
        remaining: '3000',
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
export default function CustomersPage() {
  const [clientsState, setClientsState] = useState<{}[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const customerSaved = () => {
    //fetchCustomers();
    // to add the new Client to the data and display it
    // setClientsState(prevClients => [...prevClients, newClient])
    setModalOpen(false);
  };
  useEffect(() => {
    setClientsState(clients);
  }, [customerSaved]);
  return (
    <div>
      {/**
      <SelectCustomer /> */}
      <AddCustomerModal
        visible={modalOpen}
        onSave={customerSaved}
        closeMe={() => setModalOpen(false)}
      />
      <div className="centered">
        <Button type="primary" onClick={() => setModalOpen(true)}>
          إضافة عميل جديد
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={clientsState}
        bordered
        scroll={{ x: true }}
      />
    </div>
  );
}
