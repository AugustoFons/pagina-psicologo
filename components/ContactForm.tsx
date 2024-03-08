'use client'

import { useForm } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("mwkzqwqo");
    if (state.succeeded) {
        return <p className="txtctc mt-3 font-extrabold">¡Gracias por contactarme!</p>;
    }

    return (
        <form id="form" className="mb-5" onSubmit={handleSubmit}>
            <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group font-form">
                    <label>Nombre</label>
                    <input type="text" className="form-control" placeholder="Ingrese su nombre" id="name" name="name" required />
                </div>
            </div>
            <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group font-form">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Ingrese su Email" id="email" name="email" required />
                </div>
            </div>
            <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group font-form ">
                    <label>Número de teléfono</label>
                    <input type="tel" className="form-control" placeholder="Ingrese su número de teléfono" id="phone" name="phone" />
                </div>
            </div>
            <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group  font-form">
                    <label>Mensaje</label>
                    <textarea rows={4} className="form-control" placeholder="Ingrese su mensaje" id="message" name="message" required ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-xs-12">
                    <button type="submit" disabled={state.submitting} className="btn btn-success btn-lg mt-3">Enviar</button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm