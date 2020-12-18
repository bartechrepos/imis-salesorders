import {
  Button,
  Form,
  Input,
  Modal,
  Row,
  Col,
  InputNumber,
  Upload,
  DatePicker,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import config from '../../Configs';
import { AppContext } from '../../context/AppContextProvider';
import { Post } from '../../query/helpers';
import { CustomerType } from '../../types';

type AddCustomerModalProps = {
  visible: boolean;
  closeMe: () => void;
  onSave: () => void;
};
export default function AddCustomerModal(props: AddCustomerModalProps) {
  const [form] = Form.useForm();
  let { visible, closeMe, onSave } = props;
  const { setContextCustomer } = useContext(AppContext);
  const handleSave = (fieldsValue: any) => {
    const rangeValue = fieldsValue['date-picker'];
    const startDate = fieldsValue['start-date'];
    const finishDate = fieldsValue['end-date'];
    console.log(rangeValue, '\n', startDate, '\n', finishDate);

    console.log(fieldsValue);

    // let [row] = await Post(
    //   config.API_URL + 'imis/customer',
    //   {
    //     name: values.name,
    //   },
    //   {}
    // );
    // console.log('%c Mo2Log  row.GUID', 'background: #bada55', row.GUID);
    // setContextCustomer({
    //   GUID: row.GUID,
    //   Name: values.name,
    // } as CustomerType);
    onSave();
    onReset();
  };
  const validateMessages = {
    required: 'يجب إدخال ${label}',
    types: {
      email: 'يرجى إدخال ${label} صالح ',
      number: '   ${label} يجب أن يكون رقمًا  ',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const hadleClose = () => {
    closeMe();
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Modal
      title="إضافة عميل جديد"
      visible={visible}
      onOk={handleSave}
      onCancel={hadleClose}
      okButtonProps={{ hidden: true }}
      footer={null}
    >
      <div style={{ marginTop: '2em' }}>
        <Form
          onFinish={handleSave}
          className="newCustomerForm"
          form={form}
          validateMessages={validateMessages}
        >
          <Row
            gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
            style={{ direction: 'rtl' }}
          >
            <Col xs={8} lg={8}>
              <Form.Item
                label="رقم العميل"
                name="clientNo"
                rules={[
                  { required: true, type: 'number', min: 0, max: 100000000000 },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="تاريخ البدء"
                name="startDate"
                rules={[{ required: true }]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                label="رقم الهاتف"
                name="phoneNo"
                rules={[{ required: true, type: 'number' }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="حالة العميل"
                name="clientState"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={8} lg={8}>
              <Form.Item
                label="اسم العميل"
                name="clientName"
                rules={[{ required: true, message: 'برجاء إدخال اسم العميل' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="تاريخ الانتهاء"
                name="endDate"
                rules={[{ required: true }]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                label=" الباقي"
                name="remaining"
                rules={[
                  { required: true, type: 'number', min: 0, max: 100000000 },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label=" ملاحظات"
                name="notes"
                rules={[{ required: true }]}
              >
                <Input.TextArea rows={5} />
              </Form.Item>
            </Col>
            <Col xs={8} lg={8}>
              <Form.Item
                label="اسم الشركة"
                name="companyName"
                rules={[{ required: true, message: 'برجاء إدخال اسم العميل' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="الرصيد"
                name="account"
                rules={[
                  { required: true, type: 'number', min: 0, max: 100000000 },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="المشروع"
                name="project"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row
            gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
            style={{ direction: 'rtl' }}
          >
            <Col xs={8} lg={8}>
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button
                  style={{
                    margin: '5px 10px',
                    background: '#625EF7',
                    color: '#ffffff',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 300,
                  }}
                >
                  <PlusOutlined style={{ marginLeft: '5px' }} /> إضافة صور
                </Button>
              </Upload>
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button
                  style={{
                    margin: '5px 10px',
                    background: '#625EF7',
                    color: '#ffffff',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 300,
                  }}
                >
                  <PlusOutlined style={{ marginLeft: '5px' }} /> إضافة رسم
                </Button>
              </Upload>
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button
                  style={{
                    margin: '5px 10px',
                    background: '#625EF7',
                    color: '#ffffff',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 300,
                  }}
                >
                  <PlusOutlined style={{ marginLeft: '5px' }} /> إضافة مقاسات
                </Button>
              </Upload>
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button
                  style={{
                    margin: '5px 10px',
                    background: '#625EF7',
                    color: '#ffffff',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 300,
                  }}
                >
                  <PlusOutlined style={{ marginLeft: '5px' }} /> إضافة فيديو
                </Button>
              </Upload>
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button
                  style={{
                    margin: '5px 10px',
                    background: '#625EF7',
                    color: '#ffffff',
                    borderRadius: '5px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 300,
                    fontFamily: 'Cairo',
                  }}
                >
                  <PlusOutlined style={{ marginLeft: '5px' }} /> إضافة تعليق
                  صوتي
                </Button>
              </Upload>
            </Col>
            <Col xs={8} lg={8}></Col>
            <Col xs={8} lg={8}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  fontSize: '16px',
                  fontWeight: 300,
                  fontFamily: 'Cairo',
                  margin: '5px 10px',
                  borderRadius: '5px',
                  border: 'none',
                }}
              >
                إضافة عميل جديد
              </Button>
              <Button
                type="primary"
                style={{
                  backgroundColor: '#4D4D4D',
                  fontSize: '16px',
                  fontWeight: 300,
                  fontFamily: 'Cairo',
                  margin: '5px 10px',
                  borderRadius: '5px',
                  border: 'none',
                }}
                onClick={onReset}
              >
                تحديث
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
}
