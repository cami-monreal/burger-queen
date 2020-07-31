import  React from 'react';

const Request = () => (
        <React.Fragment>
            <div className = "request-resume" >
                <div className="buttons-client">
                    <select className="select-desk-number" name="select-desk">
                        <option value="valor1">Mesa 1</option> 
                        <option value="valor2">Mesa 2</option>
                        <option value="valor3">Mesa 3</option>
                        <option value="valor4">Mesa 4</option>
                        <option value="valor5">Mesa 5</option>
                    </select>
                    <input className="input-client-name" type="string" id="clientName" placeholder="Nome do cliente"/>
                </div>
                <input type="button" className='button-send-to-kitchen'/>
            </div>
        </React.Fragment>         
);

export default Request;