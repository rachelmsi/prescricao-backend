const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PrescricaoSchema = new Schema({

    paciente: {
    	nome: {type: String},
    	email: {type: String},
    	data_nascimento: {type: Date},
    	genero: {type: String},
    	prontuario: {type: String},
    	opcao_contrato:{
    		empresa: {type: String},
    		contrato: {type: String}
    	}
    },
    diagnostico: [{type: String, required: true}],
    orientacoes: [{type: String}],
    sinais_alarme: [{type: String}],
    medicamento: [{
    	descricao: {type: String},
    	instrucoes_uso: {type: String},
    	receituario_especial: {type: Boolean}
    }],
    atestado: {
    	afastamento: {type: Boolean},
    	quantidade_dias: {type: Number},
    	exibir_cid: {type: String},
    	cid10: {type: String}
    },
    solicitacao_exame:{
    	solicitacao: {type: String},
    	descricao: {type: String}
    },
    destino: {type: String},
    acionamento: {
    	data_acionamento: {type: Date},
    	periodo: {type: String},
    	dia_semana: {type: String},
    	hora_acionamento: {type: String},
    	passagem: {type: String},
    	mes_atendimento: {type: String}
    },
    medico: {
    	login: {type: String},
    	crm: {type: String},
    	cpf: {type: String},
    	assinatura_digital: {type: String}
    },
    documentos:[{
    	link_assinatura: {type: String},
    	tipo_documento: {type: String}
    }]

}, { collection: 'prescricao' });

module.exports = mongoose.model('Prescricao', PrescricaoSchema);