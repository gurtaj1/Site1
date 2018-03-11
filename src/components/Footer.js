import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footerContents">
                        <div className="row">
                            <div className="col-12 col-md-3 mx-auto">
                                <div className="bigDisclaimer">
                                    <h6>DISCLAIMER</h6>
                                    This App is for demonstration purposes only. All information on products displayed, should not be held as a true representation of the actual real-life products.
                                </div>
                            </div>
                            <div className="col-12 col-md-3 mx-auto">
                                <div className="profile">
                                    <h6>DEVELOPER NETWORK</h6>
                                    <div className="networkIcons">
                                        <a href="mailto:gurtajkang@yahoo.co.uk"><i className="fa fa-envelope"></i></a>
                                        <a href="https://github.com/gurtaj1"><i className="fa fa-github"></i></a>
                                        <a href="http://www.linkedin.com/in/gurtaj-singh-kang-6883515b"><i className="fa fa-linkedin-square"></i></a>
                                        <a href="https://stackoverflow.com/users/8383176/gurtaj"><i className="fa fa-stack-overflow"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-2 mx-auto">
                                <div className="address">
                                    <h6>ADDRESS</h6>
                                    <p>King Of Vape,<br/>Trueland Avenue,<br/>Hull<br/>HU5 8OS</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="smallDisclaimer mx-auto">
                                © All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;