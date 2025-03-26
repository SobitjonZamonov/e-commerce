"use client"

import React, { useState } from "react";
import { Slider } from 'antd';
import ProductCart from "../assets/product1";
import { Anchor } from 'antd';
import { Pagination } from 'antd';
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd'
import Sales from "../assets/sale";
import ProductCart1 from "../assets/product1";
import ProductCart2 from "../assets/product2";
import ProductCart3 from "../assets/product3";
import ProductCart4 from "../assets/product4";
import ProductCart5 from "../assets/product5";

const Service = () => {

    const [disabled, setDisabled] = useState(false);

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'My Account',
            disabled: true,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Profile',
            extra: '⌘P',
        },
        {
            key: '3',
            label: 'Billing',
            extra: '⌘B',
        },
        {
            key: '4',
            label: 'Settings',
            icon: <SettingOutlined />,
            extra: '⌘S',
        },
    ];

    return (
        <div className="w-full h-[1244px] flex justify-center gap-[50px] mt-[26px]">
            <div className="w-[310px] h-[774px] flex flex-col justify-start bg-[#fbfbfb]">
                <h2 className="font-bold text-[18px] text-[#3d3d3d] ml-[20px] mt-[14px]">Categories</h2>
                <div className="ml-[30px] flex flex-col gap-[14px] mt-[15px]">
                    <div className="flex items-center gap-[110px]">
                        <label className="w-[100px] text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">House Plants</label>
                        <label className="text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">(33)</label>
                    </div>
                    <div className="flex items-center gap-[110px]">
                        <label className="w-[100px] text-[15px] font-normal  text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">Potter Plants</label>
                        <label className="text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">(33)</label>
                    </div>
                    <div className="flex items-center gap-[110px]">
                        <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">Seeds</label>
                        <label className="text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">(33)</label>
                    </div>
                    <div className="flex items-center gap-[110px]">
                        <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">Small Plants</label>
                        <label className="text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">(33)</label>
                    </div>
                    <div className="flex items-center gap-[110px]">
                        <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">Big Plants</label>
                        <label className="text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">(33)</label>
                    </div>
                    <div className="flex items-center gap-[110px]">
                        <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">Succulents</label>
                        <label className="text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">(33)</label>
                    </div>
                    <div className="flex items-center gap-[110px]">
                        <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">Trerrariums</label>
                        <label className="text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">(33)</label>
                    </div>
                    <div className="flex items-center gap-[110px]">
                        <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">Gardening</label>
                        <label className="text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">(33)</label>
                    </div>
                    <div className="flex items-center gap-[110px]">
                        <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">Accessories</label>
                        <label className="text-[15px] font-normal text-[#3d3d3d] cursor-pointer hover:text-[#46a358]">(33)</label>
                    </div>
                </div>


                <div className="mt-[36px]">
                    <h1 className="text-[18px] text-[#3d3d3d] font-bold ml-[20px]">Price Range</h1>
                    <div className="ml-[30px]">
                        <Slider className="custom-slider w-[209px]" range defaultValue={[20, 50]} />
                    </div>
                    <h3 className="text-[15px] text-[#3d3d3d] font-normal ml-[30px]">Price: <span className="text-[15px] font-bold text-[#46a358]">$39 - $1230</span></h3>
                    <button className="bg-[#46a358] text-[#fff] text-[16px] font-bold rounded-[6px] w-[90px] h-[35px] ml-[30px] mt-[16px] cursor-pointer">Filter</button>
                </div>

                <div className="mt-[46px]">
                    <h1 className="font-bold text-[18px] text-[#3d3d3d] ml-[20px]">Size</h1>
                    <div className="ml-[30px] flex flex-col gap-[14px] mt-[20px]">
                        <div className="flex items-center gap-[110px]">
                            <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d]">Small</label>
                            <label className="text-[15px] font-normal text-[#3d3d3d]">(33)</label>
                        </div>
                        <div className="flex items-center gap-[110px]">
                            <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d]">Medium</label>
                            <label className="text-[15px] font-normal text-[#3d3d3d]">(33)</label>
                        </div>
                        <div className="flex items-center gap-[110px]">
                            <label className="w-[100px] text-[15px]  font-normal text-[#3d3d3d]">Large</label>
                            <label className="text-[15px] font-normal text-[#3d3d3d]">(33)</label>
                        </div>
                    </div>
                </div>
                <div className="mt-[50px]">
                    <Sales />
                </div>
            </div>


            <div className="w-[880px] h-[1190px]">
                <div className="w-[838px] h-[23px] flex justify-between items-center">
                    <Anchor
                        className="custom-anchor"
                        direction="horizontal"
                        items={[
                            { key: "All-Plants", href: "#part-1", title: "All Plants" },
                            { key: "New-Arrivals", href: "#part-2", title: "New Arrivals" },
                            { key: "Sale", href: "#part-3", title: "Sale" },
                        ]}
                    />

                    <div className="flex items-center gap-2">
                        <h4>sort by:</h4>
                        <Dropdown menu={{ items }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Default sorting
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
                <div className="flex flex-col gap-[60px] mt-[15px]">
                    <div className="flex gap-[50px]">
                        <ProductCart1 />
                        <ProductCart2 />
                        <ProductCart3 />
                    </div>
                    <div className="flex gap-[50px]">
                        <ProductCart4 />
                        <ProductCart5 />
                        <ProductCart1 />
                    </div>
                    <div className="flex gap-[50px]">
                        <ProductCart2 />
                        <ProductCart3 />
                        <ProductCart4 />
                    </div>
                    <div className="ml-[580px]">
                        <Pagination defaultCurrent={1} total={50} className="custom-pagination" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;