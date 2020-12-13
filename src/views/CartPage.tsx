import { Button, Card, notification } from "antd";
import Axios from "axios";
import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import SoSqFooterButtons from "../components/SoSqFooterButtons";
import config from "../Configs";
import { AppContext } from "../context/AppContextProvider";
import { Post } from "../query/helpers";
import { SalesOrderType, SoSqDetailsResponseType } from "../types";

interface CartPageProps extends RouteComponentProps {}

export default function CartPage({ history }: CartPageProps) {
  const { salesOrder, setSalesOrder } = useContext(AppContext);

  const openNotification = () => {
    notification.open({
      message: "تم تسجيل امر البيع بنجاح ",
      description: "تم تسجيل امر البيع بنجاح سيتم تحويلك للشاشة الرئيسية",
      onClick: () => {
        //console.log("Notification Clicked!");
      },
      duration: 2,
      onClose: () => {
        history.push("/");
        setSalesOrder({} as SalesOrderType);
      },
    });
  };

  const submitSalesOrder = async () => {
    // so_type: 01001-105C50CF-8CC5-4627-82B5-80DD3E660189
    // customer: 01001-D808105D-C2D1-450E-AB8F-446478FC7313
    // date: 2020-10-20
    // curreny: 01001-D0DA0215-C43C-40F7-B63C-D0F46447DA7C
    // rate: 1,
    // created by 1
    let [row] = await Post(
      config.API_URL + "imis/salesorders",
      {
        CustomerID: salesOrder.customer.GUID,
      },
      {}
    );
    console.log("%c Mo2Log  row.GUID", "background: #bada55", row.GUID);
    const salesOrderID = row.GUID;

    let axiosArray = [];
    for (let index = 0; index < salesOrder.details.length; index++) {
      let req = Axios.post(config.API_URL + "imis/salesorders/detail", {
        HeadID: salesOrderID,
        ItemID: salesOrder.details[index].product.GUID,
        Qnt: salesOrder.details[index].count,
        detailIndex: index,
      });
      axiosArray.push(req);
    }
    let res = await Axios.all(axiosArray);
    let respData = res.map((resp) => {
      const { detailIndex } = JSON.parse(resp?.config?.data);
      //console.log(salesOrder.details[detailIndex]);
      return {
        GUID: resp?.data[0]?.GUID,
        detailIndex,
      } as SoSqDetailsResponseType;
    });
    // Now send all Specs
    let specsReqArr: any[] = [];
    respData.forEach((item) => {
      let detailGUID = item.GUID;
      salesOrder.details[item.detailIndex].specElements.forEach(
        (singleSpec) => {
          let req = Axios.post(config.API_URL + "imis/salesorders/spec", {
            HeadID: detailGUID,
            ElementId: singleSpec.GUID,
            Value: singleSpec.valueLabel
              ? singleSpec.valueLabel
              : singleSpec.value,
          });
          specsReqArr.push(req);
        }
      );
    });
    let specRes = await Axios.all(specsReqArr);
    console.log("%c Mo2Log specRes ", "background: #bada55", specRes);
    openNotification();

    /*
    let [detail_row] = await Post(
      config.API_URL + "imis/salesorders/detail",
      {
        HeadID,
        ItemID: salesOrder.details[0].product.GUID,
        Qnt: salesOrder.details[0].count,
      },
      {}
    );
    console.log("%c Mo2Log detail_row ", "background: #bada55", detail_row);
   */
  };
  const deleteSalesOrder = () => {
    localStorage.removeItem("SALES_ORDER");
    setSalesOrder({} as SalesOrderType);
    history.push("/");
  };
  const deleteDetialByIndex = (index: number) => {
    salesOrder.details.splice(index, 1);
    setSalesOrder(salesOrder);
  };

  console.log("%c Mo2Log salesOrder ", "background: #bada55", salesOrder);
  return (
    <>
      <Card>
        <h3>امر بيع لصالح {salesOrder.customer?.Name}</h3>
      </Card>
      {salesOrder.details?.map((soDetail, index) => (
        <Card key={index}>
          <h3>
            عدد: {soDetail.count} - صنف {soDetail.product?.ArabicDescription}
          </h3>
          {soDetail.specElements?.map((element) => (
            <Card
              key={element.GUID}
              bodyStyle={{ padding: "16px" }}
              style={{
                backgroundColor: "#f5e6fdb3",
                marginBottom: "8px",
              }}
            >
              <h4>
                {element.ArabicDescription} :{" "}
                {element.valueLabel ? element.valueLabel : element.value}
                {element.UnitId ===
                  "01001-AD06DE17-6E8E-4B82-9F0F-401ED621A888" && (
                  <span> (سـم) </span>
                )}
              </h4>
            </Card>
          ))}
          <div style={{ textAlign: "left" }}>
            <Button
              danger
              type="primary"
              onClick={() => {
                deleteDetialByIndex(index);
              }}
            >
              مسح الصنف
            </Button>
          </div>
        </Card>
      ))}
      <SoSqFooterButtons
        onSubmit={submitSalesOrder}
        onDelete={deleteSalesOrder}
        sosq="so"
      />
    </>
  );
}
