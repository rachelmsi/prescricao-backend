const Prescricao = require('../models/prescricao-model');

//Simple version, without validation or sanitation
exports.test = function(req, res){
	res.send('Greeting from the Test Controller!');
};

//criar prescricao
exports.prescricao_criar = function(req, res, next){
	
	let prescricao = new Prescricao({
			paciente: {
	              nome: req.body.nome,
	              email: req.body.email,
	              data_nascimento: req.body.data_nascimento,
	              genero: req.body.genero,
	              prontuario: req.body.prontuario,
	              opcao_contrato: {
	                  empresa: req.body.empresa,
	                  contrato: req.body.contrato
	              }
	          },
	          diagnostico: req.body.diagnostico,
	          orientacoes: req.body.orientacoes,
	          sinais_alarme: req.body.sinais_alarme,
	          medicamento:
	              {
	                  descricao: req.body.medicamento_descricao,
	                  instrucoes_uso: req.body.instrucoes_uso,
	                  receituario_especial: req.body.receituario_especial
	              }
	         ,
	          atestado: {
	              afastamento: req.body.afastamento,
	              quantidade_dias: req.body.quantidade_dias,
	              exibir_cid: req.body.exibir_cid,
	              cid10: req.body.cid10
	          },
	        solicitacao_exame: {
	              solicitacao: req.body.solicitacao,
	              descricao: req.body.descricao_solicitacao
	          },
	        acionamento: {
	              data_acionamento: req.body.data_acionamento,
	              periodo: req.body.periodo,
	              dia_semana: req.body.dia_semana, 
	              hora_acionamento: req.body.hora_acionamento,
	              passagem: req.body.passagem,
	              mes_atendimento: req.body.mes_atendimento
	          },
	          medico: {
	              login: req.body.login_medico,
	              crm: req.body.crm,
	              cpf: req.body.cpf,
	              assinatura_digital: req.body.assinatura_digital
	          },
	          documentos:[{
	              link_assinatura: req.body.link_assinatura,
	              tipo_documento: req.body.tipo_documento
	          }]

		}

	);

	prescricao.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Prescricao Created successfully')
    });

}

//Ler prescricao
exports.prescricao_detalhes = function (req, res, next) {

	Prescricao.findById(req.params.id, function (err, prescricao){
		if (err) return next(err);
		res.send(prescricao)
	});
}

//Update prescricao
exports.prescricao_update = function (req, res, next) {
    Prescricao.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function (err, prescricao) {
        if (err) return next(err);
        res.send('Prescricao udpated.');
    });
};


//Delete prescricao
exports.prescricao_delete = function (req, res,next) {
    Prescricao.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};