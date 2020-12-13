import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContextProvider";
import { SalesOrderType } from "../../types";

const countQny = (salesOrder: SalesOrderType) => {
  let count = 0;
  salesOrder?.details?.forEach((element) => {
    count += element.count;
  });
  return count;
};
export default function SOButton() {
  const { salesOrder } = useContext(AppContext);
  let count = countQny(salesOrder);
  return (
    <>
      <div
        style={{
          display: "inline-block",
          position: "sticky",
          bottom: "1em",
          right: "100%",
          marginLeft: "1em",
        }}
      >
        <Button
          icon={<ShoppingCartOutlined />}
          type="primary"
          size="large"
          disabled={!(salesOrder?.details?.length > 0)}
        >
          <Link to="/cart">
            <b
              style={{
                fontSize: "1.1em",
                color: salesOrder?.details?.length > 0 ? "white" : "#332211",
              }}
            >
              عرض امر البيع ({count})
            </b>
          </Link>
        </Button>
      </div>
    </>
  );
}
