function Formulario(){
    return(
        <>
        <h1 className="titulo">Formulário de contato</h1>
        <form id="contactForm">
            <label >Nome:</label>
            <input type="text" name="name" required/>
            <label>Email:</label>
            <input type="email" name="name" required/>
            <label>Telefone:</label>
            <input type="number" name="number" required/>
            <label>Mensagem:</label>
            <textarea name="message" rows="4"></textarea>
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}

export default Formulario