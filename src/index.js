(async ()=>{
    const bancoDados = require("./db")
    console.log("Conexão iniciada")

    /* ------------ Inserir dados --------------- */
    /* console.log("Inserire dados na tabela endereço")
    const insereEndereco = await bancoDados.insereDadosEndereco({
        end_codigo: 1,//Mudar o valor dessa propriedade para cadastrar mais de um endereco
        end_rua_avenida: "Teste1",// Mudar o valor dessa propriedade para o nome da rua ou avenida do endereço
        end_numero_casa: "Teste1",// Mudar o valor dessa propriedade para o número do casa do endereço
        end_bairro: "Teste1",// Mudar o valor dessa propriedade para o bairro do endereço
        end_cidade: "Teste1",// Mudar o valor dessa propriedade para a cidade do endereço
        end_estado: "Teste1"// Mudar o valor dessa propriedade para o estado do endereço
    })
    
    console.log("Insere dados na tabela usuário")
    const insereUsuario = await bancoDados.insereDadosUsuario({
        us_codigo: 1,// Comentar esse campo caso queira adicionar mais de um usuário
        end_codigo: 1,// Mudar o valor dessa propriedade para a chave estrangeira do endereço do usuário
        us_nome: "Teste1",// Mudar o valor dessa propriedade para o nome do usuário
        us_ddd_telefone: "Teste1",// Mudar o valor dessa propriedade para o ddd do usuário
        us_numero_telefone: "Teste1"// Mudar o valor dessa propriedade para o número de telefone do usuario
    }) */
    
    /* -------- Consultar dados ------------ */
    console.log("Consultar endereço")
    const verEndereco = await bancoDados.consultarEndereco()
    console.log(verEndereco)

    console.log("Consultar usuário")
    const verUsuario = await bancoDados.consultarUsuario()
    console.log(verUsuario)

    /* ----------- Alterar dados ------------- */
    console.log("Alterar endereço")
    const alteraEndereco = await bancoDados.alteraDadosEndereco(1,
        {
        end_rua_avenida: "Teste2",// Mudar o valor dessa propriedade para o nova rua/avenida
        end_numero_casa: "Teste2",// Mudar o valor dessa propriedade para o novo número da casa
        end_bairro: "Teste2",// Mudar o valor dessa propriedade para o novo bairro
        end_cidade: "Teste2",// Mudar o valor dessa propriedade pra o nova  cidade
        end_estado: "Teste2"// Mudar o valor dessa propriedade para o novo estado
    })
    console.log("Consultar endereço, após a alteração")
    const enderecoAlterado = await bancoDados.consultarEndereco()
    console.log(enderecoAlterado)

    console.log("Alterar usuário")
    const alteraUsuario = await bancoDados.alteraDadosUsuario(1,
        {
        end_codigo: 1,// Mudar o valor dessa propriedade para a chave estrangeira do endereço do usuário
        us_nome: "Teste2",// Mudar o valor dessa propriedade para o novo nome do usuário
        us_ddd_telefone: "Teste2",// Mudar o valor dessa propriedade para o novo ddd
        us_numero_telefone: "Teste2"// Mudar o valor dessa propriedade pra o novo número de telefone
    })
    console.log("Consultar usuário, após a alteração")
    const usuarioAlterado = await bancoDados.consultarUsuario()
    console.log(usuarioAlterado)

    /* ---------- Deletar Dados ------------- */
    console.log("Apagar Usuário")
    const apagaUsuario = await bancoDados.deletarDadosUsuario(1)
    console.log("Consultar usuário, depois do delete")
    const usuarioVazio = await bancoDados.consultarUsuario()
    console.log(usuarioVazio)
    
    console.log("Apagar endereço")
    const apagaEndereco = await bancoDados.deletarDadosEndereco(1)
    console.log("Consultar endereço, depois do delete")
    const enderecoVazio = await bancoDados.consultarEndereco()
    console.log(enderecoVazio)
})()
