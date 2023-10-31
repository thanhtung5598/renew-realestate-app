import { Meta } from "@/components/templates/meta";
import { Layout } from "@/components/templates/layout";
import { Button, Form, Input } from "antd";
import { useAppDispatch, useAppSelector } from "@/store";
import { IRegisterPayload, registerAccount } from "@/store/auth/thunks";
import { SUCCESS_CODE_200 } from "@/constants";
import { useRouter } from "next/router";
import { IAuthResponse } from "@/store/auth/types";
import { useEffect } from "react";

const Register = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const route = useRouter();
  const dispatch = useAppDispatch();

  const onFinish = async (values: IRegisterPayload) => {
    const resultAction = await dispatch(registerAccount(values));
    const response: IAuthResponse = resultAction.payload;

    if (response.status === SUCCESS_CODE_200) {
      route.push("/");
    }
  };

  useEffect(() => {
    if (isAuth) {
      route.push("/");
    }
  }, [isAuth, route]);

  return (
    <Layout
      meta={
        <Meta
          title="Register"
          description="Where you can Register to profile"
        />
      }
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "auto" }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<IRegisterPayload>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              type: "email",
              message: "The input is not a valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IRegisterPayload>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<IRegisterPayload>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<IRegisterPayload>
          label="Confirm Password"
          name="passwordConfirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Register;
