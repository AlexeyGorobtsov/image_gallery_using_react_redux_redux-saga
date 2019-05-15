const flickrImages = [
    'https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg',
    'https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg',
    'https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg',
    'https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg',
];

const delay = ms =>
    new Promise(resolve => setTimeout(resolve, ms));
export const fetchImg = () =>
    delay(500)
        .then(() => flickrImages);
//console.log(fetchImg());