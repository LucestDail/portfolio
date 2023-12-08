import React, { useEffect, useState } from "react";
import Portfolio from "../components/Portfolio";
import { dbService } from "../config/fbase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
    const [portfolios, setPortfolios] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const portfolioCollection = collection(dbService, 'portfolio');
            const portfolioSnapshot = await getDocs(portfolioCollection);
            const data = portfolioSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPortfolios(data);
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="">
                <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                    <div className="project">
                        <div className="desc">
                            <div className="con">
                                {portfolios.map((portfolioObject) => (
                                    <Portfolio key={portfolioObject.id} portfolioObject={portfolioObject} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;