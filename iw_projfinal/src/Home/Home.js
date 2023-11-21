import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render() {

        return (
            <div className="container-fluid">
                <div className="alert alert-primary
                 mb-3" role="alert">
                    Homepage
                </div>
                <div className="alert alert-primary mb-3" role="alert">
                    Coisas...
                </div>
                <div className="alert alert-primary mb-3" role="alert">
                    Mais coisas...
                </div>
            </div>
        );
    }
}

export default Home;
