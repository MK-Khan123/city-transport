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
        pickTo: ''
    });
    const [showDetails, setShowDetails] = useState(false);

    const handleBlur = (e) => {
        if (e.target.name === 'pickFrom') {
            const newDestinationInfo = { ...destination };
            newDestinationInfo[e.target.name] = e.target.value;
            setDestination(newDestinationInfo);
        }
        if (e.target.name === 'pickTo') {
            const newDestinationInfo = { ...destination };
            newDestinationInfo[e.target.name] = e.target.value;
            setDestination(newDestinationInfo);
        }
    }


    return (
        <div className='row' style={{ marginTop: '30px' }}>
            <div className='col-md-4'>
                {showDetails ||
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Pick from</label>
                            <input name='pickFrom' onBlur={handleBlur} type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pick to</label>
                            <input name='pickTo' onBlur={handleBlur} type="text" className="form-control" />
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
                {showDetails &&
                    <div>
                        <div className='destination-area'>
                            <li>{destination.pickFrom}</li>
                            <li>{destination.pickTo}</li>
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
            <div className='col-md-8'>
                <img className='mapImage-style' src={mapImage} alt="..." />
            </div>
        </div>
    );
};

export default DestinationDetails;