import { Container } from "./styles";

import icomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
    return (
        <Container>
            <div className="">
                <header>
                    <p>Entradas</p>
                    <img src={icomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div className="">
                <header>
                    <p>Entradas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$1000,00</strong>
            </div>
        </Container>
    );
}