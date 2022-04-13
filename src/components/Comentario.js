import React from 'react';
import './Comentario.css';

const Comentario = () => (
    <>
        <div className='container'>
            <div className="row my-3">
                <div className='col-12'>
                    <label>Nome do produto:&nbsp;</label>
                    <input type="text" className='form-text' name='nomeproduto'></input>
                </div>
            </div>

            <div className="row my-3">
                <div className='col-12'>
                    <label>Tamanho:&nbsp;</label>
                    <select>
                        <option value='1'>
                            NÃO SE APLICA
                        </option>
                        <option value='2'>
                            P
                        </option>
                        <option value='3'>
                            M
                        </option>
                        <option value='4'>
                            G
                        </option>
                        <option value='5'>
                            GG
                        </option>
                        <option value='6'>
                            XG
                        </option>
                        <option value='7'>
                            ÚNICO
                        </option>
                    </select>
                </div>
            </div>

            <div className="row my-3">
                <div className='col-12'>
                    <label>Em qual site foi adquirido?&nbsp;</label>
                    <select>
                        <option value='1'>
                            MERCADO DIBRE
                        </option>
                        <option value='2'>
                            AMAZONAS
                        </option>
                        <option value='3'>
                            SHOPPII
                        </option>
                        <option value='4'>
                            WIXH
                        </option>
                        <option value='5'>
                            CENTAUROS
                        </option>
                        <option value='6'>
                            MEGA PREISTEIXO
                        </option>
                        <option value='7'>
                            LOJA DO TONHÃO
                        </option>
                    </select>
                </div>
            </div>

            <div className='row my-3'>
                <div className='col-12'>
                    <label>Qual foi sua experiência com o produto?&nbsp;</label>
                    <input class="avaliacao" type="text"></input>
                </div>
            </div>

            <div className='row my-3'>
                <div className='col-12'>
                    <button className='btn btn-success'>ENVIAR</button>
                </div>
            </div>

        </div>

    </>
);

export default Comentario;