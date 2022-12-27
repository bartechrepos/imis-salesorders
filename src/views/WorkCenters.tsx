import React, { useState } from 'react';
import { Button, Modal, Form, Input, InputNumber, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Timer from '../components/CountUpTimer';
interface material {
  name: string;
  count: number;
}
interface materials {
  material: {
    name: string;
    count: number;
  };
}
interface finishedMaterials {
  finishedMaterial: [
    {
      name: string;
      count: number;
    }
  ];
}
const WorkCenter = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [enteringMaterialModal, setEnteringMaterialModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [enteredMaterial, setEnteredMaterial] = useState<any>({});
  const [finishedMaterials, setFinishedMaterials] = useState<any>([]);
  const [finishedMaterialsCount, setFinishedMaterialsCount] = useState<number>(
    0
  );
  const [startTimer, setStartTimer] = useState(false);

  const showEnteringModal = () => {
    setEnteringMaterialModal(true);
    setVisible(true);
  };
  const showDoneModal = () => {
    setEnteringMaterialModal(false);
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      setModalText('');
      setEnteringMaterialModal(false);
    }, 2000);
  };
  const addNewMaterialHandler = (values: materials) => {
    console.log(values.material);
    setEnteredMaterial(values.material);
    handleOk();
    setStartTimer(true);
  };
  const addFinishedMaterial = (values: finishedMaterials) => {
    console.log(values.finishedMaterial);
    setFinishedMaterials([...finishedMaterials, values.finishedMaterial]);

    let finishedCount = 0;
    values.finishedMaterial.forEach(
      (a) => (finishedCount = finishedCount + a.count)
    );
    setFinishedMaterialsCount(finishedCount);
    handleOk();
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      <div className="page-header">
        <h3>القطع التي تم استلامها : {enteredMaterial.count}</h3>
        <h3>القطع التي تم انهاؤها : {finishedMaterialsCount}</h3>
      </div>
      <div className="page-buttons">
        <Button
          style={{ margin: '5px 8px' }}
          type={'primary'}
          onClick={showEnteringModal}
        >
          استلام خامات
        </Button>
        <Button
          style={{ margin: '5px 8px' }}
          onClick={showDoneModal}
          disabled={enteredMaterial.count == 0 || enteredMaterial.count == null}
        >
          تسليم خامات
        </Button>
      </div>
      <Modal
        title="Title"
        visible={visible}
        footer={null}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {enteringMaterialModal ? (
          <Form onFinish={addNewMaterialHandler}>
            <Form.Item
              label="اسم القطعة / الخامة"
              name={['material', 'name']}
              rules={[{ required: true, message: 'Missing Material name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="عدد القطع"
              name={['material', 'count']}
              rules={[{ required: true, message: 'Missing Material count' }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Form onFinish={addFinishedMaterial}>
            <Form.List name="finishedMaterial">
              {(fields, { add, remove }) => (
                <>
                  {fields.length === 0 && (
                    <p>Click add a field to enter newly finished material</p>
                  )}
                  {fields.map((field) => (
                    <Space
                      key={field.key}
                      style={{ display: 'flex', marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        label="اسم القطعة / الخامة"
                        name={[field.name, 'name']}
                        rules={[
                          { required: true, message: 'Missing Material name' },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="عدد القطع"
                        name={[field.name, 'count']}
                        rules={[
                          { required: true, message: 'Missing Material count' },
                        ]}
                      >
                        <InputNumber />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(field.name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
        <p>{modalText}</p>
      </Modal>

      {startTimer && (
        <div className="timer-contaier">
          <Timer />
        </div>
      )}
    </div>
  );
};
export default WorkCenter;
