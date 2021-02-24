import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import ButtonGeneric from "../../../components/ButtonGeneric";
import api from '../../../../services/api'
import { Container, Header } from './style';
import WhiteCardDash from '../../../components/WhiteCardDashboard';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';


const Deposit: React.FC = () => {

    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [valuer, setValuer] = useState('')

    const history = useHistory()

    function deposit (event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const postData = {
            conta: 676,
            contaDestino: 'jeque',
            data: date,
            descricao: description,
            login: 'jeque',
            valor: valuer,
            planoConta: 838
        }

        console.log(postData);

        try {
            api.post(`lancamentos`, postData, {headers: {Authorization: localStorage.getItem('@tokenApp')}}).then(
                response => {
                    console.log(response);
                    if (response.status === 200) {
                        history.push('/dashboard')
                    } else {
                        console.log("deu error");
                    }
                }
            )
        } catch (e) {
            alert('algo deu errado')
        }
    }

  return (
    
    <Container>
      <Header>
        <Link to="/dashboard"> <FiChevronLeft size={30}/>Voltar</Link>
      </Header>
      <WhiteCardDash _maxWidth="100%">
          <div className="form-deposit">
            <form onSubmit={deposit}>
                <h3>Realize seu depósito</h3>
                <input value={date} onChange={ e => setDate( e.target.value) } type="date" placeholder="Data"></input>
                <input value={description} onChange={ e => setDescription( e.target.value) } type="text" placeholder="Descrição"></input>
                <input value={valuer} onChange={ e => setValuer( e.target.value) } type="number" placeholder="Valor do deposito"></input>
                <ButtonGeneric 
                title="Realizar deposito agora" 
                type="submit" 
                _colorHover="#FFFFFF"
                icon={FiChevronRight}
                _bgHover="#3da131" />
            </form>
          </div>
      </WhiteCardDash>
    </Container>
  
    );
}

export default Deposit;