const meds=[
    {
        _id:1,
        name:'Paracetamol',
        image:'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:10,
        description:'Paracetamol 500mg',
        rating :[
            {
                rater:'ratername',
                rate:5
            }, {
                rater:'ratername',
                rate:2
            }, {
                rater:'ratername',
                rate:3
            },
        ],
        inStock:5
    },
    {
        _id:2,
        name:'Mandal',
        image:'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:120,
        description:'Mandal 700mg',
        rating :[
            {
                rater:'ratername',
                rate:5
            },
            {
                rater:'ratername',
                rate:5
            },
        ],
        inStock:2
    },
    {
        _id:3,
        name:'Paracetamol',
        image:'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:10,
        description:'Paracetamol 500mg',
        rating :[
            {
                rater:'ratername',
                rate:5
            },
        ],
        inStock:0
    },
];

export default meds;
