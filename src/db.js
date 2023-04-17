/* ----------- Configuração da conexão ----------- */
const mysql = require("mysql2/promise")
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection


const connection = await mysql.createConnection({
    host: 'localhost',// Nome da conexão do mysql
    port: 3306,
    user: 'root',
    password: '1123',// Senha da conexao
    database: 'atvi2'// Nome do banco de dados
})

console.log('Conectou ao MySQL')
global.connection = connection
return global.connection // Se a conexão foi estabelecida o global.connection assume a conexão
}
/* ------------ Iserção de dados ----------------- */

async function insereDadosEndereco(endereco){
    const conexao = await connect()
    const sql = "insert into endereco (end_codigo, end_rua_avenida, end_numero_casa, end_bairro, end_cidade, end_estado) values (?, ?, ?, ?, ?, ?);"
    const values = [endereco.end_codigo, endereco.end_rua_avenida, endereco.end_numero_casa, endereco.end_bairro, endereco.end_cidade, endereco.end_estado]
    return await conexao.query(sql, values)
}

async function insereDadosUsuario(usuario){
    const conexao = await connect()
    const sql = "insert into usuario (us_codigo, end_codigo, us_nome, us_ddd_telefone, us_numero_telefone) values (?, ?, ?, ?, ?);"
    const values = [usuario.us_codigo, usuario.end_codigo, usuario.us_nome, usuario.us_ddd_telefone, usuario.us_numero_telefone]
    return await conexao.query(sql, values)
}

/* ------------ Alteração dos dados -------------- */

async function alteraDadosEndereco(end_codigo, endereco){
    const conexao = await connect()
    const sql = "update endereco set end_rua_avenida = ?, end_numero_casa = ?, end_bairro = ?, end_cidade = ?, end_estado = ? where end_codigo = ?;"
    const values = [endereco.end_rua_avenida, endereco.end_numero_casa, endereco.end_bairro, endereco.end_cidade, endereco.end_estado, end_codigo]
    return await conexao.query(sql, values)
}

async function alteraDadosUsuario(us_codigo, usuario){
    const conexao = await connect()
    const sql = "update usuario set end_codigo = ?, us_nome = ?, us_ddd_telefone = ?, us_numero_telefone = ? where us_codigo = ?;"
    const values = [usuario.end_codigo, usuario.us_nome, usuario.us_ddd_telefone, usuario.us_numero_telefone, us_codigo]
    return await conexao.query(sql, values)
}

/* --------------- Deletar tabela ---------------- */

async function deletarDadosEndereco(end_codigo){
    const conexao = await connect()
    const sql = "delete from endereco where end_codigo = ?;"
    const values = [end_codigo]
    return await conexao.query(sql, values)
}

async function deletarDadosUsuario(us_codigo){
    const conexao = await connect()
    const sql = "delete from usuario where us_codigo = ?;"
    const values = [us_codigo]
    return await conexao.query(sql, values)
}

/* ------------ Consultas das tabelas ------------ */

async function consultarEndereco(){
    const conexao = await connect()
    const [rows] = await conexao.query("select * from endereco;")
    return rows
}

async function consultarUsuario(){
    const conexao = await connect()
    const [rows] = await conexao.query("select * from usuario;")
    return rows
}

module.exports = {insereDadosEndereco, insereDadosUsuario, consultarEndereco, consultarUsuario, alteraDadosEndereco, alteraDadosUsuario, deletarDadosEndereco, deletarDadosUsuario}