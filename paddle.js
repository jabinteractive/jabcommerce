Paddle.Environment.set("sandbox");
Paddle.Initialize({
    token: "test_0b5d06aa047f5d7ad40dc460e91", // replace with a client-side token
    // prints events to console for debugging
    eventCallback: function(data) {
        console.log(data);
    }
});

// define items
let itemsList = [
    {
        priceId: "pri_01jf3djg0dd6y492y75w08cz14",
        quantity: 1
    }
];

// open checkout
function openCheckout(items) {
    Paddle.Checkout.open({
        items: items
    });
}
