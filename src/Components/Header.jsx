export default function Header({ navLinks }) {
    console.log(navLinks);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img width={60} src="/dc-logo.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                {
                                    navLinks.map(curlink => (
                                        <li className="nav-item" key={curlink.id}>
                                            <a className={`nav-link ${curlink.active ? "active" : ""}`} aria-current="page" href={curlink.src}>
                                                {curlink.title}
                                            </a>
                                        </li>
                                        ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}



