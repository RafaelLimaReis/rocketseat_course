import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => { // função de efeito de chamada ou nesse caso quando o componente é renderizado
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {/* conceito de componente */}
                { repositories.map(repository => {
                    return <RepositoryItem key={repository.id} repository={repository}/>
                })}
            </ul>
        </section>
    );
}