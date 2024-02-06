function status(request, response) {
  response.status(200).json({ chave: "tudo certo né?" });
}

export default status;
