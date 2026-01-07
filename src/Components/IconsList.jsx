export default function IconsList({ iconsArray }) {
    return (
        <section className="bg-primary text-light py-5">
            <div className="container">
                <div className="row row-cols-2 row-cols-md-5">
                    {
                        iconsArray.map(icona =>
                            <div className="col" key={icona.id}>
                                <div className="d-flex gap-3 align-items-center">
                                    <img width="20%" src={icona.imgSrc} alt="" />
                                    <h7>{icona.title}</h7>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    )
}






