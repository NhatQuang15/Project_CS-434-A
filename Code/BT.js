const sp = {
    electronics: 0.10,
    clothing: 0.20,
    food: 0.00
};

const MEMBER_DISCOUNT = 10;

const BULK_DISCOUNT = 5;

const GENERAL_DISCOUNT = 0.05;

function getCategoryDiscount(type) {
    return sp[type] ?? 0;
}

function calculatePrice(product) {
    let price = product.price;
    const categoryRate = getCategoryDiscount(product.type);
    price -= price * categoryRate;
    price -= price * GENERAL_DISCOUNT;
    if (product.quantity > 10) {
        price -= BULK_DISCOUNT;
    }
    if (product.isMember === true) {
        price -= MEMBER_DISCOUNT;
    }
    return price;
}