"use client";
import React, { useState, useMemo } from "react";
import "./paymentledger.css"
import { Table, Pagination, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

interface PaymentData {
  key: string;
  paymentId: string;
  timestamp: string;
  amount: string;
  status: string;
  method: string;
  account: string;
  paymentType: string;
}

const PaymentLedger: React.FC = () => {
  const initialData: PaymentData[] = [
    {
      key: "1",
      paymentId: "PAY12346",
      timestamp: "2024-09-15, 14:30:00",
      amount: "$2,368",
      status: "Paid",
      method: "Wallet",
      account: "Spectrum Solutions Inc.",
      paymentType: "Mobit",
    },
    {
      key: "2",
      paymentId: "PAY12345",
      timestamp: "2024-09-16, 10:15:00",
      amount: "$5,000",
      status: "Pending",
      method: "Bank Transfer",
      account: "ARK Multicasting",
      paymentType: "Dollar",
    },
    {
      key: "3",
      paymentId: "PAY12348",
      timestamp: "2024-09-17, 09:00:00",
      amount: "$13,000",
      status: "Paid",
      method: "PayPal",
      account: "ARK Multicasting",
      paymentType: "Dollar",
    },
    {
      key: "4",
      paymentId: "PAY12323",
      timestamp: "2024-09-18, 16:45:00",
      amount: "$2,390",
      status: "Paid",
      method: "Bank Transfer",
      account: "ARK Multicasting",
      paymentType: "Dollar",
    },
    {
      key: "5",
      paymentId: "PAY12316",
      timestamp: "2024-09-19, 09:20:00",
      amount: "$3,200",
      status: "Paid",
      method: "Credit Card",
      account: "ARK Multicasting",
      paymentType: "Dollar",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [selectedFilter, setSelectedFilter] = useState("Recent");

  // Define columns for the table
  const columns = [
    {
      title: "Payment ID",
      dataIndex: "paymentId",
      key: "paymentId",
      className: "fs-14 p-16",
    },
    {
      title: "Time stamp",
      dataIndex: "timestamp",
      key: "timestamp",
      className: "fs-14 p-16",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      className: "fs-14 p-16",
    },
    {
      title: "Payment Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={status === "Pending" ? "text-red-500" : "text-green-500"}
        >
          {status}
        </span>
      ),
      className: "fs-14 p-16",
    },
    {
      title: "Payment Method",
      dataIndex: "method",
      key: "method",
      className: "fs-14 p-16",
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
      className: "fs-14 p-16",
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
      className: "fs-14 p-16",
    },
  ];

  // Filter data based on the selected dropdown filter
  const filteredData = useMemo(() => {
    switch (selectedFilter) {
      case "Recent":
        return [...initialData].sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      case "Oldest":
        return [...initialData].sort(
          (a, b) =>
            new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );
      case "Pending":
        return initialData.filter((item) => item.status === "Pending");
      case "Paid":
        return initialData.filter((item) => item.status === "Paid");
      default:
        return initialData;
    }
  }, [selectedFilter, initialData]);

  // Dropdown menu for sorting/filtering options
  const menu = (
    <Menu onClick={({ key }) => setSelectedFilter(key)}>
      <Menu.Item key="Recent">Recent</Menu.Item>
      <Menu.Item key="Oldest">Oldest</Menu.Item>
      <Menu.Item key="Pending">Pending</Menu.Item>
      <Menu.Item key="Paid">Paid</Menu.Item>
    </Menu>
  );

  // Handle pagination change
  const onPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const button_styles = {
    fontSize: "0.9722vw",
    padding: "1vw",
    borderRadius: "0.2vw",
    marginLeft: "0.5vw",
  };

  return (
    <div className="p-[1vw] bg-white rounded-sm">
      <div className="flex justify-between items-center mb-[0.8vw]">
        <h2 className="fs-16 font-medium">Payment Ledger</h2>
        <Dropdown overlay={menu}>
          <Button style={button_styles}>
            {selectedFilter} <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <Table columns={columns} dataSource={filteredData} pagination={false} />
      <div className="custom-pagination mt-[0.8vw]">
        <Pagination
          current={currentPage}
          align="end"
          pageSize={filteredData.length}
          total={filteredData.length * 10}
          onChange={onPageChange}
          showSizeChanger
          showQuickJumper
          pageSizeOptions={["5", "10", "20"]}
        />
      </div>
    </div>
  );
};

export default PaymentLedger;
