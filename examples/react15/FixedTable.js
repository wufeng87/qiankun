import React from 'react';

import { Table, Select } from 'antd';
// import 'antd/dist/antd.css'


const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,

  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
    render: () => {
      return (
        <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
          >
            {children}
          </Select>)
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 1; i++) {
  data.push({
    key: i,
    // name: `Edward King ${i}`,
    name: "Edward King ${i}",
    age: 32,
    // address: `London, Park Lane no. ${i}`,
    address: "London, Park Lane no. ${i}",
  });
}

export default function FixedTable() {
    return (
        <Table columns={columns} dataSource={data} 
          pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
    )
}

// tableLayout="fixed"  
