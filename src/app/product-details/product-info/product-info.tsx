import React from "react";
import Anchor from "antd/es/anchor/Anchor";

const ProductInfo = () => {
    return (
        <div className="w-full flex justify-center items-center mt-[90px]">
            <div className="w-[1200px] h-[500px]">
                <Anchor
                    className="custom-anchor"
                    direction="horizontal"
                    items={[
                        { key: "Product Description", href: "#part-1", title: "Product Description" },
                        { key: "Reviews (19)", href: "#part-2", title: "Reviews (19)" },
                    ]}
                />
                <p className="font-normal text-[14px] text-[#727272] mt-[20px]">
                    The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                    The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor.
                    Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
                    Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis
                    fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue
                    nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
                    luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come
                    with a wooden stand to help elevate your plants off the ground.
                </p>
                <div className="flex flex-col gap-[18px]">
                    <div className="mt-[20px] flex flex-col gap-2">
                        <h1 className="font-bold text-[14px] text-[#3d3d3d]">Living Room:</h1>
                        <p className="font-normal text-[14px] text-[#727272]">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-[14px] text-[#3d3d3d]">Dining Room:</h1>
                        <p className="font-normal text-[14px] text-[#727272]">
                            The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins,
                            they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative
                            qualities will improve your life.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-[14px] text-[#3d3d3d]">Office:</h1>
                        <p className="font-normal text-[14px] text-[#727272]">
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters
                            come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;