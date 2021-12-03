import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Input,
  Button,
  Modal,
} from "antd";
import "antd/dist/antd.css";




class Login extends React.Component {
  render() {
    // Login Form
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
      return (
        <Modal
          visible={visible}
          title="Login"
          okText="Login"
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
            name="Login"
            onFinish={onFinish}
            initialValues={{
              residence: ["Ghaziabad", "sec-1", "Vashundhara"],
              prefix: "91",
            }}
            scrollToFirstError
          >
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
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
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
            Login
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
export default Login;
