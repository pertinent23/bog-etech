import Head from 'next/head';
import { Fragment } from 'react';
import { element, string } from 'prop-types';

export const title = () => (  'E-TECH' );
export default function Root( { children } ) {
    return (
        <Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#222222"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" type="text/css" href="/libs/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="/css/main.css" />
                <link rel="stylesheet" href="/icons/bootstrap-icons.css" />
                <link rel="icon" href="/img/etech.png" type="image/png" />
                <title> { title() } </title>
                <script async src="/libs/jquery-3.3.1.slim.min.js"></script>
                <script async src="/libs/popper.min.js"></script>
                <script async src="/libs/digital-v2.0.0.min.js"></script>
            </Head>
            <div className="container-fluid p-0 main-container d-flex justify-content-center align-items-center px-0 px-sm-2 px-md-3">
                { children }
            </div>
            <script async src="/libs/bootstrap.bundle.min.js"></script>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            data: { }
        }
    };
};

Root.propTypes = {
    children: element,
    page: string
};