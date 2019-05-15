import React, {Component} from 'react';

import { fetchImg } from '../api/index';

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            selectedImage: null,
        }
    }

    componentDidMount() {
        fetchImg().then(response => {
            const images = response;
            this.setState({images, selectedImage: images[0]})
        });
    }

    handleThumbClick = selectedImage => {
      this.setState({
          selectedImage
      })
    };

    render() {
        const {images, selectedImage} = this.state;
        return (
            <div className={'image-gallery'}>
                <div className="gallery-image">
                    <div>
                        {
                            selectedImage
                                ? <img src={selectedImage} alt="picture"/>
                                : false
                        }
                    </div>
                </div>
                <div className="image-scroller">
                    {images.map((image, i) => (
                        <div key={i} onClick={() => this.handleThumbClick(image)}>
                            <img src={image}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}