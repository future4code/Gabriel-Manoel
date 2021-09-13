import React from 'react';
import'./Etapa1.css';

export default class Etapa1 extends React.Component {
    render() {
        return (
            <div className="etapa1">
                <h3>ETAPA 1 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                <form>
                    <label className='label_form_etapa1'>5. Qual curso?</label>
                    <input />
                    <label className='label_form_etapa1'>6. Qual a unidade de ensino?</label>
                    <input />
                    <label className='label_form_etapa1'>3. Qual seu email?</label>
                    <input />
                    <label className='label_form_etapa1'>4. Qual a sua escolaridade?</label>
                   <select>
                       <option>Ensino médio incompleto</option>
                       <option>Ensino médio completo</option>
                       <option>Ensino superior incompleto</option>
                       <option>Ensino superior completo</option>
                   </select>
                </form>
                <button onClick={this.props.cadastrado}>Próxima etapa</button>
            </div>
            
            
        
            );
    }
}


