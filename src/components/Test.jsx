import React, { useState, useEffect } from 'react';
//default images
import defaultProfile from './images/defaultProfile.jpg';
import defaultBg from './images/defaultBg.jpg';
const Test = (props) => {

    //setting img's classNames with respect to it's type
    let [classNames, setClassNames] = useState({ imgContainer: "", img: "" });
    let [defaultImg, setDefaultImg] = useState(null);

    //update the state image gets update
    useEffect(() => {
        switch (props.type) {
            case 'profile':
                setClassNames({ imgContainer: "profile_container", img: "profile_container-photo" });
                setDefaultImg(defaultProfile);
                break;
            case 'profileBackground':
                setClassNames({ imgContainer: "bg", img: "bg_img" });
                setDefaultImg(defaultBg);
                break;
            default:
                break;
        }
    }, [props]);

    return (
        <section className={classNames.imgContainer}>
            <img className={classNames.img} src={props.imgData || defaultImg} alt="hi" />
        </section>
    )
}

export default React.memo(Test);
