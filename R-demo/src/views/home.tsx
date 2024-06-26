import React, { useState } from "react";
import type { FormProps, GetProp } from "antd";
import {
  Space,
  Table,
  Tag,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Checkbox,
} from "antd";
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const plainOptions = ["nice", "developer", "cool", "teacher", "loser"];

interface HomeProps {}

interface FieldType extends DataType {}

const Home: React.FC<HomeProps> = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [dataSource, setDataSource] = useState(data);
  const handleDelete = (record: DataType) => {
    const newData = dataSource.filter((item) => item.key !== record.key);
    // 更新dataSource状态
    setDataSource(newData);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  // const handleOk: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  //   setConfirmLoading(true);
  //   // setTimeout(() => {
  //   //   setOpen(false);
  //   //   setConfirmLoading(false);
  //   // }, 2000);
  // };

  const handleOk = async () => {
    return new Promise((resolve, reject) => {
      setConfirmLoading(true);
    });
  }


  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <div>
      <h1>Home</h1>
      <Button type="primary" onClick={handleAdd}>
        新增
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="key"
            name="key"
            rules={[{ required: true, message: "Please input your key!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="age"
            name="age"
            rules={[{ required: true, message: "Please input your age!" }]}
          >
            <InputNumber min={1} max={100} defaultValue={1} changeOnWheel />
          </Form.Item>
          <Form.Item<FieldType>
            label="address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="tags"
            name="tags"
            rules={[{ required: true, message: "Please input your tags!" }]}
          >
            <Checkbox.Group
              options={plainOptions}
              defaultValue={["Apple"]}
              onChange={onChange}
            />
          </Form.Item>
        </Form>
      </Modal>
      <Table
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age",
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
          },
          {
            title: "Tags",
            key: "tags",
            dataIndex: "tags",
            render: (_, { tags }) => (
              <>
                {tags.map((tag) => {
                  let color = tag.length > 5 ? "geekblue" : "green";
                  if (tag === "loser") {
                    color = "volcano";
                  }
                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </>
            ),
          },
          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <Space size="middle">
                <a>Invite {record.name}</a>
                <a onClick={() => handleDelete(record)}>Delete</a>
              </Space>
            ),
          },
        ]}
        dataSource={dataSource}
      />
      ;
    </div>
  );
};

export default Home;
