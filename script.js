let ultimaCategoriaAtiva = 'todos';
let slideAtual = 0;
const totalSlides = 3;

// Banco de Dados Oficial - Uber Eletrônicos
// Imagens alteradas para buscar direto na raiz (removido "imagens/")
const produtos = [
    { id: 1, cat: 'fones', nome: "Fone Bluetooth A'gold", preco: "R$ 65,00", descApple: "Áudio de alta fidelidade em um design ultra-compacto.", img: "fn-ba28.jpg", ficha: { "Marca": "A'gold", "Modelo": "FN-BA28", "Conectividade": "Bluetooth", "Tamanho": "Miniatura Ergonômica", "Formato": "In-Ear Ultra-compacto", "Cor": "branco", "Microfone integrado": "Sim"} },
    { id: 2, cat: 'fones', nome: "Fone Bluetooth A'gold 17mini", preco: "R$ 45,00", descApple: "O equilíbrio perfeito entre som nítido e discrição.", img: "fn-17mini.jpg", ficha: { "Marca": "A'gold", "Modelo": "FN-17mini", "Conectividade": "Bluetooth", "Tamanho": "Miniatura Ergonômica", "Cor": "branco", "Microfone inegrado": "Sim", "Formato": "in-ear"} },
    { id: 3, cat: 'smart', nome: "Smart Watch RL-17", preco: "R$ 129,90", descApple: "A evolução no seu pulso. Tela Super AMOLED.", img: "rl17-smartwatch.jpg", ficha: { "Modelo": "RL-17", "Tipo de Tela": "Super AMOLED", "Marca": "A'gold", "Desenho da pulseira": "mesh", "Material da pulseira": "silicone", "Sistemas compatíveis": "Android 5.0 e superior. IOS 9.0 e superior.", "Bateria": "180 mAh", "Duração da bateria": "2 dias" } },
    { id: 4, cat: 'smart', nome: "Air Tag (Rastreador)", preco: "R$ 49,90", descApple: "Encontre seus objetos perdidos num piscar de olhos.", img: "airtag.jpg", ficha: { "Tipo": "Rastreador", "Compatibilidade": "Exclusivo iOS", "Bateria": "230 mAh", "Duração da bateria": "6 a 8 meses", "Peso": "3,1g", "Diâmetro": "2,8cm", "Largura": "3cm", "Sistemas compátiveis": "IOS 9 e superior", "Resistente à água": "Sim", "Conexão": "bluetooth" } },
    { id: 5, cat: 'energia', nome: "Power Bank BTE-26 (10.000 mAh)", preco: "R$ 110,00", descApple: "Liberdade sem fios. Bateria de alta capacidade.", img: "bte26-powerbank.jpg", ficha: { "Marca": "A'gold", "Modelo": "BTE-26", "Capacidade": "10.000 mAh", "Carregamento": "Indução", "Compatível": "Lightining e Tipo C", "Inclui cabo": "Sim", "Quantidade de portas de carga": "3"} },
    { id: 6, cat: 'energia', nome: "Power Bank BTE-08A (10.000 mAh)", preco: "R$ 85,00", descApple: "Controle total da sua energia. Painel digital inteligente.", img: "bte08a-powerbank.jpg", ficha: { "Modelo": "BTE-08A", "Capacidade": "10.000 mAh", "Marca": "A'gold", "Compatível": "Lightining e Tipo C", "Inclui cabo": "Sim" } },
    { id: 7, cat: 'energia', nome: "Power Bank BTE-06A (5.000 mAh)", preco: "R$ 79,90", descApple: "Energia que cabe no pocket.", img: "bte06a-powerbank.jpg", ficha: { "Modelo": "BTE-06A", "Capacidade": "5.000 mAh", "Marca": "A'gold", "Carregamento": "Indução", "Proteção conta sobrecarga": "Sim" } },
    { id: 8, cat: 'energia', nome: "Fonte Carregador Turbo (40W)", preco: "R$ 45,00", descApple: "Potência máxima para tomada.", img: "fonte-turbo-40w.jpg", ficha: { "Potência": "40W", "Saídas": "Dupla", "Conector": "USB e Tipo C", "Tipo de carregador": "de parede", "Dipositivos compátiveis": "Iphone, Samsung, Motorola e Xiomi", "Voltagem de entrada": "127/220V", "Inclui cabo": "Não", "Proteção contra sobrecarga": "Sim" } },
    { id: 9, cat: 'energia', nome: "Carregador Veicular", preco: "R$ 25,00", descApple: "Inteligência na estrada.", img: "carregador-veicular.jpg", ficha: { "Tipo": "Veicular", "Saídas": "2 Portas", "Conectores": "Usb e Usb-c", "Marca": "A'gold", "Disposivos compatíveis": "Celuar, GPS e Tablet"} },
    { id: 10, cat: 'cabos', nome: "Cabo USB-C para USB-C (2M | 60W)", preco: "R$ 35,00", descApple: "Conectividade premium.", img: "cabo-turbo-60w.jpg", ficha: { "Marca do cabo": "A'Gold", "Modelo do cabo": "usb-c usb-c", "Conector de entrada": "TIPO C", "Conector de saída": "Tipo C", "Comprimento": "2 metros", "Potência máxima": "60 W", "Cor": "Branco" } },
    { id: 11, cat: 'cabos', nome: "Cabo USB-C para USB-C (1M | 66W)", preco: "R$ 30,00", descApple: "O ápice da velocidade.", img: "cabo-cc-1m-66w.jpg", ficha: { "Comprimento": "1 metro", "Potência": "66 W" } },
    { id: 12, cat: 'cabos', nome: "Cabo USB-C para USB-C (1M | 60W)", preco: "R$ 29,90", descApple: "Sincronização impecável.", img: "cabo-cc-1m-60w.jpg", ficha: { "Comprimento": "1 metro", "Potência": "60 W" } },
    { id: 13, cat: 'cabos', nome: "Cabo USB-C para Lightning (30W)", preco: "R$ 29,90", descApple: "Carregamento rápido para iPhone.", img: "cabo-cl-1m-30w.jpg", ficha: { "Entrada": "USB-C", "Saída": "Lightning" } },
    { id: 14, cat: 'cabos', nome: "Cabo USB para Lightning (20W)", preco: "R$ 25,00", descApple: "Durabilidade e eficiência.", img: "cabo-al-1m-20w.jpg", ficha: { "Entrada": "USB-A", "Saída": "Lightning" } },
    { id: 15, cat: 'cabos', nome: "Cabo USB para USB-C (20W)", preco: "R$ 25,00", descApple: "Versatilidade diária.", img: "cabo-ac-1m-20w.jpg", ficha: { "Entrada": "USB-A", "Saída": "USB-C" } },
    { id: 16, cat: 'cabos', nome: "Cabo USB para Micro USB (20W)", preco: "R$ 25,00", descApple: "Conectividade essencial.", img: "cabo-amicro-1m-20w.jpg", ficha: { "Entrada": "USB-A", "Saída": "Micro-USB" } },
    { id: 17, cat: 'acessorios', nome: "Cordão para Celular", preco: "R$ 25,00", descApple: "Segurança e estilo.", img: "cordao-celular.jpg", ficha: { "Tipo": "Cordão", "Instalação": "Universal" } },
    { id: 18, cat: 'acessorios', nome: "Chaveiros Diversos", preco: "R$ 15,00", descApple: "Detalhes que fazem a diferença.", img: "chaveiros.jpg", ficha: { "Tipo": "Chaveiro", "Estilo": "Variados" } },
    { id: 19, cat: 'acessorios', nome: "Aromatizador automotivo", preco: "R$ 29,90", descApple: "Perfume para carro.", img: "aromatizador.jpg", ficha: { "Marca": "Kapbom", "Fragância": "Diversa" } },
    { id: 20, cat: 'cuidados', nome: "Máquina de Corte de Cabelo Holda", preco: "R$ 29,90", descApple: "Alta precisão e ergonomia.", img: "maquina-holda.jpg", ficha: { "Marca": "Holda", "Uso": "Cabelo e Barba" } }
];

