import ComicCard from "./ComicCard";


export default function ComicsList({ comicsArray }) {
    return (
    <section>
        <div className="container">
            <h2>Current Series</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-3">
                {
                    comicsArray.map(comic => (
                        <div key={comic.id} className="col">
                            <ComicCard indirizzo={comic.thumb} titolo={comic.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
);
}