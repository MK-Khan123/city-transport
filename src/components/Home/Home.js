import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../images/city-background.png';
import fakeData from '../../fakeData/MOCK_DATA.json';
import './Home.css';

const Home = () => {

    const backgroundStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div style={backgroundStyle}>
            <div className="row row-cols-1 row-cols-md-4 g-3" style={{ paddingTop: '300px', paddingBottom: '300px' }}>
                {
                    fakeData.map(data => {

                        const { ride, img, id } = data;
                        return (
                            <Link key={id} style={{ textDecoration: 'none' }} to={"/destination/" + ride}>
                                <div className="col">
                                    <div className="card cardStyle">
                                        <img src={img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-uppercase">{ride}</h5>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Home;