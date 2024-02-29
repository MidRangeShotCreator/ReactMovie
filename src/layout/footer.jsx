function Footer() {
    return <footer className="page-footer indigo accent-1">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Мельник В.Г. (ТКБО-02-22)
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}

export {Footer};