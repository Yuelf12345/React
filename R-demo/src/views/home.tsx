import React, { useState, useEffect } from "react";
import type { FormProps, GetProp } from "antd";
import { apiTableDate } from "../api";
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
const data: DataType[] = [];
const plainOptions = ["nice", "developer", "cool", "teacher", "loser"];

interface FieldType extends DataType {}

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [dataSource, setDataSource] = useState<DataType[]>(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data }: { data: DataType[] } = await apiTableDate();
        setDataSource(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (record: DataType) => {
    const newData = dataSource.filter((item) => item.key !== record.key);
    // 更新dataSource状态
    setDataSource(newData);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  const [form] = Form.useForm();
  const handleOk = async () => {
    try {
      await form.validateFields();
      console.log("表单验证通过");
      // 获取表单数据
      const newRecord = await form.getFieldsValue();
      setDataSource([...dataSource, { ...newRecord }]);
      setOpen(false);
      form.resetFields();
    } catch (error) {
      console.log("表单验证失败", error);
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
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
          form={form}
          name="mainForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
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
            <InputNumber min={1} max={100} changeOnWheel />
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
