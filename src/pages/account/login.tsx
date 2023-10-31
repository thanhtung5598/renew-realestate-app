import { Meta } from "@/components/templates/meta";
import { Layout } from "@/components/templates/layout";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { useRouter } from "next/router";
import { ILoginPayload, loginAccount } from "@/store/auth/thunks";
import { SUCCESS_CODE_200 } from "@/constants";
import { IAuthResponse } from "@/store/auth/types";

const Login = () => {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const onFinish = async (values: any) => {
    const resultAction = await dispatch(loginAccount(values));
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
      meta={<Meta title="Login" description="Where you can login to profile" />}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<ILoginPayload>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ILoginPayload>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Login;
