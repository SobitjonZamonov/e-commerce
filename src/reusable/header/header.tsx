"use client"
import React, { useState } from "react";
import Image from "next/image";
import SearchIcon from "../../app/home/assets/icon1";
import CarzineIcon from "../../app/home/assets/icon2";
import BackIcon from "../../app/home/assets/icon3";
import { Modal, Button, } from "antd";
import { GoogleOutlined, FacebookOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="flex justify-center items-center w-full h-[53px] px-[120px]">
            <div className="w-[1200px] flex justify-between items-center h-[53px] border-b-1 border-[#46a35947]">
                <div className="cursor-pointer">
                    <Image src="/logo.svg" alt="Logo" width={150} height={34} />
                </div>

                <ul className="flex gap-[50px]">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Plant Care</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>

                <div className="flex items-center gap-[30px]">
                    <SearchIcon />
                    <CarzineIcon />
                    <button className="flex justify-center items-center gap-[4px] w-[100px] h-[35px] bg-[#46A358] text-[#fff] text-[16px] font-medium rounded-[6px] cursor-pointer" onClick={showModal}>
                        <BackIcon /> Login
                    </button>
                </div>
            </div>
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null} width={450} height={600} className="flex justify-center items-center">
                <div className="py-5 text-center flex flex-col justify-center items-center">
                    <h2 className="font-medium text-[20px] text-[#3d3d3d]">
                        <span className={`cursor-pointer ${isRegister ? 'text-[#3d3d3d]' : 'text-[#46a358]'}`} onClick={() => setIsRegister(false)}>Login</span>
                        <span className="text-[#3d3d3d]"> | </span>
                        <span className={`cursor-pointer ${isRegister ? 'text-[#46a358]' : 'text-[#3d3d3d]'}`} onClick={() => setIsRegister(true)}>Register</span>
                    </h2>

                    {isRegister ? (
                        <>
                            <p className="font-normal text-[13px] text-[#3d3d3d] mt-[30px]">Enter your email and password to register.</p>
                            <div className="mt-[14px] flex flex-col gap-4">
                                <Input style={{ width: "300px", height: "40px" }} placeholder="Username" className="mb-3 p-2" />
                                <Input style={{ width: "300px", height: "40px" }} placeholder="Enter your email address" className="mb-3 p-2" />
                                <Input.Password style={{ width: "300px", height: "40px" }} placeholder="Password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} className="mb-3 p-2" />
                                <Input.Password style={{ width: "300px", height: "40px" }} placeholder="Confirm Password" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} className="mb-2 p-2" />
                                <Button type="primary" style={{ width: "300px", height: "45px", background: "#46a358", fontWeight: "bold", color: "#fff", fontSize: "16px", marginTop: "10px" }} block>
                                    Register
                                </Button>
                            </div>
                            <div className="mt-[30px] text-gray-400 text-sm">--- Or register with ---</div>
                            <div className="mt-[20px]">
                                <Button block icon={<GoogleOutlined />} style={{ width: "300px", height: "40px" }} className="border-gray-300 text-gray-700 flex items-center justify-center mb-2 h-10">
                                    Continue with Google
                                </Button>
                                <Button block icon={<FacebookOutlined />} style={{ width: "300px", height: "40px" }} className="border-gray-300 text-gray-700 flex items-center justify-center h-10">
                                    Continue with Facebook
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="font-normal text-[13px] text-[#3d3d3d] mt-[50px]">Enter your username and password to login.</p>
                            <div className="mt-[14px] flex flex-col gap-4">
                                <Input
                                    style={{
                                        width: "300px",
                                        height: "40px"
                                    }}
                                    placeholder="Email"
                                    defaultValue="almamun_uxui@outlook.com"
                                    className="mb-3 p-2"
                                />
                                <Input.Password
                                    style={{
                                        width: "300px",
                                        height: "40px",
                                    }}
                                    placeholder="Password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    className="mb-2 p-2"
                                />
                                <div className="text-right text-green-500 text-sm cursor-pointer mt-[14px]">Forgot Password?</div>

                                <Button type="primary" style={{
                                    width: "300px",
                                    height: "45px",
                                    background: "#46a358",
                                    font: "bold",
                                    color: "#fff",
                                    fontSize: "16px",
                                    marginTop: "30px"
                                }} block>
                                    Login
                                </Button>
                            </div>

                            <div className="mt-[50px] text-gray-400 text-sm">--- Or login with ---</div>

                            <div className="mt-[30px]">
                                <Button block icon={<GoogleOutlined />} style={{
                                    width: "300px",
                                    height: "40px"
                                }} className="border-gray-300 text-gray-700 flex items-center justify-center mb-2 h-10">
                                    Login with Google
                                </Button>
                                <Button block icon={<FacebookOutlined />} style={{
                                    width: "300px",
                                    height: "40px"
                                }} className="border-gray-300 text-gray-700 flex items-center justify-center h-10">
                                    Login with Facebook
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </Modal>

            {/* <Modal open={isModalOpen} onCancel={handleCancel} footer={null} width={450} height={600} className="flex justify-center items-center">
                <div className="py-5 text-center flex flex-col justify-center items-center">
                    <h2 className="font-medium text-[20px] text-[#46a358]">Login <span className="font-medium text-[20px] text-[#3d3d3d]"> | Register</span></h2>
                    <p className="font-normal text-[13px] text-[#3d3d3d] mt-[50px]">Enter your username and password to login.</p>

                    <div className="mt-[14px] flex flex-col gap-4">
                        <Input
                            style={{
                                width: "300px",
                                height: "40px"
                            }}
                            placeholder="Email"
                            defaultValue="almamun_uxui@outlook.com"
                            className="mb-3 p-2"
                        />
                        <Input.Password
                            style={{
                                width: "300px",
                                height: "40px",
                            }}
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            className="mb-2 p-2"
                        />
                        <div className="text-right text-green-500 text-sm cursor-pointer mt-[14px]">Forgot Password?</div>

                        <Button type="primary" style={{
                            width: "300px",
                            height: "45px",
                            background: "#46a358",
                            font: "bold",
                            color: "#fff",
                            fontSize: "16px",
                            marginTop: "30px"
                        }} block>
                            Login
                        </Button>
                    </div>

                    <div className="mt-[50px] text-gray-400 text-sm">--- Or login with ---</div>

                    <div className="mt-[30px]">
                        <Button block icon={<GoogleOutlined />} style={{
                            width: "300px",
                            height: "40px"
                        }} className="border-gray-300 text-gray-700 flex items-center justify-center mb-2 h-10">
                            Login with Google
                        </Button>
                        <Button block icon={<FacebookOutlined />} style={{
                            width: "300px",
                            height: "40px"
                        }} className="border-gray-300 text-gray-700 flex items-center justify-center h-10">
                            Login with Facebook
                        </Button>
                    </div>
                </div>
            </Modal> */}
        </div>
    );
};

export default Header;
