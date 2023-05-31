import './Main.css'
import brush from "../images/brush.svg";
import megaphone from "../images/megaphone.svg";
import objectSelect from "../images/object-select.svg";
import globeLine from "../images/globe-line.svg";
import Products from './Products';

const Main = () => {
    return (  
        <main>
            <h4><span>What We Do</span></h4>
            <h2>We've got everything you need to launch and grow your business</h2>
            <section className='what-we-do-sec'>
                <article className='what-we-do-article'>
                    <img className='icon' src={brush} alt="brush" />
                    <div>
                        <h4>Brand Identity</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repellendus dicta ad quasi minima. Fugiat dolor exercitationem fugit totam harum ipsam unde inventore, qui rerum tempore nam, ratione libero ea.</p>
                    </div>
                </article>
                <article className='what-we-do-article'>
                    <img className='icon' src={objectSelect} alt="object" />
                    <div>
                        <h4>Illustration</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repellendus dicta ad quasi minima. Fugiat dolor exercitationem fugit totam harum ipsam unde inventore, qui rerum tempore nam, ratione libero ea.</p>
                    </div>
                </article>
                <article className='what-we-do-article'>
                    <img className='icon' src={megaphone} alt="megaphone" />
                    <div>
                        <h4>Marketing</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repellendus dicta ad quasi minima. Fugiat dolor exercitationem fugit totam harum ipsam unde inventore, qui rerum tempore nam, ratione libero ea.</p>
                    </div>
                </article>
                <article className='what-we-do-article'>
                    <img className='icon' src={globeLine} alt="globe" />
                    <div>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta repellendus dicta ad quasi minima. Fugiat dolor exercitationem fugit totam harum ipsam unde inventore, qui rerum tempore nam, ratione libero ea.</p>
                    </div>
                </article>
            </section>
            <Products/>
        </main>
    );
}
 
export default Main;