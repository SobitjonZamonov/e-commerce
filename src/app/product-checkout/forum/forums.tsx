"use client"
import React, { useState } from "react";
import { Form, Input, Select, Radio } from "antd";
import Image from "next/image";
import { Modal, Button, } from "antd";
import { GoogleOutlined, FacebookOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Forums = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="w-full flex justify-center items-start gap-[73px] p-4">
            <div className="w-[762px] p-4">
                <h1 className="font-bold text-[17px] text-[#3d3d3d] mt-4 mb-4">Billing Address</h1>
                <Form layout="vertical" onFinish={(values) => console.log(values)}>
                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: "Please input!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: "Please input!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Country / Region" name="country" rules={[{ required: true, message: "Please input!" }]}>
                            <Select placeholder="Select a country / region" />
                        </Form.Item>
                        <Form.Item label="Town / City" name="city" rules={[{ required: true, message: "Please input!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Street Address" name="street">
                            <Input placeholder="House number and street name" />
                        </Form.Item>
                        <Form.Item style={{ marginTop: "30px" }} name="apartment">
                            <Input placeholder="Apartment, suite, unit, etc. (optional)" />
                        </Form.Item>
                        <Form.Item label="State" name="state" rules={[{ required: true, message: "Please input!" }]}>
                            <Select placeholder="Select a state" />
                        </Form.Item>
                        <Form.Item label="Zip" name="zip" rules={[{ required: true, message: "Please input!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email address" name="email" rules={[{ required: true, message: "Please input a valid email!" }]}>
                            <Input type="email" />
                        </Form.Item>
                        <Form.Item label="Phone Number" rules={[{ required: true, message: "Please input!" }]} >
                            <Select placeholder="+966" style={{ width: "100px" }} />
                        </Form.Item>
                    </div>
                    <div className="mt-4">
                        <Form.Item name="shipToDifferent">
                            <Radio.Group>
                                <Radio value="yes"> Ship to a different address? </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Order notes (optional)" name="notes" className="w-[350px]">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                    </div>
                </Form>
            </div>

            <div className="w-[405px] h-[850px] py-4">
                <h1 className="font-bold text-[17px] text-[#3d3d3d]">Your Order</h1>
                <div className="flex justify-between border-b border-[#46a35933] py-3 mt-[20px]">
                    <label className="font-medium text-[16px] text-[#3d3d3d]">Products</label>
                    <label className="font-medium text-[16px] text-[#3d3d3d]">Subtotal</label>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="w-[405px] h-[70px] flex justify-center items-center gap-[40px] bg-[#fbfbfb] rounded-[3px]">
                        <div className="flex justify-center items-center">
                            <Image src="/pruductdetail1.svg" alt="icon3" width={70} height={70} className="hover:border border-[#46a358]" />
                            <div className="flex flex-col">
                                <h1 className="font-medium text-[16px] text-[#3d3d3d]">Barberton Daisy</h1>
                                <label className="font-normal text-[14px] text-[#a5a5a5]">SKU: 1995751877966</label>
                            </div>
                        </div>
                        <label className="font-normal text-[14px] text-[#727272]">(x2)</label>
                        <label className="font-bold text-[18px] text-[#46a358] text-right">$238.00</label>
                    </div>
                    <div className="w-[405px] h-[70px] flex justify-center items-center gap-[40px] bg-[#fbfbfb] rounded-[3px]">
                        <div className="flex justify-center items-center">
                            <Image src="/pruductdetail1.svg" alt="icon3" width={70} height={70} className="hover:border border-[#46a358]" />
                            <div className="flex flex-col">
                                <h1 className="font-medium text-[16px] text-[#3d3d3d]">Barberton Daisy</h1>
                                <label className="font-normal text-[14px] text-[#a5a5a5]">SKU: 1995751877966</label>
                            </div>
                        </div>
                        <label className="font-normal text-[14px] text-[#727272]">(x2)</label>
                        <label className="font-bold text-[18px] text-[#46a358] text-right">$238.00</label>
                    </div>
                    <div className="w-[405px] h-[70px] flex justify-center items-center gap-[40px] bg-[#fbfbfb] rounded-[3px]">
                        <div className="flex justify-center items-center">
                            <Image src="/pruductdetail1.svg" alt="icon3" width={70} height={70} className="hover:border border-[#46a358]" />
                            <div className="flex flex-col">
                                <h1 className="font-medium text-[16px] text-[#3d3d3d]">Barberton Daisy</h1>
                                <label className="font-normal text-[14px] text-[#a5a5a5]">SKU: 1995751877966</label>
                            </div>
                        </div>
                        <label className="font-normal text-[14px] text-[#727272]">(x2)</label>
                        <label className="font-bold text-[18px] text-[#46a358] text-right">$238.00</label>
                    </div>
                    <label className="text-right font-normal text-[14px] text-[#3d3d3d] mt-[15px]">Have a coupon code? <a href="/cupon" className="font-medium text-[#46a358]">Click here</a></label>
                </div>
                <div className="w-[321px] h-[493px] ml-[83px]">
                    <div className="flex flex-col gap-[15px] border-b border-[#46a35941] py-2">
                        <div className="flex justify-between items-center">
                            <label className="font-normal text-[15px] text-[#3d3d3d]">Subtotal</label>
                            <label className="font-medium text-[18px] text-[#3d3d3d] text-right">$2,683.00</label>
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="font-normal text-[15px] text-[#3d3d3d]">Coupon Discount </label>
                            <label className="font-normal text-[15px] text-[#3d3d3d]">(-) 00.00</label>
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="font-normal text-[15px] text-[#3d3d3d]">Shiping</label>
                            <div className="flex flex-col text-right">
                                <label>$16.00</label>
                                <label className="font-normal text-[12px] text-[#46a358]">View shipping charge</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-[30px] mt-[15px]">
                        <label className="font-bold text-[16px]  text-[#3d3d3d]">Total</label>
                        <label className="font-bold text-[18px] text-[#46a358]">$2,699.00</label>
                    </div>
                    <div>
                        <h2 className="font-bold text-[17px] text-[#3d3d3d]">Payment Method</h2>
                        <div className="flex flex-col gap-4 mt-[20px]">
                            <section className="flex border border-[#00000016] rounded-[3px] w-[321px] h-[45px] justify-start p-1.5">
                                <Form.Item name="shipToDifferent">
                                    <Radio.Group>
                                        <Radio value="yes"><Image src="/paymentcards.svg" alt="icon3" width={224} height={26} /></Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </section>
                            <section className="flex border border-[#00000016] rounded-[3px] w-[321px] h-[45px] justify-start p-1.5">
                                <Form.Item name="shipToDifferent">
                                    <Radio.Group>
                                        <Radio value="yes">Dorect bank transfer</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </section>
                            <section className="flex border border-[#0000001c] rounded-[3px] w-[321px] h-[45px] justify-start p-1.5">
                                <Form.Item name="shipToDifferent">
                                    <Radio.Group>
                                        <Radio value="yes">Cash on delivery</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </section>
                        </div>

                        <button className="w-[321px] h-[40px] rounded-[3px] bg-[#46a358] font-bold text-[15px] text-[#fff] mt-[60px]" onClick={showModal}>Place Order</button>
                    </div>
                </div>

            </div>
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null} width={450} height={600} style={{marginTop: "30px"}} className="flex justify-center items-center">
                <div className="text-center flex flex-col justify-center items-center">
                    <Image src="/ckeck.svg" alt="icon3" width={80} height={80} />
                    <p className="font-normal text-[16px] text-[#727272] py-2.5">Your order has been received</p>
                    <div className="flex w-[578px] h-[65px] justify-center gap-[30px] items-center border-t border-[#46a35930] border-b">
                        <div className="flex flex-col border-r border-[#46a35930] pr-[20px]">
                            <label className="font-normal text-[14px] text-[#727272] text-left">Order Number</label>
                            <label className="font-bold text-[15px] text-[#727272] text-left">19586687</label>
                        </div>


                        <div className="flex flex-col border-r border-[#46a35930] pr-[20px]">
                            <label className="font-normal text-[14px] text-[#727272] text-left">Date</label>
                            <label className="font-bold text-[15px] text-[#727272] text-left">15 Sep, 2021</label>
                        </div>

                        <div className="flex flex-col border-r border-[#46a35930] pr-[20px]">
                            <label className="font-normal text-[14px] text-[#727272] text-left">Total</label>
                            <label className="font-bold text-[15px] text-[#727272] text-left">2,699.00</label>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-normal text-[14px] text-[#727272] text-left">Payment Method</label>
                            <label className="font-bold text-[15px] text-[#727272] text-left">Cash on delivery</label>
                        </div>
                    </div>

                    <label className="font-bold text-[15px] text-[#3d3d3d] mr-[410px] mt-[20px]">Order Details</label>

                    <div className="flex justify-center border-b border-[#46a35933] py-3 gap-[300px]">
                        <label className="font-medium text-[16px] text-[#3d3d3d]">Products</label>
                        <div className="flex gap-[50px]">
                            <label className="font-medium text-[16px] text-[#3d3d3d]">Qty</label>
                            <label className="font-medium text-[16px] text-[#3d3d3d]">Subtotal</label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div className="w-[500px] h-[70px] flex justify-center items-center gap-[100px] bg-[#fbfbfb] rounded-[3px]">
                            <div className="flex justify-center items-center">
                                <Image src="/pruductdetail1.svg" alt="icon3" width={70} height={70} className="hover:border border-[#46a358]" />
                                <div className="flex flex-col">
                                    <h1 className="font-medium text-[16px] text-[#3d3d3d]">Barberton Daisy</h1>
                                    <label className="font-normal text-[14px] text-[#a5a5a5]">SKU: 1995751877966</label>
                                </div>
                            </div>
                            <label className="font-normal text-[14px] text-[#727272]">(x2)</label>
                            <label className="font-bold text-[18px] text-[#46a358] text-right">$238.00</label>
                        </div>
                        <div className="w-[500px] h-[70px] flex justify-center items-center gap-[100px] bg-[#fbfbfb] rounded-[3px]">
                            <div className="flex justify-center items-center">
                                <Image src="/pruductdetail1.svg" alt="icon3" width={70} height={70} className="hover:border border-[#46a358]" />
                                <div className="flex flex-col">
                                    <h1 className="font-medium text-[16px] text-[#3d3d3d]">Barberton Daisy</h1>
                                    <label className="font-normal text-[14px] text-[#a5a5a5]">SKU: 1995751877966</label>
                                </div>
                            </div>
                            <label className="font-normal text-[14px] text-[#727272]">(x2)</label>
                            <label className="font-bold text-[18px] text-[#46a358] text-right">$238.00</label>
                        </div>

                        <div className="w-[500px] h-[70px] flex justify-center items-center gap-[100px] bg-[#fbfbfb] rounded-[3px]">
                            <div className="flex justify-center items-center">
                                <Image src="/pruductdetail1.svg" alt="icon3" width={70} height={70} className="hover:border border-[#46a358]" />
                                <div className="flex flex-col">
                                    <h1 className="font-medium text-[16px] text-[#3d3d3d]">Barberton Daisy</h1>
                                    <label className="font-normal text-[14px] text-[#a5a5a5]">SKU: 1995751877966</label>
                                </div>
                            </div>
                            <label className="font-normal text-[14px] text-[#727272]">(x2)</label>
                            <label className="font-bold text-[18px] text-[#46a358] text-right">$238.00</label>
                        </div>
                    </div>
                    <div className="ml-[180px] mt-[20px]">
                        <div className="flex justify-between items-center gap-[200px]">
                            <label className="font-normal text-[15px] text-[#3d3d3d]">Shiping</label>
                            <label className="font-medium text-[18px] text-[#3d3d3d]">$16.00</label>
                        </div>
                        <div className="flex justify-between items-center py-3 gap-[200px]">
                            <label className="font-bold text-[16px]  text-[#3d3d3d]">Total</label>
                            <label className="font-bold text-[18px] text-[#46a358]">$2,699.00</label>
                        </div>
                    </div>


                    <p className="text-center font-normal text-[14px] text-[#727272] border-t border-[#46a3593d] py-3">
                        Your order is currently being processed. You will receive an order confirmation email shortly
                        with the expected delivery date for your items.
                    </p>

                    <div className="mt-[30px]">
                        <Button style={{
                            width: "162px",
                            height: "45px",
                            background: "#46a358",
                            color: "#fff",
                            font: "bold",
                            fontSize: "16px"
                        }} className="flex items-center justify-center">
                            Track your order
                        </Button>
    
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Forums;
