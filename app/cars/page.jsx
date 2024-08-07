import Products from "@/components/products"

export const data = 
            [
                {
                    "image": "/car-one.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-two.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-three.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-four.png",
                    "status": "Upcoming Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },

            {
                "image": "/property-one.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-two.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-three.png",
                "status": "Upcoming Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-four.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/electronic-one.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/electronic-two.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/eletronic-three.png",
                "status": "Upcoming Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/eletronic-four.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
    ]

export default function Page(){
    return(
        <>
            <Products 
            page="Cars" 
            headline="Find Your Dream Car!"
            detail="Discover a wide selection of vehicles to suit every 
            taste, budget and bid with confidence."
            category="Cars"
            style="cars"
            data={data}/>
        </>
    )
}