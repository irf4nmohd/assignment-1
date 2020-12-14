import React from 'react';
import PageWrapper from './PageWrapper';


// dummy img's (replaceble)
import profile from './images/profile.jpeg';
import bg from './images/bg.png';

const App = () => {
    //dummy data
    const Data = {
        id: 1,
        bio: {
            name: {
                firstName: "adam",
                lastName: "jhon"
            },
            photo: profile,
            backgroundImg: bg,
            designation: "ui/ux designer",
            contact: [
                { type: "email", value: "irf4nmohd@gmail.com", iconName: "fa-envelope" },
                { type: "number", value: 9394382818, iconName: "fa-phone-alt" },
                { type: "address", value: "mumbai india", iconName: "fa-map-marker-alt" }
            ]
        },
        info: [
            {
                type: "follower",
                count: 111
            },
            {
                type: "conservation",
                count: 90 + "%"
            },
            {
                type: "posts",
                count: 938
            }
        ],
        skills: ["reactjs", "html", "css", "javascript"],
        userContent: {
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, incidunt. Doloremque vitae temporibus maxime libero neque soluta ullam omnis odio doloribus, voluptates ipsum nostrum aut, hic at praesentium dicta explicabo!",
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, incidunt. Doloremque vitae temporibus maxime libero neque soluta ullam omnis odio doloribus, voluptates ipsum nostrum aut, hic at praesentium dicta explicabo!",
        }
    };


    return (
        <>
            <PageWrapper data={Data} />
        </>
    )
}

export default App;