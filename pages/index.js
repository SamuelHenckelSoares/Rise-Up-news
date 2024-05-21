
import React, { useState } from 'react';

function App() {
    const [exibirPopupSim, setExibirPopupSim] = useState(false);
    const [exibirPopupNao, setExibirPopupNao] = useState(false);

    const handleSimClick = () => {
        setExibirPopupSim(true);
    };

    const handleNaoClick = () => {
        setExibirPopupNao(true);
    };

    const handleFecharPopupSim = () => {
        setExibirPopupSim(false);
    };

    const handleFecharPopupNao = () => {
        setExibirPopupNao(false);
    };

    return (
        <div >
            <h1 align="center" >Vamos estudar o curso.dev?</h1>
            <div align="center">
                <button onClick={handleSimClick}>Sim</button>
                <button onClick={handleNaoClick}>Não</button>
            </div>

            {exibirPopupSim && (
                <div>
                    <h2>Muito bem, é us guri!</h2>
                    <button onClick={handleFecharPopupSim}>Fechar</button>
                </div>
            )}

            {exibirPopupNao && (
                <div>
                    <h2>Tá ratiando Seu vacilão!</h2>
                    <button onClick={handleFecharPopupNao}>Fechar</button>
                </div>
            )}
        </div>
    );
}

export default App;
