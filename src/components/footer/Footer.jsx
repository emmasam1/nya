import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState();

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#FFF9EA]">
      <div className="m-auto mt-20 w-11/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-10 col-span-1">
            <h2 className="mb-10 text-3xl font-bold text-green-800">Join Us</h2>
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                requiredMarkValue: requiredMark,
              }}
              onValuesChange={onRequiredTypeChange}
              onFinish={(values) => {
                console.log("Form values: ", values);
              }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not a valid email!",
                  },
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input placeholder="Phone" />
              </Form.Item>
              <div className="mb-3">
                <p className="font-semibold">
                  <b>Sign up to get texts.</b> By entering your phone number, you
                  are consenting to receive recurring automated text messages &
                  calls from the DNC with news & info about our work. For SMS,
                  message & data rates may apply. Text STOP to end. Text HELP for
                  help.
                </p>
              </div>
              <Form.Item>
                <button
                  htmlType="submit"
                  className="border-red-500 text-red-500 border-2 px-6 py-3 font-bold rounded hover:bg-red-500 hover:text-white transition-all duration-300 ease-in"
                >
                  Submit
                </button>
              </Form.Item>
            </Form>
          </div>
          <div className="col-span-2 p-10 relative">
            <div className="bg-img h-full absolute w-full top-0 left-0"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b-2 pb-5">
              <div>
                <Link
                  to="#"
                  className="footer-link relative font-bold hover:text-green-700"
                >
                  Who we are
                </Link>
                <ul className="mt-4">
                  <li className="mb-4">
                    <Link
                      to=""
                      className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
                    >
                      What we do
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to=""
                      className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
                    >
                      Who we serve
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to=""
                      className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
                    >
                      Our history
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to=""
                      className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
                    >
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
                    >
                      State Parties
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="#"
                  className="footer-link relative font-bold hover:text-green-700"
                >
                  Where we stand
                </Link>
                <ul className="mt-4">
                  <li className="mb-4">
                    <Link
                      to=""
                      className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
                    >
                      Party platform
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to=""
                      className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
                    >
                      The issues
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="#"
                  className="footer-link relative font-bold hover:text-green-700"
                >
                  Take action
                </Link>
                <ul className="mt-4">
                  <li className="mb-4">
                    <Link
                      to=""
                      className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
                    >
                      Events
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to=""
                      className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
                    >
                      Work with us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-5 flex justify-between">
              <Link
                to=""
                className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
              >
                Work with us
              </Link>
              <Link
                to=""
                className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
              >
                Press releases
              </Link>
              <Link
                to=""
                className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
              >
                Privacy policy
              </Link>
              <Link
                to=""
                className="footer-link relative font-semibold text-[.8rem] hover:text-green-700"
              >
                Terms of service
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-[.7rem] mb-2 font-mono">
                Copyright &copy; {currentYear} NYA Services Corporation All rights
                reserved.
              </p>
              <p className="text-[.7rem] mb-2 font-mono">
                Paid for by the NATIONAL YOUTH ALLIANCE 0807-370-3001
              </p>
              <p className="text-[.7rem] mb-2 font-mono">
                This communication is not authorized by any candidate or
                candidate's committee.
              </p>
            </div>
            <div className="mt-8">
              <p className="text-[.7rem] mb-2 font-mono">
                House 19, 44 Crescent CITEC Villa Estate Off
                <br /> 6th Avenue Gwarimpa, Abuja, Nigeria <br /> 0807-370-3001
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
