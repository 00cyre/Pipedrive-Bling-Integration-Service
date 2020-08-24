var jsonxml = require('jsontoxml');

const urlBuilder = (path) => {
    return process.env.BLING_BASE_URL + path + `?apikey=${process.env.BLING_API_KEY}&xml=`
}
const reqBuilder = (item) => {
    return '<?xml version="1.0" encoding="UTF-8"?>' + jsonxml({
        "pedido": {
            "cliente": {
                "nome": item.title
            },
            "itens":
            {
                item:
                {
                    "codigo": item.id,
                    "descricao": item.title,
                    "un": "Pç",
                    "qtde": "1",
                    "vlr_unit": item.value
                },
            },
            "data": item.first_won_time
        }
    })
}
module.exports = { urlBuilder, reqBuilder }