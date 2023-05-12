// product.js
// ty riviere
//
const products = [
    {
        id: "frank",
        title: "FRANK",
        description: "a man of mystery<br>blue man group lookin ass<br>with a hint of homer simpson<br>would look nice in a kitchen",
        price: "$24.99",
        image: "res/artwork/frank.GIF"
    },
    {
        id: "akatsuki",
        title: "AKATSUKI",
        description: "the world shall know pain<br>-pain",
        price: "$24.99",
        image: "res/artwork/akatsuki.GIF"
    },
    {
        id: "naruto",
        title: "TEAM 7",
        description: "in the world<br>those who break the rules are scum<br>but those who abandon their friends<br>are worse than scum",
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
         description: "served with white rice your choice of side<br>sides:<br>sakuna fries,<br>cajun sakuna fries,<br>pbr",
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

//            const productImage = productElement.querySelector(".product-img");
//            console.log(productImage);
//            productImage.src = product.image;
            document.getElementById("product-img").src = product.image;
            document.getElementById("product-img").width = "300";

//            const productTitle = productElement.querySelector("#product-title");
//            productTitle.textContent = product.title;
            document.getElementById("product-title").textContent = product.title;

//            const productDescription = productElement.querySelector("#product-description");
//            productDescription.textContent = product.description;
            document.getElementById("product-description").textContent = product.description;
            document.getElementById("product-description").style.padding = "50";

//            const productPrice = productElement.querySelector("#product-price");
//            productPrice.textContent = product.price;
            document.getElementById("product-price").textContent = product.price;
            document.getElementById("product-price").style.color = "green";

            break;
        }
    }
}