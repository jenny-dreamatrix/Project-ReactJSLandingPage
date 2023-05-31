import './Header.css'

const Header = () => {
    return (  
        <header>
            <h3>Hello There</h3>
            <h1>We Are Glint</h1>
            <div className="line-horizontal"></div>
            <p className="we-are-glint-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum sapiente, ipsam at, dolores iste nam tempore reprehenderit inventore, voluptas quis perspiciatis fuga quae fugit maiores quod enim distinctio culpa veniam eos? Perspiciatis odit quaerat sunt dolorum tempora autem, ullam debitis, similique illo voluptatum, odio numquam veritatis est natus voluptatibus non. Dicta adipisci ad, nostrum veniam quasi asperiores pariatur ipsam soluta ab ducimus provident. Laborum, maxime dolor, tempore cum doloribus quod sunt ut facilis mollitia eaque, eum deserunt.</p>
            <section className="numbers-sec">
                <figure>
                    <h1>127</h1>
                    <p>Award Received</p>
                </figure>
                <div className="line-vertical"></div>
                <figure>
                    <h1>1505</h1>
                    <p>Cups of Coffee</p>
                </figure>
                <div className="line-vertical"></div>
                <figure>
                    <h1>109</h1>
                    <p>Projects Completed</p>
                </figure>
                <div className="line-vertical"></div>
                <figure>
                    <h1>102</h1>
                    <p>Happy Clients</p>
                </figure>
            </section>
        </header>
    );
}
 
export default Header;