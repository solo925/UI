import React, { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { Flex, Text, Button } from "@radix-ui/themes";

function CartTile({ singleCartItem }) {
    const { handleRemoveFromCart, handleAddToCart } = useContext(ShoppingCartContext);

    return (
        <Fragment>
            <Flex
                className="cart-tile"
                direction="row"
                align="start"
                justify="between"
                gap="4"
                width="100%"
                style={{ padding: "1rem 0" }}
            >
                {/* Product Info */}
                <Flex direction="row" gap="3" align="start" width="70%">
                    {/* Product Image */}
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "4px",
                            overflow: "hidden",
                            background: "#e5e5e5",
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src={singleCartItem?.thumbnail}
                            alt={singleCartItem?.title}
                            style={{
                                objectFit: "contain",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                    {/* Title and Remove Button */}
                    <Flex direction="column" gap="2">
                        <Text size="3" weight="bold">
                            {singleCartItem?.title}
                        </Text>
                        <Button
                            variant="ghost"
                            color="gray"
                            size="2"
                            onClick={() => handleRemoveFromCart(singleCartItem, true)}
                        >
                            Remove
                        </Button>
                    </Flex>
                </Flex>

                {/* Price and Quantity Controls */}
                <Flex direction="column" align="end" gap="3" width="30%">
                    <Text size="4" weight="bold">
                        ${singleCartItem?.totalprice?.toFixed(2)}
                    </Text>
                    <Text size="3">Quantity: {singleCartItem?.quantity}</Text>
                    <Flex gap="2">
                        <Button
                            variant="outline"
                            color="gray"
                            size="2"
                            onClick={() => handleAddToCart(singleCartItem)}
                        >
                            +
                        </Button>
                        <Button
                            variant="outline"
                            color="gray"
                            size="2"
                            disabled={singleCartItem?.quantity === 1}
                            onClick={() => handleRemoveFromCart(singleCartItem, false)}
                        >
                            -
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <hr className="border-gray-500 my-4" />
        </Fragment>
    );
}

export default CartTile;
