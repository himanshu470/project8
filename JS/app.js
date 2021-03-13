const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-1.jpeg?raw=true",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-2.jpeg?raw=true",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-3.jpeg?raw=true",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-4.jpeg?raw=true",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-5.jpeg?raw=true",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-6.jpeg?raw=true",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-7.jpeg?raw=true",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-8.jpeg?raw=true",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-9.jpeg?raw=true",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: " buddy",
        category: "dinner",
        price: 160.99,
        img: "https://github.com/john-smilga/javascript-basic-projects/blob/master/8-menu/setup/images/item-10.jpeg?raw=true",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];


const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");


//load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
displayMenuButtons();
});





function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values,item) {
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['all']);
    const categoryBtns = categories.map(function (category) {
        return`<button class="filter-btn" type="button" data-id=${category}>
        ${category}
           </button>`;
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
//filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category){
                    return menuItem;
                }

            });
            // console.log(menuCategory);
            if (category === 'all'){
                displayMenuItems(menu)
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
}