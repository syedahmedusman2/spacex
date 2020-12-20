import React, { useEffect } from 'react';
import { useLaunchMissinInfoQuery } from '../../generated/graphql';
import Details from './LaunchDetails';
// import './Details.css';

interface OwnProps {
    id: number;
}

const InfoContainer = ({ id }: OwnProps) => {
    const { data, error, loading, refetch } = useLaunchMissinInfoQuery({ variables: { id: String(id) } });

    useEffect(() => {
        refetch();
    }, [id]);

    if (loading) {
        return <div>...</div>;
    }

    if (error || !data) {
        return <h2 style={{textAlign:"center"}}>Select a flight from the List</h2>;
    }


    return (
        <div className='detail'><Details data={data} /></div>
    )
}

export default InfoContainer;