import { Button, Form, Input, Modal, Carousel, Row, Col } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import React, { useContext, useState, useEffect, useRef } from 'react';
import config from '../../Configs';
import { AppContext } from '../../context/AppContextProvider';
interface product {
  image: string;
  name: string;
  specifications: string[];
}
type InstructionsModalProps = {
  visible: boolean;
  title: string;
  closeMe: () => void;
  onSave: () => void;
};
const products = [
  {
    image:
      'https://d31wxntiwn0x96.cloudfront.net/gnnhhf/productimages/2801.png?width=800&etag=%22710f7033e2f503c1f144e72efcadfaac%22',
    name: 'دولاب',
    specifications: [
      'الخامة: خشب',
      'الطول: 120',
      'العرض: 140',
      'العمق: 20',
      'الارتفاع: 25',
      'ارفف: 4',
      'مقابض: خشب',
    ],
  },
  {
    image:
      'https://cb2.scene7.com/is/image/CB2/DondraBedQueenSHS16_1x1/?$web_zoom$&190905020920&wid=450&hei=450',
    name: 'سرير',
    specifications: [
      'الخامة: خشب',
      'الطول: 120 سم',
      'العرض: 140 سم',
      'الارتفاع: 25 سم',
      'مرتبة: 2 سم',
      'ألواح: خشب',
    ],
  },
  {
    image:
      'https://www.121officefurniture.co.uk/Uploads/2018/04/27/x600/X5GywbAn_tc-730mm-cupboard-tes745cpma-1.jpg',
    name: 'كومود',
    specifications: [
      'الخامة: خشب',
      'الطول: 80 سم',
      'العرض: 80 سم',
      'العمق: 20 سم',
      'الارتفاع: 25 سم',
      'ارفف: 4 سم',
      'مقابض: خشب',
    ],
  },
  {
    image:
      'data:image/jpeg;base64,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',
    name: 'شناطة',
    specifications: [
      'الخامة: خشب',
      'الطول: 120',
      'العرض: 140',
      'العمق: 20',
      'الارتفاع: 25',
      'ارفف: 4',
      'مقابض: خشب',
    ],
  },
  {
    image:
      'https://d3re0f381bckq9.cloudfront.net/36913617_img-20191107-wa0001_640x640.jpg',
    name: 'تسريحة',
    specifications: [
      'الخامة: خشب',
      'الطول: 120',
      'العرض: 140',
      'العمق: 20',
      'الارتفاع: 25',
      'ارفف: 4',
      'مقابض: خشب',
    ],
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/61nKGKkNHeL._SL1204_.jpg',
    name: 'ترابيزة',
    specifications: [
      'الخامة: خشب',
      'الطول: 120',
      'العرض: 140',
      'العمق: 20',
      'الارتفاع: 25',
      'ارفف: 4',
      'مقابض: خشب',
    ],
  },
];
export default function InstructionsModal(props: InstructionsModalProps) {
  const sliderRef = useRef<any>();
  const [productsState, setProductsState] = useState<product[]>([]);
  useEffect(() => {
    setProductsState(products);
    let startIndex: number = products.findIndex(
      (product) => product.name === props.title
    );
    if (sliderRef && sliderRef.current) {
      sliderRef.current.goTo(startIndex, true);
    }
    console.log('index is: ', startIndex);
  }, []);
  let { visible, closeMe, onSave } = props;
  const { setContextCustomer } = useContext(AppContext);
  const handleSave = async (values: any) => {
    onSave();
  };
  const hadleClose = () => {
    closeMe();
  };
  return (
    <Modal
      className="instructions-modal"
      title={props.title}
      visible={visible}
      onOk={handleSave}
      onCancel={hadleClose}
      okButtonProps={{ hidden: true }}
      // cancelText="الغاء"
    >
      <div style={{ marginTop: '2em' }}>
        <Button
          onClick={() => sliderRef.current.next()}
          className="custom-slider-btn right-btn"
        >
          <ArrowRightOutlined />{' '}
        </Button>
        <Carousel effect="fade" ref={sliderRef} dots={false}>
          {productsState.map((product) => {
            return (
              <div>
                <Row
                  gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
                  style={{ direction: 'rtl', textAlign: 'center' }}
                >
                  {/* img and name */}
                  <Col
                    xs={12}
                    lg={12}
                    style={{ borderLeft: '1px solid #707070' }}
                  >
                    <h3 style={{ fontSize: '20px', fontWeight: 500 }}>
                      {product?.name}
                    </h3>
                    <img src={product?.image} style={{ width: '100%' }} />
                  </Col>
                  {/* specifications */}
                  <Col
                    xs={12}
                    lg={12}
                    style={{
                      marginTop: '20%',
                    }}
                  >
                    {product.specifications.map((spec) => {
                      return (
                        <span
                          style={{
                            display: 'inline-block',
                            margin: '5px 15px',
                            fontSize: '16px',
                            fontWeight: 500,
                          }}
                        >
                          {' '}
                          {spec}{' '}
                        </span>
                      );
                    })}
                  </Col>
                </Row>
              </div>
            );
          })}
        </Carousel>
        <Button
          onClick={() => sliderRef.current.prev()}
          className="custom-slider-btn left-btn"
        >
          <ArrowLeftOutlined />{' '}
        </Button>
      </div>
    </Modal>
  );
}
