export function RepositoryItem(props) {
    const {name, description, link} = props.repository; //desestruturação do objeto dentro das props
    return (
        <li>
            <strong>{name ?? 'default'}</strong>
            <p>{description}</p>
            <a href={link}>Acessar repositório</a>
        </li>
    );
}