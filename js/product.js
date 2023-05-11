// product.js
// ty riviere
//
const products = [
    {
        id: "frank",
        title: "FRANK",
        description: "a man of mystery\nblue man group lookin ass\nwith a hint of homer simpson\nwould look nice in a kitchen",
        price: "$24.99",
        image: "res/artwork/frank.GIF"
    },
    {
        id: "akatsuki",
        title: "AKATSUKI",
        description: "the world shall know pain\n-pain",
        price: "$24.99",
        image: "res/artwork/akatsuki.GIF"
    },
    {
        id: "naruto",
        title: "TEAM 7",
        description: "in the world\nthose who break the rules are scum\nbut those who abandon their friends\nare worse than scum",
        price: "$24.99",
        image: "res/artwork/naruto.GIF"
    },
    {
        id: "onepiece",
        title: "STRAW HATS",
        description: "gummo gummo",
        price: "$24.99",
        image: "res/artwork/onepiece.GIF"
    },
    {
        id: "chainsaw",
        title: "SPECIAL DIVISION 4",
        description: "just tryna cop a feel",
        price: "$24.99",
        image: "res/artwork/chainsaw.GIF"
    },
    {
        id: "jujutsu",
         title: "ITADORI",
         description: "served with white rice your choice of side\nsides:\nsakuna fries,\ncajun sakuna fries,\npbr",
         price: "$24.99",
         image: "res/artwork/jujutsu.GIF"
    }
];


function main(){
    const productId = window.location.search.slice(1); // Get the product ID from the URL parameter

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        if (product.id == productId) { // Check if the product ID matches
            const productElement = document.getElementById(product.id);

            const productImage = productElement.querySelector(".product-img");
            console.log(productImage);
            productImage.src = product.image;

            const productTitle = productElement.querySelector(".product-title");
            productTitle.textContent = product.title;

            const productDescription = productElement.querySelector(".product-description");
            productDescription.textContent = product.description;

            const productPrice = productElement.querySelector(".product-price");
            productPrice.textContent = product.price;

            break;
        }
    }
}