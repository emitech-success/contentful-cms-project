/* eslint-disable react/no-unescaped-entities */
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>I'm baby hoodie direct trade tumblr, cardigan vaporware pour-over shaman keffiyeh bruh four dollar toast microdosing. 
            Hammock tote bag DIY forage keytar craft beer pickled whatever flannel plaid wayfarers shabby chic. 
            Before they sold out gochujang freegan activated charcoal marfa food truck kinfolk tbh glossier air plant viral venmo. 
            Pour-over banh mi wayfarers church-key offal.</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero" className='img'/>
        </div>
      </div>
    </section>
  )
}
export default Hero