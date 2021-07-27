import Head from 'next/head';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { TITLE } from './../@root';

export function Item( { src, page, data, prev, link } ) {
    console.log( "bi bi-".concat( src ).concat( " " ).concat( page === prev ? 'active' : '' ) )
    return (
        <div className={
            "menu-item d-flex justify-content-between align-items-center w-100 px-2 px-md-4 my-3 my-md-2 mb-md-4 ".concat(
                page === prev ? "active" : ""
            )
        }>
            <div className="menu-item-icon">
                <i className={ "bi bi-".concat( src ).concat( " " ).concat( page === prev ? 'active' : '' ) }></i>
            </div>
            <div className="menu-item-name">
                <Link href={ link }>
                    <a>
                        <span className="py-3 px-4"> { data } </span>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export function Menu( { page } ) {
    return (
        <Fragment>
            <Item link="/account/graphs/day" src="bar-chart-line" data="Graphiques" prev="graphs" page={ page } />
            <Item link="/account/show-data" src="clipboard-data" data="Tableaux de données" prev="show-data" page={ page } />
            <Item link="/account/account-data" src="window-sidebar" data="Mon compte" prev="account-data" page={ page } />
        </Fragment>
    );
};

export function AdminMenu( { page } ) {
    return (
        <Fragment>
            <Item link="/account/graphs/day" src="bar-chart-line" data="Graphiques" prev="graphs" page={ page } />
            <Item link="/account/show-data" src="clipboard-data" data="Tableaux de données" prev="show-data" page={ page } />
            <Item link="/account/account-data" src="window-sidebar" data="Mon compte" prev="account-data" page={ page } />
            <Item link="/admin" src="terminal-fill" data="Admin" prev="admin" page={ page } />
        </Fragment>
    );
};

export default function AccountRoot( { page, children, userdata } ) {
    const 
        state1 = 'd-none d-md-flex',
        state2 = 'd-flex d-md-flex',
        state3 = 'open-s',
        state4 = 'close-s',
        [ open, setOpen ] = useState( state1 ),
        [ type, setType ] = useState( state3 );
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" type="text/css" href="/css/account.css" />
            </Head>
            <div className="container-fluid d-flex justify-content-center align-items-center account-body p-0">
                <div className="row d-block d-md-flex flex-row w-100 main-row">
                    <div className="col col-md-5 col-lg-4 col-lx-3 menu-container overflow-hidden px-0 pt-2 pt-md-3 d-flex h-100 justify-content-center justify-content-md-start flex-column">
                        <div className="menu-brand text-light d-flex justify-content-center align-items-center">
                            <div className="menu-icon">
                                <img src="/img/solar.svg" alt="solar-icon"/>
                            </div>
                            <div className="menu-name pl-3">
                                <Link href="/">
                                    <a> { TITLE } </a>
                                </Link>
                            </div>
                        </div>
                        <div className="user-container d-flex justify-content-between align-items-center mx-3 px-3 mt-2 shadow">
                            <div className="user-icon">
                                <img src={ userdata.profil } alt="user" className="img" />
                            </div>
                            <div className="user-name px-3"> { userdata.username } </div>
                            <div className="user-action">
                                <img src="/img/menu/chevron-down.svg" alt="user-action" className="img" />
                            </div>
                        </div>
                        <div className="menu-small d-flex d-md-none justify-content-between align-items-center py-3 pt-4">
                            <div className="name pl-3"> Menu </div>
                            <div 
                                className={ "menu-action d-flex flex-column justify-content-center align-items-center mr-3 ".concat( type ) }
                                onClick={ function () {
                                    setOpen( open ===  state1 ? state2 : state1 );
                                    setType( type ===  state3 ? state4 : state3 );
                                } }
                            >
                                <div className="items item1"></div>
                                <div className="items item2"></div>
                                <div className="items item3"></div>
                            </div>
                        </div>
                        <div className="content-menu-data d-flex flex-column justify-content-center">
                            <div className={ "menu-data my-3 mx-2 mx-md-3 px-2 py-3 flex-column align-items-center shadow ".concat( open ) }>
                                { userdata.role === 'admin' ? <AdminMenu page={ page } /> : <Menu page={ page } /> }
                            </div>
                        </div>
                    </div>
                    <div className="col col-body d-block overflow-hidden px-0">
                        <div className="content-body d-block overflow-auto">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: { }
    };
};