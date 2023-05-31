import './Products.css'
import frikadellen from "../images/frikadellen.jpeg"
import glass from "../images/glass.jpeg"
import pizza from "../images/pizza.jpeg"
import pizza2 from "../images/pizza2.jpeg"
import salat from "../images/salat.jpeg"
import scampi from "../images/scampi.jpeg"
import spaghetti from "../images/spagetthi.jpeg"
import teller from "../images/teller.jpeg"

const Products = () => {
    return (  
        <section className='products-sec'>
                <div className='grey-box'></div>
                <figure className='products-fig'>
                    <article className='products-article'>
                        <img className='product-img' src={frikadellen} alt="frikadellen" />
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum officia blanditiis.</p>
                        <h5><span>$45 / $55</span></h5>
                    </article>
                    <article className='products-article'>
                        <img className='product-img' src={glass} alt="glass" />
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum officia blanditiis.</p>
                        <h5><span>$45 / $55</span></h5>
                    </article>
                    <article className='products-article'>
                        <img className='product-img' src={pizza} alt="pizza" />
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum officia blanditiis.</p>
                        <h5><span>$45 / $55</span></h5>
                    </article>
                    <article className='products-article'>
                        <img className='product-img' src={pizza2} alt="pizza2" />
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum officia blanditiis.</p>
                        <h5><span>$45 / $55</span></h5>
                    </article>
                    <article className='products-article'>
                        <img className='product-img' src={salat} alt="salat" />
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum officia blanditiis.</p>
                        <h5><span>$45 / $55</span></h5>
                    </article>
                    <article className='products-article'>
                        <img className='product-img' src={scampi} alt="scampi" />
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum officia blanditiis.</p>
                        <h5><span>$45 / $55</span></h5>
                    </article>
                    <article className='products-article'>
                        <img className='product-img' src={spaghetti} alt="spaghetti" />
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum officia blanditiis.</p>
                        <h5><span>$45 / $55</span></h5>
                    </article>
                    <article className='products-article'>
                        <img className='product-img' src={teller} alt="teller" />
                        <h5>Lorem ipsum dolor sit.</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum officia blanditiis.</p>
                        <h5><span>$45 / $55</span></h5>
                    </article>
                </figure>
                <div className='grey-box'></div>
            </section>
    );
}
 
export default Products;