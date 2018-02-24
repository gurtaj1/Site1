const initialState = [
    {
        type: "kits",
        title: "vape kits",
        text: "Vape Kits are the complete bang for your buck package. Whether you are on the go, in need of a full system thats fine tuned to push every component to its fullest, or you want a full system but still want to incoorporate your own adjustments, Vape Kits are the one for you. They are ready to be juiced up straight out of the box and if you feel like changing certain components further down the line, then you have that option too!",
        imageSource: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Kits.jpg",
        imageAlt: "Vape Kits Image",
        imageSource1: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_ELiquids.jpg",
        imageAlt1: "Don't Forget your E-liquids",
        link1: "/products/eliquids",
        imageSource2: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Batteries.jpg",
        imageAlt2: "Don't Forget your Batteries",
        link2: "products/batteries"
    },
    {
        type: "tanks",
        title: "vape tanks",
        text: "Vape Tanks come in all shapes in sizes. They provide the main thing we all want; the vapour! They are by far the easiest things to use. With On-the-go refills when you need a quick top-up and on-the-go coil replacement when you are in need of a fresh breath of vape. We have all types of Tanks for all types of vapers, browse through and see which one best suits you!",
        imageSource: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Tanks.jpg",
        imageAlt: "Vape Tanks Image",
        imageSource1: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Coils.jpg",
        imageAlt1: "Don't Forget your Coils",
        link1: "/products/coils",
        imageSource2: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_ELiquids.jpg",
        imageAlt2: "Don't Forget your E-liquids",
        link2: "/products/eliquids"
    },
    {
        type: "coils",
        title: "coils",
        text: "Coils are a tanks best friend. After so many puffs, the wick which is used to absorb the juice and pass it onto some real heat, eventually dies out. When this happens a new coil (with wick) is introduced to replenish the whole tank back to brand new!",
        imageSource: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Coils.jpg",
        imageAlt: "Vape Coils Image",
        imageSource1: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_ELiquids.jpg",
        imageAlt1: "Don't Forget your E-liquids",
        link1: "/products/eliquids",
        imageSource2: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Batteries.jpg",
        imageAlt2: "Don't Forget your Batteries",
        link2: "products/batteries"
    },
    {
        type: "eliquids",
        title: "e-liquids",
        text: "E-Liquids are what provide that juicy flavour, and the nicotine too if that's what you're after! Sometimes you dont want the same flavour all day sometimes you want to switch it up. Here at King of Vape we like mixing things up and for that reason we have a huge variety of different flavours to keep those taste buds tingling!",
        imageSource: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_ELiquids.jpg",
        imageAlt: "Vape ELiquids Image",
        imageSource1: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Kits.jpg",
        imageAlt1: "Don't Forget your Kit",
        link1: "/products/kits",
        imageSource2: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Batteries.jpg",
        imageAlt2: "Don't Forget your Batteries",
        link2: "products/batteries"
    },
    {
        type: "batteries",
        title: "vape batteries",
        text: "Add some power to your juice, you cant vape without it!",
        imageSource: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Batteries.jpg",
        imageAlt: "Vape Batteries Image",
        imageSource1: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_ELiquids.jpg",
        imageAlt1: "Don't Forget your E-liquids",
        link1: "/products/eliquids",
        imageSource2: "https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Tanks.jpg",
        imageAlt2: "Don't Forget your Tank",
        link2: "products/tanks"
    },
    {
        type: "accessories",
        title: "vape accessories",
        text: "Accessories come in all shapes and sizes",
        imageSource: "",
        imageAlt: "",
        imageSource1: "",
        imageAlt1: "",
        link1: "",
        imageSource2: "",
        imageAlt2: "",
        link2: ""
    },
    {
        type: "mods",
        title: "vape mods",
        text: "Vape Mods hold all the power and all control! Whether you prefer to control your puffs based on temperature, voltage, or wattage, or if you like to go even further into it and assess just how many puffs you are getting out of a full tank of your favourite juice, you can rest assured that the King of Vape has a Mod for you!",
        imageSource: "",
        imageAlt: "",
        imageSource1: "",
        imageAlt1: "",
        link1: "",
        imageSource2: "",
        imageAlt2: "",
        link2: ""
    },
    {
        type: "rebuildables",
        title: "vape rebuildables",
        text: "Rebuildables come in two types. The Drippers (RDA's) and the Tanks (RTA's). These are not the same tanks that the King has in the Tanks section. These Rebuildable Tanks and Rebuildable Drippers do not limit you to premade coils. With these Rebuildables you can pick just exactly how many coils, what type of coil, and what type of wick, you would like to use inorder to produce that juicy falvoursome vapour that we all love so much!",
        imageSource: "",
        imageAlt: "",
        imageSource1: "",
        imageAlt1: "",
        link1: "",
        imageSource2: "",
        imageAlt2: "",
        link2: ""
    }
]

export default function(state=initialState, action){
    switch (action.type) {
        default:
            return state;
    }
        return state;
};