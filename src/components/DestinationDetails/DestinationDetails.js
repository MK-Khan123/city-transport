import React, { useState } from 'react';
import { useParams } from 'react-router';
import mapImage from '../../images/map.png';
import './DestinationDetails.css';
import fakeData from '../../fakeData/MOCK_DATA.json';
import peopleIcon from '../../images/peopleicon.png';

const DestinationDetails = () => {
    const { rideType } = useParams();

    const rideData = fakeData.find(data => data.ride === rideType);
    const { ride, img, price } = rideData;

    const [destination, setDestination] = useState({
        pickFrom: '',
        dropAt: ''
    });
    const [showDetails, setShowDetails] = useState(false); //This useState is used to toggle between trip details input (Pick From, Drop At, Date of Trip) and displaying trip details (with dynamic ride logo and price).

    const handleBlur = (e) => {
        if (e.target.name === 'pickFrom') {
            const newDestinationInfo = { ...destination };
            newDestinationInfo[e.target.name] = e.target.value;
            setDestination(newDestinationInfo);
        }
        if (e.target.name === 'dropAt') {
            const newDestinationInfo = { ...destination };
            newDestinationInfo[e.target.name] = e.target.value;
            setDestination(newDestinationInfo);
        }
    }


    return (
        <div className='row' style={{ marginTop: '30px' }}>
            <div className='col-md-4'>
                
                {/* This part requires information from users about their trip details (Pick From, Drop At, Date of Trip) */}
                {showDetails ||
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Pick from</label>
                            <input name='pickFrom' onBlur={handleBlur} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Drop At</label>
                            <input name='dropAt' onBlur={handleBlur} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Start Date</label>
                            <input name='start' type="date" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Return Date</label>
                            <input name='end' type="date" className="form-control" />
                        </div>
                        <button onClick={() => setShowDetails(!showDetails)} type="submit" className="btn btn-primary">Search</button>
                    </div>
                }
                
                {/* This part displays the destination with dynamic ride logo and price of trip */}
                {showDetails &&
                    <div>
                        <div className='destination-area'>
                            <li>{destination.pickFrom}</li>
                            <li>{destination.dropAt}</li>
                        </div>

                        <div className="card mb-3" style={{ maxWidth: '540px', borderRadius: '10px' }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <img className='rideIcon-style' src={img} alt="..." />
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body" style={{textAlign:'center'}}>
                                        <h5 className="card-title text-uppercase">{ride}</h5>
                                        <p className="card-text"><img className="peopleIcon-style" src={peopleIcon} alt="" /> 4</p>
                                        <p className="card-text" style={{ fontWeight: '700' }}>${price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" style={{ maxWidth: '540px', borderRadius: '10px' }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <img className='rideIcon-style' src={img} alt="..." />
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body" style={{textAlign:'center'}}>
                                        <h5 className="card-title text-uppercase">{ride}</h5>
                                        <p className="card-text"><img className="peopleIcon-style" src={peopleIcon} alt="" /> 4</p>
                                        <p className="card-text" style={{ fontWeight: '700' }}>${price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" style={{ maxWidth: '540px', borderRadius: '10px' }}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <img className='rideIcon-style' src={img} alt="..." />
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body" style={{textAlign:'center'}}>
                                        <h5 className="card-title text-uppercase">{ride}</h5>
                                        <p className="card-text"><img className="peopleIcon-style" src={peopleIcon} alt="" /> 4</p>
                                        <p className="card-text" style={{ fontWeight: '700' }}>${price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            
            {/* A static map image is placed instead of Google Map */}
            <div className='col-md-8'>
                <img className='mapImage-style' src={mapImage} alt="..." />
            </div>
        </div>
    );
};

export default DestinationDetails;