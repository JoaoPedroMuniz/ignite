// props = objeto que vai ser: { author:"Name", content=" lorem ipsum "}

//Sempre ter um elemento por volta(ex:div) se tiver dois elementos um em baixo do outro(ex:strong e p)

//Sempre colocar entre chaves quando for colocar uma propriedade de um objeto, como por exemplo props.author, coloque entre {} SEMPRE!

export function Post(props){
    return(
        <div>
            <strong>{props.author}</strong> 
            <p>{props.content}</p>
        </div>
    )
}