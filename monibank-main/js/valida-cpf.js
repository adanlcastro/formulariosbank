export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    validaNumerosRepetidos(cpf);

    console.log (validaNumerosRepetidos(cpf))
}

function validaNumerosRepetidos (cpf) {
    const numerosRepetidos = [
        "11111111111"
    ]

   return numerosRepetidos.includes(cpf);
}