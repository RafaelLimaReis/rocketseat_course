interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    const {name, description, html_url} = props.repository; //desestruturação do objeto dentro das props
    return (
        <li>
            <strong>{name ?? 'default'}</strong>
            <p>{description}</p>
            <a href={html_url}>Acessar repositório</a>
        </li>
    );
}