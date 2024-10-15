const numeroDeParcelas = document.getElementById('numero-parcelas')
const valorDaGarantia = document.getElementById('valor-garantia')
const valorDoEmprestimo = document.getElementById('valor-emprestimo')
const tipoDeGarantia = document.getElementById('garantia')
const solicitarParcela = document.getElementById('solicitar-parcela')

const valorDaParcelaApagar = document.getElementById('valor-parcela')
const valorTotal = document.getElementById('total-pagar')
const valorDoJuros = document.getElementById('taxa-juros')

const valorDoRangeGarantia = document.getElementById('valor-garantia-range')
const valorDoRangeEmprestimo = document.getElementById('valor-emprestimo-range')

// valores para calculos
const iof = 6.38;
const taxaDeJuros =  2.34;
const veiculo = {
    minimoEmprestimo:3000,
    maximoEmprestimo:100000,
    prazos:[24,36,48],
    minGarantia:5000,
    maxGarantia:3000000
}
const imovel = {
    minimoEmprestimo:30000,
    maximoEmprestimo:4500000,
    prazos:[120,180,240],
    minGarantia:50000,
    maxGarantia:100000000
}
//funções
valorDoRangeGarantia.addEventListener('input',(event)=>{
    valorDaGarantia.value = event.target.value
})

valorDoRangeEmprestimo.addEventListener('input',(event)=>{
    valorDoEmprestimo.value = event.target.value
})
console.log(tipoDeGarantia.value)

tipoDeGarantia.addEventListener('change',(event)=>{
    if(event.target.value === 'veiculo'){
        valorDaGarantia.value = '5000'
        valorDoEmprestimo.value = '3000'
        numeroDeParcelas.innerHTML = ''
        veiculo.prazos.forEach(prazo => {
            numeroDeParcelas.innerHTML += `<option>${prazo}</option>`
        });
        valorDoRangeGarantia.setAttribute('min',veiculo.minGarantia)
        valorDoRangeGarantia.setAttribute('max',veiculo.maxGarantia)
        valorDoRangeGarantia.setAttribute('value',veiculo.minGarantia)

        valorDoRangeEmprestimo.setAttribute('min',veiculo.minimoEmprestimo)
        valorDoRangeEmprestimo.setAttribute('max',veiculo.maximoEmprestimo)
        valorDoRangeEmprestimo.setAttribute('value',veiculo.minimoEmprestimo)
    }else{
        valorDaGarantia.value = '50000'
        valorDoEmprestimo.value = '30000'
        numeroDeParcelas.innerHTML = ''
        imovel.prazos.forEach(prazo => {
            numeroDeParcelas.innerHTML += `<option>${prazo}</option>`
        });
        valorDoRangeGarantia.setAttribute('min',imovel.minGarantia)
        valorDoRangeGarantia.setAttribute('max',imovel.maxGarantia)

        valorDoRangeEmprestimo.setAttribute('min',imovel.minimoEmprestimo)
        valorDoRangeEmprestimo.setAttribute('max',imovel.maximoEmprestimo)
    }
})

solicitarParcela.addEventListener('click', ()=>{
    const valorTotalAPagar = ((iof / 100) + (taxaDeJuros / 100) + (numeroDeParcelas.value / 1000) + 1) * valorDoEmprestimo.value

    const valorDaParcela = valorTotalAPagar / numeroDeParcelas.value

    valorDaParcelaApagar.innerText = valorDaParcela.toLocaleString('pt-BR', { style: 'currency',currency: 'BRL' }).substring(3)

    valorTotal.innerText = valorTotalAPagar.toLocaleString('pt-BR', { style: 'currency',currency: 'BRL' })
})

// formulas
// const valorTotalAPagar = ((iof / 100) + (taxaDeJuros / 100) + (prazo / 1000) + 1) * valorDoEmprestimo

// const valorDaParcela = valorTotalAPagar / prazo
