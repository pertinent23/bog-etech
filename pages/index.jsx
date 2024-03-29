import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import Navigation from './@nav';
import { ArticleItem } from './@api';

export const page = 'home';
export default function Home() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/css/home.css" />
                <link rel="stylesheet" href="/css/article.css" />
            </Head>
            <div className="content-page d-flex flex-column">
                <div className="container-fluid header d-flex justify-content-center align-items-center">
                    <div className="d-flex header-icon justify-content-center align-items-center my-4">
                        <Image src="/img/other/africa.svg" alt="icon" layout="fill" />
                    </div>
                    <div className="d-block header-title ml-3"> E-TECH  </div>
                </div>
                <Navigation main={ page } />
                <div className="w-100 content-parts d-flex flex-column">
                    <div className="w-100 part first-part d-flex justify-content-center align-items-center">
                        <div className="part-image d-flex justify-content-center align-items-center">
                            <img src="/img/other/img3.jpg" alt="main" className="img img-main" />
                        </div>
                        <div className="part-data d-flex position-absolute flex-column justify-content-center align-items-center w-100 h-100">
                            <div className="container-fluid text-center part-title">
                                Developement web
                            </div>
                            <div className="container-fluid text-center part-description pt-4 px-5">
                                Les actualités en developement web
                            </div>
                            <div className="container-fluid d-flex justify-content-center pt-2">
                                <div className="btn more mt-4 px-4 py-1 d-flex align-items-center"> 
                                    Plus
                                    <i className="bi bi-arrow-right ml-2"></i> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 part second-part d-flex flex-column justify-content-center align-items-center pt-5 mt-3">
                        <div className="row w-100">
                            <div className="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-end content-article px-0 px-md-3">
                                <div className="article-item d-flex flex-column w-100 justify-content-start align-items-start">
                                    <span className="list-title ml-2 pt-4"> Articles recents </span>
                                    <div className="list-bar mt-4 ml-2 mb-5"></div>
                                </div>
                                <ArticleItem img="/img/pres/img1.jpg" title="IOT" />
                                <ArticleItem img="/img/pres/img5.jpg" title="INTERNET" />
                                <ArticleItem img="/img/pres/img4.jpg" title="JAVA" />
                                <div className="article-item d-flex w-100 justify-content-start">
                                    <nav aria-label="Page navigation example">
                                      <ul className="pagination">
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="bi bi-chevron-right"></i>
                                            </a>
                                        </li>
                                      </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 px-2 px-md-3 d-flex flex-column align-items-center align-items-md-start">
                                <div className="options mt-2 mt-md-5 py-4 d-flex flex-column align-items-center">
                                    <div className="option-title py-4"> Derniers articles </div>
                                    <div className="bar"></div>
                                    <div className="option-items container-fluid py-3">
                                        <div className="option-item d-flex my-4">
                                            <div className="option-item-img d-flex justify-content-center align-items-center">
                                                <img src="/img/pres/img5.jpg" alt="test" className="img-responsive" />
                                            </div>
                                            <div className="option-item-data d-flex flex-column container-fluid">
                                                <div className="option-item-title"> INTERNET </div>
                                                <div className="option-item-detail py-2"> 15/03/2018 </div>
                                            </div>
                                        </div>
                                        <div className="option-item d-flex my-4">
                                            <div className="option-item-img d-flex justify-content-center align-items-center">
                                                <img src="/img/pres/img4.jpg" alt="test" className="img-responsive" />
                                            </div>
                                            <div className="option-item-data d-flex flex-column container-fluid">
                                                <div className="option-item-title"> JAVA </div>
                                                <div className="option-item-detail py-2"> 15/03/2018 </div>
                                            </div>
                                        </div>
                                        <div className="option-item d-flex my-4">
                                            <div className="option-item-img d-flex justify-content-center align-items-center">
                                                <img src="/img/pres/img6.jpg" alt="test" className="img-responsive" />
                                            </div>
                                            <div className="option-item-data d-flex flex-column container-fluid">
                                                <div className="option-item-title"> MOBILE </div>
                                                <div className="option-item-detail py-2"> 15/03/2018 </div>
                                            </div>
                                        </div>
                                        <div className="option-item d-flex my-4">
                                            <div className="option-item-img d-flex justify-content-center align-items-center">
                                                <img src="/img/pres/img1.jpg" alt="test" className="img-responsive" />
                                            </div>
                                            <div className="option-item-data d-flex flex-column container-fluid">
                                                <div className="option-item-title"> IOT </div>
                                                <div className="option-item-detail py-2"> 15/03/2018 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4 mt-5 d-flex justify-content-center options search-option-container">
                                    <div className="search-option d-flex">
                                        <input type="text" name="search" id="search-option" className="pl-3" placeholder="Recherche..." />
                                        <div className="btn d-flex justify-content-center align-items-center">
                                            <i className="bi bi-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="options mt-2 py-4 mt-5 d-flex flex-column align-items-center">
                                    <div className="option-title py-4"> Categories </div>
                                    <div className="bar"></div>
                                    <div className="option-items container-fluid py-3">
                                        <div className="d-flex align-items-center my-4 category-item">
                                            <i className="bi bi-chevron-right mr-3"></i>
                                            Mobile
                                            <div className="category-count d-flex justify-content-center align-items-center ml-3"> 4 </div>
                                        </div>
                                        <div className="d-flex align-items-center my-4 category-item">
                                            <i className="bi bi-chevron-right mr-3"></i>
                                            IOT
                                            <div className="category-count d-flex justify-content-center align-items-center ml-3"> 6 </div>
                                        </div>
                                        <div className="d-flex align-items-center my-4 category-item">
                                            <i className="bi bi-chevron-right mr-3"></i>
                                            Internet
                                            <div className="category-count d-flex justify-content-center align-items-center ml-3"> 3 </div>
                                        </div>
                                        <div className="d-flex align-items-center my-4 category-item">
                                            <i className="bi bi-chevron-right mr-3"></i>
                                            PHP
                                            <div className="category-count d-flex justify-content-center align-items-center ml-3"> 9 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container-fluid py-4 mt-5 d-flex flex-column justify-content-center align-items-center newsletter sticky">
                                    <div className="title container-fluid py-2"> NewsLetter </div>
                                    <div className="description container-fluid py-2"> Souscrivez pour être au courant de nos prochaines publications </div>
                                    <input type="text" className="my-3 pl-3 py-3 mt-5" placeholder="Votre Email: " />
                                    <div className="btn py-3 mt-4" id="subscribe"> Souscrire </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 footer mt-5 px-0 d-flex d-flex flex-column overflow-hidden">
                            <div className="footer-head container px-0 mx-0 mx-sm-auto">
                                <div className="row w-100 mx-0 px-0">
                                    <div className="col col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                                        <div className="options mt-2 py-4 d-flex flex-column align-items-center">
                                            <div className="option-title py-4"> Articles Populaire </div>
                                            <div className="option-items container-fluid">
                                                <div className="option-item d-flex my-4">
                                                    <div className="option-item-img d-flex justify-content-center align-items-center">
                                                        <img src="/img/pres/img5.jpg" alt="test" className="img-responsive" />
                                                    </div>
                                                    <div className="option-item-data d-flex flex-column container-fluid">
                                                        <div className="option-item-title"> INTERNET </div>
                                                        <div className="option-item-detail py-2"> 15/03/2018 </div>
                                                    </div>
                                                </div>
                                                <div className="option-item d-flex my-4">
                                                    <div className="option-item-img d-flex justify-content-center align-items-center">
                                                        <img src="/img/pres/img4.jpg" alt="test" className="img-responsive" />
                                                    </div>
                                                    <div className="option-item-data d-flex flex-column container-fluid">
                                                        <div className="option-item-title"> JAVA </div>
                                                        <div className="option-item-detail py-2"> 15/03/2018 </div>
                                                    </div>
                                                </div>
                                                <div className="option-item d-flex my-4">
                                                    <div className="option-item-img d-flex justify-content-center align-items-center">
                                                        <img src="/img/pres/img6.jpg" alt="test" className="img-responsive" />
                                                    </div>
                                                    <div className="option-item-data d-flex flex-column container-fluid">
                                                        <div className="option-item-title"> MOBILE </div>
                                                        <div className="option-item-detail py-2"> 15/03/2018 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                                        <div className="options mt-2 py-4 d-flex flex-column align-items-center">
                                            <div className="option-title py-4"> Derniers articles </div>
                                            <div className="option-items container-fluid">
                                                <div className="option-item d-flex my-4">
                                                    <div className="option-item-img d-flex justify-content-center align-items-center">
                                                        <img src="/img/pres/img5.jpg" alt="test" className="img-responsive" />
                                                    </div>
                                                    <div className="option-item-data d-flex flex-column container-fluid">
                                                        <div className="option-item-title"> INTERNET </div>
                                                        <div className="option-item-detail py-2"> 15/03/2018 </div>
                                                    </div>
                                                </div>
                                                <div className="option-item d-flex my-4">
                                                    <div className="option-item-img d-flex justify-content-center align-items-center">
                                                        <img src="/img/pres/img4.jpg" alt="test" className="img-responsive" />
                                                    </div>
                                                    <div className="option-item-data d-flex flex-column container-fluid">
                                                        <div className="option-item-title"> JAVA </div>
                                                        <div className="option-item-detail py-2"> 15/03/2018 </div>
                                                    </div>
                                                </div>
                                                <div className="option-item d-flex my-4">
                                                    <div className="option-item-img d-flex justify-content-center align-items-center">
                                                        <img src="/img/pres/img6.jpg" alt="test" className="img-responsive" />
                                                    </div>
                                                    <div className="option-item-data d-flex flex-column container-fluid">
                                                        <div className="option-item-title"> MOBILE </div>
                                                        <div className="option-item-detail py-2"> 15/03/2018 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 col-md-4 d-flex justify-content-center">
                                        <div className="options tags mt-2 py-4 d-flex flex-column align-items-center">
                                            <div className="option-title py-4"> Categories </div>
                                            <div className="option-items container-fluid">
                                                <a href="#" className="tag-item"> PHP </a>
                                                <a href="#" className="tag-item"> code </a>
                                                <a href="#" className="tag-item"> JAVA </a>
                                                <a href="#" className="tag-item"> IOT </a>
                                                <a href="#" className="tag-item"> Programmation </a>
                                                <a href="#" className="tag-item"> python </a>
                                                <a href="#" className="tag-item"> SQL </a>
                                                <a href="#" className="tag-item"> Bloc-chaine </a>
                                                <a href="#" className="tag-item"> C++ </a>
                                                <a href="#" className="tag-item"> CSHARP </a>
                                                <a href="#" className="tag-item"> Swisht </a>
                                                <a href="#" className="tag-item"> PHP </a>
                                                <a href="#" className="tag-item"> code </a>
                                                <a href="#" className="tag-item"> JAVA </a>
                                                <a href="#" className="tag-item"> IOT </a>
                                                <a href="#" className="tag-item"> Programmation </a>
                                                <a href="#" className="tag-item"> python </a>
                                                <a href="#" className="tag-item"> SQL </a>
                                                <a href="#" className="tag-item"> Bloc-chaine </a>
                                                <a href="#" className="tag-item"> C++ </a>
                                                <a href="#" className="tag-item"> CSHARP </a>
                                                <a href="#" className="tag-item"> Swisht </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-body container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between px-4 px-md-5 py-3">
                                <div className="footer-body-part d-flex py-3 py-md-2 d-flex align-items-center">
                                    <img src="/img/other/africa.w.svg" alt="footer-img" className="img-responsive mr-3" />
                                    Etech
                                </div>
                                <div className="footer-body-part d-flex py-3 py-md-2 align-items-center">
                                    <a href="#" className="footer-body-share">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="#" className="footer-body-share">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#" className="footer-body-share">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a href="#" className="footer-body-share">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {}
    };
};