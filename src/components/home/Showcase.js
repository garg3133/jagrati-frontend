import {useEffect} from 'react'

import './Showcase.css'

const Showcase = () => {

    useEffect(() => {
        const show_p_txt = "Give way to changing the lives of needy children through Education";
        let i=0;
        show_p();
        function show_p(){	
            if(i < show_p_txt.length){
                document.getElementById("show-p").innerHTML += show_p_txt.charAt(i);
                i++;
                setTimeout(show_p, 50); //speed is in milliseconds
            }
        }
        return () => {
            document.getElementById("show-p").innerHTML = "";
        }
    }, []);
   
    return (
        <section id="showcase">
            <div className="show-bg">
                <div className="container">
                    <h1 data-aos="zoom-in" data-aos-duration="1500">Jagrati Promotes <span style={{color: "#ff8c00"}}>Education in
                            Villages</span></h1>
                    <p id="show-p"></p>
                </div>
            </div>
        </section>
    );
}

export default Showcase
