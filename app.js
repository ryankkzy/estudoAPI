import express from "express";

const servidor = express();
servidor.use(express.json());


servidor.get('/helloworld' ,(req,resp) => {

    resp.send('oi meu cria =)')
})



servidor.get('/mensagem/boasvindas' , (req,resp) => {
    resp.send('Ola seja bem vindo(a) !!!')
})



servidor.get('/v2/mensagem/boasvindas' , (req,resp) => {
    resp.send('Que bom que voce está aqui! =)')
})




servidor.get('/mensagem/ocupado' , (req,resp) => {
    resp.send('Estou ocupado vendo o jogo do corinthians...')
})




servidor.get('/mensagem/ocupado/recado' , (req,resp) => {
    resp.send('Estou ocupado manda msg que dps eu vejo...')
})


servidor.get('/calculadora/somar/:n1/:n2' , (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;

    resp.send('A soma é ' + soma)
})


servidor.get('/calcualdora/subtrair/:n1/:n2' , (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let sub = n1 - n2

    resp.send('O resultado é ' + sub)
})


servidor.get('/calcualdora/multiplicar/:n1/:n2' , (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let multi = n1 * n2

    resp.send('O resultado é ' + multi)
})


servidor.get('/calcualdora/dividir/:n1/:n2' , (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let divisao = n1 / n2

    resp.send('O resultado da divisao é ' + divisao)
})



servidor.get('/calculadora/somar2' , (req,resp) => {
    let n1 = Number(req.query.num1);
    let n2 = Number(req.query.num2);
    let soma = n1 + n2;

    resp.send('A soma é ' + soma)
})



servidor.get('/mensagem/ola' , (req,resp) => {
    let nomePessoa = req.query.nome ?? 'parça';

    resp.send('Olá ' + nomePessoa)
})



servidor.post('/media' , (req,resp) => {
    let num1 = req.body.nota1;
    let num2 = req.body.nota2;
    let num3 = req.body.nota3;

    let media = (num1 + num2 + num3) / 3

    resp.send('A media é ' + media)
})




servidor.post('/dobros' , (req, resp) => {
    let nums = req.body.numeros

    let nums2 = []

    for(let i = 0; i < nums.length; i++) {
        nums2[i] = nums[i] * 2
    }

    resp.send('Os dobros do numeros são: ' + nums2)
})







servidor.listen(
    5001, 
    () => console.log('----> API subiu com exito!'));