const users=[
    {
        name:'sushant',
        email:'email@email.com',
        password:123,
        cart:[
            {
                name:'Paracetamol',
                qty:3,
                price:100
            },
            {
                name:'Sodium Hydrocloride',
                qty:3,
                price:100
            }
        ],
        shippingAddress:{
            street:'Sundhara',
            municipality:'Lalitpur Metropolitan City',
            wardNo:12,
            district:'Lalitpur'
        },
        orders:[
            {
                orderId:1,
                paymentInformation:'paymentInfo',
                order:[
                {
                    name:'Paracetamol',
                    qty:3,
                    price:100
                },
                {
                    name:'Sodium Hydrocloride',
                    qty:3,
                    price:100
                }
                ]
            }
        ]
    }
]