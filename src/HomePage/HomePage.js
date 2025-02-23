import React, { useEffect, useState } from "react";
import { Chart as ChartJS, Tooltip, Legend } from "chart.js";
import axios from "axios";
import D3js from "../D3JS/DataThree";
import { Chart, Pie } from "react-chartjs-2";
import PieChart from "../PieChart/PieChart";

function HomePage() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const header = "http://localhost:8000"

    async function getData(params) {
        axios.get(header + '/budget').then(function (response){
            setData(response)
            setLoading(false)
        });
    }

    // On Mount I want this to fetch data from the backend server and assign it to a local variable
    useEffect(() => {
        getData();
    }, []);

    //Chart.js logic :)



    //D3 Logic :D (I love this data vis framework)
    return (
        <main className="container center" id="main" role="main">
        {/* This is a Semantic HTML Change */}
        {/* This is an A11y Change */}
        <article className="page-area" role="article">
            {/* This is a Semantic HTML Change */}
            <section className="text-box">
                {/* This is an A11y Change */}
                <h2>Stay on track</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </section>
            {/* This is a Semantic HTML Change */}
            <section className="text-box">
                {/* This is an A11y Change */}
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </section>
            {/* This is a Semantic HTML Change */}
            <section className="text-box">
                {/* This is an A11y Change */}
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </section>
            {/* This is a Semantic HTML Change */}
            <section className="text-box">
                {/* This is an A11y Change */}
                <h2>Free</h2>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </section>
            {/* This is a Semantic HTML Change */}
            <section className="text-box">
                {/* This is an A11y Change */}
                <h2>Stay on track</h2>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </section>
            {/* This is a Semantic HTML Change */}
            <section className="text-box">
                {/* This is an A11y Change */}
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </section>
            {/* This is a Semantic HTML Change */}
            <section className="text-box">
                {/* This is an A11y Change */}
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </section>
            {/* This is a Semantic HTML Change */}
            <section className="text-box">
                {/* This is an A11y Change */}
                <h2>Chart</h2>
                <p>
                    {!loading &&(
                        <PieChart data={data}>
                        </PieChart>
                    )}
                </p>
            </section>
            <section className="text-box" id="d3jsChart">
                {/* This is an A11y Change */}
                <h2>D3JS Chart</h2>
                {!loading &&(
                    <D3js data={data}>
                    </D3js>
                )}
            </section>  
            {/* This is a Semantic HTML Change */}
        </article>
    </main>
    );
  }
  
  export default HomePage;
  