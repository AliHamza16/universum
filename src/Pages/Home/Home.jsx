import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import GetPosts from '../../components/Articles/getPosts';
import Header from '../../components/Header/Header';
import Articles from '../../components/Articles/Articles';
import Footer from '../../components/Footer/Footer';
import { useGlobalState } from '../../../state';

export default function Home() {
    const [search] = useGlobalState('search');
    const { data, loading, error } = useQuery(GetPosts);
    if (error) return <div>{error.message}</div>;

    return (
        <>
            <Header />
            <Articles data={data} loading={loading} filter={search} />
            <Footer />
        </>
    );
}
