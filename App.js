const { useState, useEffect } = React;

const predefinedTownsList = [
    { name: 'UR 1' }, { name: 'UR 2' }, { name: 'UR 3' }, { name: 'UR 4' }, { name: 'UR 5' }, { name: 'UR 6' }, { name: 'UR 7' }, { name: 'UR 8' }, { name: 'UR 9' },
    { name: 'USE 1' }, { name: 'USE 2' }, { name: 'Oficina Principal' },
    { name: 'SUC 1' }, { name: 'SUC 2' }, { name: 'SUC 3' }, { name: 'SUC 4' }, { name: 'SUC 5' }, { name: 'SUC 6' }, { name: 'SUC 7' }, { name: 'SUC 8' }, { name: 'SUC 9' }, { name: 'SUC 10' }, { name: 'SUC 11' }, { name: 'SUC 12' }, { name: 'SUC 13' }, { name: 'SUC 14' }, { name: 'SUC 15' }, { name: 'SUC 16' }, { name: 'SUC 17' }, { name: 'SUC 18' }, { name: 'SUC 19' }, { name: 'SUC 20' }, { name: 'SUC 21' }, { name: 'SUC 22' },
    { name: 'AYORA UD/OT' }, { name: 'ENGUERA UD/OT' }, { name: 'LA FONT DE LA FIGUERA OT' }, { name: 'MOIXENT-MOGENTE UD/OT' },
    { name: 'ALBAIDA UD/OT' }, { name: 'BENIGANIM UD/OT' }, { name: 'BOCAIRENT OT' }, { name: 'ONTINYENT UD/OT' }, { name: 'AIELO DE MALFERIT OT' }, { name: 'ALCUDIA DE CRESPINS OT' }, { name: 'ALGEMESI UD/OT' }, { name: 'CANALS UD/OT' }, { name: 'CARCAIXENT UD/OT' }, { name: "L'OLLERIA OT" }, { name: 'XATIVA UD/OT' },
    { name: 'ALCASSER UD/OT' }, { name: 'ALGINET UD/OT' }, { name: 'CARLET UD/OT' }, { name: 'CATADAU OT' }, { name: 'PICASSENT UD/OT' },
    { name: 'ALBAL OT' }, { name: 'ALFAFAR-BENETUSSER UD/OT' }, { name: 'CATARROJA UD/OT S' }, { name: 'PAIPORTA UD/OT S' }, { name: 'PICANYA OT' },
    { name: 'ALMUSSAFES OT' }, { name: 'BENIFAIO UD/OT' }, { name: 'BENIPARRELL OT' }, { name: 'SILLA UD/OT' }, { name: 'SOLLANA OT' }, { name: 'SUECA UD/OT' },
    { name: 'CHELVA UD/OT' }, { name: 'CHESTE UD/OT' }, { name: 'CHIVA OT' }, { name: 'LLIRIA UD/OT' }, { name: 'VILLAR DEL ARZOBISPO OT' },
    { name: 'ALMOINES CSR' }, { name: 'GANDIA UD/OT S' }, { name: 'OLIVA UD/OT' }, { name: 'VILLALONGA OT' }, { name: 'GRAO DE GANDIA OT' },
    { name: 'CULLERA UD/OT S' }, { name: 'TAVERNES DE LA VALLDIGNA UD/OT' }, { name: 'XERACO OT' },
    { name: 'ALCIRA UD/OT' }, { name: 'GUADASSUAR OT' },
    { name: 'MANISES UD/OT' }, { name: 'PATERNA SUC 1 FUENTE DEL JARRO OT' }, { name: 'PATERNA SUC 2 LA CAÑADA OT' }, { name: 'PATERNA UD/OT S' }, { name: 'QUART DE POBLET UD/OT' },
    { name: 'BETERA UD/OT S' }, { name: 'BURJASSOT UD/OT' }, { name: 'GODELLA UD/OT' }, { name: 'NAQUERA OT' },
    { name: 'ALBORAIA UD/OT' }, { name: 'ALMASSERA OT' }, { name: 'FOIOS - ALBALAT DELS SORELLS OT' }, { name: 'LA POBLA DE FARNALS OT' }, { name: 'MASSAMAGRELL UD/OT S' }, { name: 'MELIANA UD/OT' }, { name: 'MUSEROS OT' }, { name: 'RAFELBUÑOL OT' }, { name: 'TAVERNES BLANQUES OT' },
    { name: 'ALBERIQUE UD/OT' }, { name: "L' ALCUDIA DE CARLET UD/OT" }, { name: 'LA POBLA LLARGA OT' }, { name: 'MANUEL OT' }, { name: 'VILLANUEVA DE CASTELLON UD/OT' },
    { name: 'PUERTO DE SAGUNT UD/OT' }, { name: 'PUIG OT' }, { name: 'SAGUNT/SAGUNTO UD/OT S' },
    { name: 'ALACUAS UD/OT' }, { name: 'ALDAIA UD/OT S' }, { name: 'MONTSERRAT OT' }, { name: 'TORRENTE UD/OT S' }, { name: 'TURIS OT' }, { name: 'XIRIVELLA UD/OT' },
    { name: 'BENAGUASIL OT' }, { name: 'LA POBLA DE VALLBONA UD/OT S' }, { name: "L'ELIANA UD/OT" }, { name: 'LLIRIA UD/OT S' }, { name: 'RIBARROJA DEL TURIA UD' }, { name: 'RIBARROJA DEL TURIA UD/OT S' }, { name: 'VILAMARXANT OT' },
    { name: 'SAN ANTONIO DE BENAGEBER' },
    { name: 'BUÑOL UD/OT' }, { name: 'REQUENA UD/OT' }, { name: 'UTIEL UD/OT' },
    { name: 'ADEMUZ UD/OT' },
    { name: 'CTA MAÑANA' }, { name: 'CTA TARDE' }, { name: 'CTA NOCHE' },
];

// Resto del código del componente App (igual al que enviaste)
