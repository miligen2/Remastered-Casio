    type Props = {
    id:number,
    name:string,
    price:number
};



export default function Card ({id, name, price}:Props) {
    return(
        <div key={id} className="card">
            <div className="image">
                <span className="text">This is a chair.</span>
            </div>
            <span className="title">{name}</span>
            <span className="price">${price}</span>
        </div>
    )


}

