import './Footer.css'

const Footer = (props) => {

    const currentYear = new Date().getFullYear();
    return <footer className='footer'>
        <p>Copyright &copy; {currentYear}</p>
    </footer>

}

export default Footer;