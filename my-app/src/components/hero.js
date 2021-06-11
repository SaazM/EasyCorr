import "./hero.css"
const Hero = ()=>{
    return(
        <div className="hero-image">
            <div className="container rounded">
                <h1 className="hero-text display-1 mb-4 mt-4">
                    Gain Statistical Insights From <span style={{color: "#EE4B2B"}}>Reliable Data</span>
                </h1>
                <h5 className="hero-text display-1 mb-5">
                    We leverage the U.S Census Data API which contains millions of reliable datasets.
                </h5>
                <div className="d-grid gap-1 d-md-block">
                    <button className="btn btn-primary btn-lg mx-3" type="button">Try it out</button>
                    <button className="btn btn-warning btn-lg mx-3" type="button">Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default Hero