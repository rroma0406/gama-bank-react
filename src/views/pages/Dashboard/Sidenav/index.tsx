import React from 'react';
import {Link} from "react-router-dom";
import img from '../../../../assets/logo-gama.png'
import pix from '../../../../assets/Pix.png'
import {Container} from './style';

const SideNav: React.FC = () => {
    return (
        <>
            <Container>
                <img src={img} className="logo-gama-bank" alt="logo-gama"/>
                <div className="menu-option">
                    <Link className="link" to="/dashboard/deposit">
                        <img className="pix" src={pix} alt="dep"/>
                        <p>Depositos</p>
                    </Link>
                </div>
                <div className="menu-option">
                    <Link className="link" to="/dashboard/plans">
                        <img className="pix" src={pix} alt="plan"/>
                        <p>Planos</p>
                    </Link>

                </div>
                <div className="menu-option">
                    <Link to="/dashboard/payments">
                        <img className="pix" src={pix} alt="payment"/>
                        <p>Pagamentos</p>
                    </Link>
                </div>
                <div className="menu-option">
                    <Link to="/dashboard/transfer">
                        <img className="pix" src={pix} alt="transaction"/>
                        <p>Transações</p>
                    </Link>

                </div>
            </Container>

        </>
    )
}

export default SideNav;