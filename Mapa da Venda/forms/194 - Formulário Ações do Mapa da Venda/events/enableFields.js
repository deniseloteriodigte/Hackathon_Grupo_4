function enableFields(form) {
	var activity = getValue('WKNumState');
	if (activity >= 0) {
		form.setEnabled('codCliente', false);
		form.setEnabled('razaoSocial', false);
		form.setEnabled('nomeFantasia', false);
		form.setEnabled('cnpj', false);
		form.setEnabled('atividade', false);
		form.setEnabled('logradouro', false);
		form.setEnabled('numero', false);
		form.setEnabled('bairro', false);
		form.setEnabled('CEP', false);
		form.setEnabled('cidade', false);
		form.setEnabled('estado', false);
		form.setEnabled('latitude', false);
		form.setEnabled('longitude', false);
		form.setEnabled('tpCliente', false);
		form.setEnabled('vlVendas', false);
		form.setEnabled('cnae', false);
		form.setEnabled('cnaeDescricao', false);
		form.setEnabled('codRep', false);
		form.setEnabled('nmRep', false);
	}
}