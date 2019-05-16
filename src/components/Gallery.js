import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as GalleryActions from '../actions';

export class Gallery extends Component {

    componentDidMount() {
        console.log(this)
        this.props.loadImages();
    }

    render() {
        const { images, selectedImage, selectImage } = this.props;

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
                        <div key={i} onClick={() => selectImage(image)}>
                            <img src={image}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({images: state.images, selectedImage: state.selectedImage});
const mapActionCreatorsToProps = dispatch => bindActionCreators(GalleryActions, dispatch);

export default connect(mapStateToProps, mapActionCreatorsToProps)(Gallery)