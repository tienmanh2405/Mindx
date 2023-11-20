import './App.css';
import ProductList from './component/ProductList';

const App = () => {
  const products = [
        {
            "_id": "648aebfa29963f5890beb7fa",
            "name": "univer 1",
            "slug": "univer-1",
            "description": "dfgdfgdfg",
            "price": 300000,
            "category": "mobile",
            "brand": "surface",
            "quantity": 21,
            "sold": 0,
            "images": [
                "https://res.cloudinary.com/dymphuori/image/upload/v1686631981/wvvo9lvrt74bbwln8klw.jpg"
            ],
            "colors": [
                "#fff"
            ],
            "numReviews": 0,
            "totalRating": "0",
            "ratings": [],
            "createdAt": "2023-06-15T10:46:18.728Z",
            "updatedAt": "2023-06-15T10:46:18.728Z"
        },
        {
            "colors": [],
            "_id": "6487f62e1a26d2b7626ad9e8",
            "name": "test iphonec 111",
            "slug": "test-iphonec-111",
            "description": "tessssssssst",
            "price": 12000000,
            "category": "mobile",
            "brand": "apple",
            "quantity": 1000,
            "sold": 0,
            "images": [
                "https://res.cloudinary.com/dymphuori/image/upload/v1686631975/vlfofvwktcxob6as9kpn.jpg",
                "https://res.cloudinary.com/dymphuori/image/upload/v1686631978/yrbr81j3w3l3dhxlu9qw.jpg",
                "https://res.cloudinary.com/dymphuori/image/upload/v1686631980/xqhcsgnlqgq12mlczm3q.jpg",
                "https://res.cloudinary.com/dymphuori/image/upload/v1686631981/wvvo9lvrt74bbwln8klw.jpg"
            ],
            "numReviews": 0,
            "totalRating": "0",
            "ratings": [],
            "createdAt": "2023-06-13T04:53:02.243Z",
            "updatedAt": "2023-06-13T04:53:02.243Z"
        },
        {
            "colors": [],
            "_id": "6487f1ec26b477e1dee1c39f",
            "name": "test iphone",
            "description": "tessssssssst",
            "price": 12000000,
            "category": "mobile",
            "brand": "apple",
            "quantity": 1000,
            "sold": 0,
            "images": [
                "https://res.cloudinary.com/dymphuori/image/upload/v1686630886/hps2g9meygtgzkwkbyib.jpg",
                "https://res.cloudinary.com/dymphuori/image/upload/v1686630888/ehyeqjtm8ypgy9afig4v.jpg",
                "https://res.cloudinary.com/dymphuori/image/upload/v1686630889/vwo6gym0rjwd6jkrutdn.jpg",
                "https://res.cloudinary.com/dymphuori/image/upload/v1686630891/dfurdyosjrprlupefb2y.jpg"
            ],
            "numReviews": 0,
            "totalRating": "0",
            "ratings": [],
            "createdAt": "2023-06-13T04:34:52.129Z",
            "updatedAt": "2023-06-13T04:34:52.129Z"
        }
    ]

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};
  

export default App;