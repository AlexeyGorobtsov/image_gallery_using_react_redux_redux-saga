import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchImg } from '../api/index';

export class Gallery extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch({type: 'TEST'});
        console.log(props)
    }

    render() {
        const {images, selectedImage} = this.props;
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
                        <div key={i}>
                            <img src={image}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({images: state.images, selectedImage: state.selectedImage});

export default connect(mapStateToProps)(Gallery)