import React from 'react';
import { MissionsInfoQuery } from '../../generated/graphql';
import './style.css';
import loading from './loading.gif';

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}

interface Props extends OwnProps {
    data: MissionsInfoQuery
}

const MissionList: React.FC<Props> = ({ data, handleIdChange }) => {
    return (
        <div className='LaunchList' >
         

            {!!data.launches &&
                data.launches.map(
                    (launchObj, i) =>
                        !!launchObj && (
                            <div className="card black text-white" style={{ margin: '2% 7%', padding: '1%' }} key={i}
                                onClick={() => handleIdChange(launchObj.flight_number!)}>
                                <div className="card-body">
                                    {launchObj?.mission_name} ({launchObj?.launch_year})
                                 <br />
                                    {launchObj?.launch_success ? (<span
                                        style={{ color: 'green' }}
                                    >Success</span>) : (<span
                                        style={{ color: 'red' }}
                                    >Failed</span>)}
                                    <hr></hr>
                                </div>

                            </div>

                        )
                )}




        </div>

    )

}

export default MissionList;




















