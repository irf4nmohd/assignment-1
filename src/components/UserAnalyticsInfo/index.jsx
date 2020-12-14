import React from 'react'

function UserAnalyticsInfo({ info }) {
    let UserAnalytics = info?.map((obj, index) => {
        return (
            <div key={index} className="container__bio-block">
                <div className="block">
                    <div className="block__number">{obj.count ?? '__'}</div>
                    <div className="block__detail">{obj.type}</div>
                </div>
            </div>
        )
    });
    return (
        <div className="container__bio">
            {UserAnalytics}
        </div>
    )
}

export default UserAnalyticsInfo;
