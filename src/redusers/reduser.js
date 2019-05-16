const defaultState = {
    images: [
        'https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg',
        'https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg',
        'https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg',
        'https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg',
    ],
    selectedImage: 'https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg'
};

export const images = (state = defaultState, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'TEST':
            console.log('THIS IS ONLY A TEST')
    }
    return state;
};