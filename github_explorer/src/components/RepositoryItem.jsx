export function RepositoryItem(props) {
    const {name, description, html_url} = props.repository; //desestruturação do objeto dentro das props
    return (
        <li>
            <strong>{name ?? 'default'}</strong>
            <p>{description}</p>
            <a href={html_url}>Acessar repositório</a>
        </li>
    );
}