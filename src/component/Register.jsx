import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Input,
  Cascader,
  Select,
  Tooltip,
  // Row,
  // Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal,
} from "antd";
import "antd/dist/antd.css";
import { QuestionCircleOutlined } from "@ant-design/icons";

import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class Register extends React.Component {
  render() {
    // Register Form
    const { Option } = Select;
    const AutoCompleteOption = AutoComplete.Option;
    const residences = [
      {
        value: "Gaziabad",
        label: "Gaziabad",
        children: [
          {
            value: "sec-1",
            label: "sec-1",
            children: [
              {
                value: "vasundhara",
                label: "vasundhara",
              },
            ],
          },
        ],
      },
      {
        value: "jiangsu",
        label: "Jiangsu",
        children: [
          {
            value: "nanjing",
            label: "Nanjing",
            children: [
              {
                value: "zhonghuamen",
                label: "Zhong Hua Men",
              },
            ],
          },
        ],
      },
    ];
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
      const [form] = Form.useForm();

      const onFinish = (values) => {
        console.log("Received values of form: ", values);
      };

      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="91">+91</Option>
            {/* <Option value="87">+90</Option> */}
          </Select>
        </Form.Item>
      );
      const [autoCompleteResult, setAutoCompleteResult] = useState([]);

      return (
        <Modal
          visible={visible}
          title="Register"
          okText="Register"
          cancelText="Cancel"
          onCancel={onCancel}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log("Validate Failed:", info);
              });
          }}
        >
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ["Ghaziabad", "sec-1", "Vashundhara"],
              prefix: "91",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label={
                <span>
                  Name
                  <Tooltip title="What do you want others to call you?">
                    {/* <QuestionCircleOutlined /> */}
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="GSTNumber"
              label={
                <span>
                  GSTNumber
                  <Tooltip title="Please input your GSTIN number here">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: false,
                  message: "Please input your GSTNumber!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="DLNumber"
              label={
                <span>
                  DLNumber
                  <Tooltip title="Please input your Drug License number here">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your DLNumber!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="shopname"
              label={
                <span>
                  Shop Name
                  <Tooltip title="Name of Your Store?">
                    {/* <QuestionCircleOutlined /> */}
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your shop name!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="aadhar"
              label={
                <span>
                  Aadhar Number
                  <Tooltip title="Name of Your Store?">
                    {/* <QuestionCircleOutlined /> */}
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your aadhar number!",
                  whitespace: false,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="residence"
              label="Address"
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Please select your habitual residence!",
                },
              ]}
            >
              <Cascader options={residences} />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            {/* <Form.Item
              name="website"
              label="Website"
              rules={[
                {
                  required: true,
                  message: "Please input website!",
                },
              ]}
            >
              <AutoComplete
                options={websiteOptions}
                onChange={onWebsiteChange}
                placeholder="website"
              >
                <Input />
              </AutoComplete>
            </Form.Item> */}

            {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: 'Please input the captcha you got!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Button>Get captcha</Button>
                  </Col>
                </Row>
              </Form.Item> */}

            <Form.Item
              name="upload"
              label="GSTIN & DL Certificate "
              rules={[
                {
                  required: true,
                  message: "upload your GSTIN certificate!",
                },
              ]}
            >
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="/#">agreement</a>
              </Checkbox>
            </Form.Item>
          </Form>
        </Modal>
      );
    };
    //popup and form code

    const CollectionsPage = () => {
      const [visible, setVisible] = useState(false);

      //With this, we will get all field values.
      const onCreate = (values) => {
        console.log("Received values of form: ", values);
        setVisible(false);
      };

      return (
        <div>
          <Button
            type="primary"
            onClick={() => {
              setVisible(true);
            }}
          >
            Register
          </Button>
          <CollectionCreateForm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          />
        </div>
      );
    };
    return (
      <div className="MainDiv">
        <div class="jumbotron text-center">
          <h2>Have a look about us before proceeding</h2>
          <br />
        </div>

        <div className="container">
          <CollectionsPage />
        </div>
      </div>
    );
  }
}
export default Register;
