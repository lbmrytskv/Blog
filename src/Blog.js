export default function Blog(props) {
return (
    <div>
    <h1>{props.item.title}</h1>  
    <h1>{props.item.category}</h1>
    <h1>{props.item.date}</h1>
    <h1>{props.item.content}</h1>
    </div>
)
}