const dataEvento = new Date("Dec 20, 2024 20:00:00");
const TimeStampDOEvento = dataEvento.getTime();
const ContaHoras = setInterval(function() {
    const agora = new Date();
    const TimeStampAtual = agora.getTime();
    const distanciaAteOEvento = TimeStampDOEvento - TimeStampAtual;
    const diaEmMS = 86400000;
    const horaEmMS = 3600000;
    const minutoEmMS = 60000;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
    const HorasAteOEvento = Math.floor(distanciaAteOEvento % diaEmMS / horaEmMS);
    const minutosateOEvento = Math.floor(distanciaAteOEvento % horaEmMS / minutoEmMS);
    const segundoAteoEvento = Math.floor(distanciaAteOEvento % minutoEmMS / 1000);
    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${HorasAteOEvento}h ${minutosateOEvento}m ${segundoAteoEvento}s `;
    if (distanciaAteOEvento < 0) {
        clearInterval(ContaHoras);
        document.getElementById("contador").innerHTML = "Ja acabou";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
