import React, { Component } from 'react';


class ImageComponent extends Component {
    render() {
        return (
            <>
                <img className={this.props?.className} src={this.props?.imgData || this.props?.altImgData} alt="hi" />
            </>
        )
    }
}

export default ImageComponent;