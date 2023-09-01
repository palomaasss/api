import  connection  from './connection.js';

export async function inserir(veiculo){
    let comando= `
        insert into tb_veiculo( nm_modelo, ds_marca, ds_ano, ds_placa)
        values( ?, ?, ?, ?)
    `

    const info = await connection.query( comando, [
        veiculo.modelo,
        veiculo.marca,
        veiculo.ano,
        veiculo.placa
    ]);

    info.id = info.insertId
    return info
}

export async function listarTodos(){
    const comando = `select * from tb_veiculo`

    let [dados] = await connection.query(comando)
    return dados;
}

export async function Deletar(id){
const comando = `delete from tb_veiculo where id_veiculo = ? ` 

const [dados] = await connection.query(comando, [id])
return dados;
 

} 
