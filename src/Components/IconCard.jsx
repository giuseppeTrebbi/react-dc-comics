export default function IconCard() {
    return (
        <div className="card" >
            <img src={indirizzo} className="card-img-top" style={ { height: "210px", objectFit: "cover" } } />
            <div className="card-body">
                <h5 className="card-title">{titolo}</h5>
            </div>
        </div>
    )
}



