import React from "react";
import {Link} from "react-router-dom";

const NoMatch = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#e7e7e7',
            height: '100vh'
        }}>
            <div style={{textAlign: 'center'}}>
                <div style={{fontSize: "500%"}}>404</div>
                <div style={{fontSize: "200%"}}>Page Not Found</div>

                <Link to='/' >
                    <div style={{fontSize: "150%"}}>
                        بازگشت به خانه
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default NoMatch