// Funções de navegação permanecem as mesmas, garantindo que o layout da tabela seja compacto
function irParaProduto(id) {
    const p = produtos.find(prod => prod.id === id);
    const alvo = document.getElementById('dados-pagina-produto');
    let linesFicha = "";
    for(let key in p.ficha) {
        linesFicha += `<div class="flex border-b border-neutral-800/80 bg-neutral-900/60 text-[10px] md:text-sm"><div class="w-1/2 p-2 font-medium text-neutral-400 border-r border-neutral-800/80">${key}</div><div class="w-1/2 p-2 text-neutral-100 font-light break-words">${p.ficha[key]}</div></div>`;
    }
    alvo.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8 py-2 px-2">
            <div class="js-moldura-zoom w-full md:w-1/2 bg-neutral-900/40 border border-neutral-800 rounded-2xl flex justify-center items-center overflow-hidden h-[300px] md:h-[500px] p-0">
                <img src="${p.img}" class="js-foto-produto w-full h-full object-cover">
            </div>
            <div class="w-full md:w-1/2 flex flex-col justify-start">
                <h2 class="text-2xl font-bold text-white">${p.nome}</h2>
                <p class="text-2xl font-semibold text-yellow-500 mt-2">${p.preco}</p>
                <p class="text-neutral-300 mt-4 text-sm leading-relaxed">${p.descApple}</p>
            </div>
        </div>
        <div class="mt-6 px-2">
            <h4 class="text-xs font-bold text-white mb-2 uppercase">Características</h4>
            <div class="border border-neutral-800 rounded-lg overflow-hidden shadow-xl">${linesFicha}</div>
        </div>
        <div class="mt-6 mx-2 bg-neutral-900 border border-yellow-500/30 p-4 rounded-xl text-center text-xs text-neutral-200">
            ⚡ <strong>Gostou?</strong> Avise ao motorista na corrida.
        </div>
    `;
    document.getElementById('tela-home').classList.add('hidden');
    document.getElementById('tela-categoria-lista').classList.add('hidden');
    document.getElementById('tela-interna-produto').classList.remove('hidden');
    ativarEfeitoZoomAmazon();
}
// ... [Manter as funções: atualizarCarrossel, mudarSlide, filtrarCategoria, ativarEfeitoZoomAmazon, voltarParaUltimoEstado, voltarParaHome e o window.onload original]
