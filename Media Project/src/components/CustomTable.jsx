import React, { useEffect, useState } from "react";
import { Button, Table as AntdTable } from "antd";
import Cookies from "js-cookie";
import { useGetContactsQuery } from "../feature/api/contactApi";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const CustomTable = () => {
  // Get the token from Cookies
  const parsedToken = Cookies.get("token");
const token = JSON.parse(parsedToken);

  // Use the useGetContactsQuery hook to fetch data from the API
  const { data, isLoading, error } = useGetContactsQuery(token);
  console.log("Token:", token);
  console.log("API Data:", data);
  console.log("API Loading:", isLoading);
  console.log("API Error:", error);

  // Renamed Table to CustomTable
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching data</div>
      ) : data && data?.contacts?.data ? ( // Check if data and data.data are defined before rendering the table
        <AntdTable
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data?.contacts?.data} // Access the actual data using data.data
        />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default CustomTable;
