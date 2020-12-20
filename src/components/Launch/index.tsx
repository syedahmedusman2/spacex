import React from 'react';
import { useMissionsInfoQuery } from '../../generated/graphql'
import MissionList, {OwnProps} from './Launch';
import './style.css'
// import loading from './loading.gif';
import loading from './load.gif';
export const MissionContainer = (props: OwnProps) => {


    const { data, error, loading } = useMissionsInfoQuery();
    if (loading) {
        return <div style={{textAlign:"center", justifyContent:"center", }}>{pic}</div>
        
    }

    if (error || !data) { 
        return <div>Error please check your internet connection.</div>
    }


    return (
        <div data-spy="scroll">
            <h4>List</h4>
            <MissionList data={data} {...props} />
        </div>
    )
}
const pic = <img src={loading}></img>

























// import React from 'react';
// import {useLaunchesQuery} from '../../generated/graphql';
// import Launch from './Launch';

// const LaunchContainer = () => {
//     const { data, error, loading} = useLaunchesQuery();

//     if (loading) {
//         return <div>Data is Loading</div>
//     }
    
//     if(error || !data){
//         return <div>There is an error</div>
//     }

//     return <Launch data={data}/>

// };

// export default LaunchContainer;
