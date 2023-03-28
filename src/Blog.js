export default function Blog(props) {
return (
    <section className="card">
    <h1 className="title">{props.item.title}</h1>  
    <h1 className="category">{props.item.category}</h1>
    <p className="date">{props.item.date}</p>
    <h1 className="content">{props.item.content}</h1>
    </section>
)
}