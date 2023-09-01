
import { connection } from './connection.js';

export async function listarTodos() {
    let comando= `
        select * from tb_cliente
    `
    let [ dados ] = await connection.query(comando)
    return dados;
}

export async function inserir(cliente){
    let comando = `
        insert into tb_cliente (nm_cliente, ds_telefone, ds_email, ds_cpf, ds_cnh)
        values (?, ?, ?, ?, ?)
    `

    const info = await connection.query(comando, [
        cliente.nome,
        cliente.telefone,
        cliente.email,
        cliente.cpf,
        cliente.cnh
    ]);

    cliente.id = info.insertId
    return info
}

export async function deletar(id){
    let comando = `
    delete from tb_cliente where id_cliente = ?
    `
    

    const info= await connection.query(comando, [id])
    const infoar= info.AffectedRows
    return infoar
}
