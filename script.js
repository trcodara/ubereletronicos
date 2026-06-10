let ultimaCategoriaAtiva = 'todos';
let slideAtual = 0;
const totalSlides = 3;

// Banco de Dados Oficial - Uber Eletrônicos
const produtos = [
    // FONES
{ id: 1, cat: 'fones', nome: "Fone Bluetooth A'gold", preco: "R$ 65,00", descApple: "Áudio de alta fidelidade em um design ultra-compacto. Conexão sem fio estável e encaixe confortável para o dia todo.", img: "fn-ba28.jpg", ficha: { "Marca": "A'gold", "Modelo": "FN-BA28", "Conectividade": "Bluetooth", "Tamanho": "Miniatura Ergonômica", "Formato": "In-Ear Ultra-compacto", "Cor": "branco", "Microfone integrado": "Sim"} },
    { id: 2, cat: 'fones', nome: "Fone Bluetooth A'gold 17mini", preco: "R$ 45,00", descApple: "O equilíbrio perfeito entre som nítido e discrição. Formato mini, ideal para treinos e mobilidade diária.", img: "fn-17mini.jpg", ficha: { "Marca": "A'gold", "Modelo": "FN-17mini", "Conectividade": "Bluetooth", "Tamanho": "Miniatura Ergonômica", "Cor": "branco", "Microfone inegrado": "Sim", "Formato": "in-ear"} },
    
    // SMARTWATCHES
    { id: 3, cat: 'smart', nome: "Smart Watch RL-17", preco: "R$ 129,90", descApple: "A evolução no seu pulso. Tela Super AMOLED com cores vivas, excelente contraste e monitoramento inteligente de funções.", img: "rl17-smartwatch.jpg", ficha: { "Modelo": "RL-17", "Tipo de Tela": "Super AMOLED", "Marca": "A'gold", "Desenho da pulseira": "mesh", "Material da pulseira": "silicone", "Sistemas compatíveis": "Android 5.0 e superior. IOS 9.0 e superior.", "Bateria": "180 mAh", "Duração da bateria": "2 dias" } },
    { id: 4, cat: 'smart', nome: "Air Tag (Rastreador)", preco: "R$ 49,90", descApple: "Encontre seus objetos perdidos num piscar de olhos. Integração perfeita e exclusiva com o ecossistema iOS/iPhone.", img: "airtag.jpg", ficha: { "Tipo": "Rastreador", "Compatibilidade": "Exclusivo iOS", "Bateria": "230 mAh", "Duração da bateria": "6 a 8 meses", "Peso": "3,1g", "Diâmetro": "2,8cm", "Largura": "3cm", "Sistemas compátiveis": "IOS 9 e superior", "Resistente à água": "Sim", "Conexão": "bluetooth" } },
    
    // ENERGIA
    { id: 5, cat: 'energia', nome: "Power Bank BTE-26 (10.000 mAh)", preco: "R$ 110,00", descApple: "Liberdade sem fios. Bateria de alta capacidade com carregamento por indução e entrega rápida de 22.5W.", img: "bte26-powerbank.jpg", ficha: { "Marca": "A'gold", "Modelo": "BTE-26", "Capacidade": "10.000 mAh", "Carregamento": "Indução", "Compatível": "Lightining e Tipo C", "Inclui cabo": "Sim", "Quantidade de portas de carga": "3"} },
    { id: 6, cat: 'energia', nome: "Power Bank BTE-08A (10.000 mAh)", preco: "R$ 85,00", descApple: "Controle total da sua energia. Painel digital inteligente que mostra a carga exata e saída eficiente de 3.1A.", img: "bte08a-powerbank.jpg", ficha: { "Modelo": "BTE-08A", "Capacidade": "10.000 mAh", "Marca": "A'gold", "Compatível": "Lightining e Tipo C", "Inclui cabo": "Sim" } },
    { id: 7, cat: 'energia', nome: "Power Bank BTE-06A (5.000 mAh)", preco: "R$ 79,90", descApple: "Energia que cabe no pocket. Carregador magnético por indução em formato ultra-reduzido para emergências.", img: "bte06a-powerbank.jpg", ficha: { "Modelo": "BTE-06A", "Capacidade": "5.000 mAh", "Marca": "A'gold", "Carregamento": "Indução", "Proteção conta sobrecarga": "Sim",  } },
    { id: 8, cat: 'energia', nome: "Fonte Carregador Turbo (40W)", preco: "R$ 45,00", descApple: "Potência máxima para tomada. Dupla saída turbo de 9.1A para alimentar seus dispositivos na velocidade máxima.", img: "fonte-turbo-40w.jpg", ficha: { "Potência": "40W", "Saídas": "Dupla", "Conector": "USB e Tipo C", "Tipo de carregador": "de parede", "Dipositivos compátiveis": "Iphone, Samsung, Motorola e Xiomi", "Voltagem de entrada": "127/220V", "Inclui cabo": "Não", "Proteção contra sobrecarga": "Sim" } },
    { id: 9, cat: 'energia', nome: "Carregador Veicular", preco: "R$ 25,00", descApple: "Inteligência na estrada. Duas saídas inteligentes de 4.1A com chip de proteção térmica para o seu carro.", img: "carregador-veicular.jpg", ficha: { "Tipo": "Veicular", "Saídas": "2 Portas", "Conectores": "Usb e Usb-c", "Marca": "A'gold", "Disposivos compatíveis": "Celuar, GPS e Tablet"} },
    
    // CABOS
    { id: 10, cat: 'cabos', nome: "Cabo USB-C para USB-C (2M | 60W)", preco: "R$ 35,00", descApple: "Conectividade premium para transferência de dados e recarga rápida de alta performance. Versão Turbo Longa.", img: "cabo-turbo-60w.jpg", ficha: { "Marca do cabo": "A'Gold", "Modelo do cabo": "usb-c usb-c", "Conector de entrada": "TIPO C", "Conector de saída": "Tipo C", "Comprimento": "2 metros", "Potência máxima": "60 W", "Cor": "Branco" } },
    { id: 11, cat: 'cabos', nome: "Cabo USB-C para USB-C (1M | 66W)", preco: "R$ 30,00", descApple: "O ápice da velocidade. Chip inteligente integrado que calibra a energia exata para máxima segurança.", img: "cabo-cc-1m-66w.jpg", ficha: { "Comprimento": "1 metro", "Potência": "66 W" } },
    { id: 12, cat: 'cabos', nome: "Cabo USB-C para USB-C (1M | 60W)", preco: "R$ 29,90", descApple: "Sincronização impecável. Potência estável para notebooks, tablets e smartphones modernos.", img: "cabo-cc-1m-60w.jpg", ficha: { "Comprimento": "1 metro", "Potência": "60 W" } },
    { id: 13, cat: 'cabos', nome: "Cabo USB-C para Lightning (30W)", preco: "R$ 29,90", descApple: "Carregamento rápido para seu iPhone. Suporta até 30W para atingir 50% de bateria em poucos minutos.", img: "cabo-cl-1m-30w.jpg", ficha: { "Entrada": "USB-C", "Saída": "Lightning" } },
    { id: 14, cat: 'cabos', nome: "Cabo USB para Lightning (20W)", preco: "R$ 25,00", descApple: "Durabilidade e eficiência. Conexão estável e segura de 20W para a linha Apple com tecnologia turbo.", img: "cabo-al-1m-20w.jpg", ficha: { "Entrada": "USB-A", "Saída": "Lightning" } },
    { id: 15, cat: 'cabos', nome: "Cabo USB para USB-C (20W)", preco: "R$ 25,00", descApple: "Versatilidade diária. Compatível com os principais smartphones do mercado com velocidade turbo de 20W.", img: "cabo-ac-1m-20w.jpg", ficha: { "Entrada": "USB-A", "Saída": "USB-C" } },
    { id: 16, cat: 'cabos', nome: "Cabo USB para Micro USB (20W)", preco: "R$ 25,00", descApple: "Conectividade essencial. Recarga segura de 20W para caixas de som e fones antigos.", img: "cabo-amicro-1m-20w.jpg", ficha: { "Entrada": "USB-A", "Saída": "Micro-USB" } },
    
    // ACESSORIOS
    { id: 17, cat: 'acessorios', nome: "Cordão para Celular", preco: "R$ 25,00", descApple: "Segurança e estilo sempre à mão. Modelos variados e confortáveis para proteger seu smartphone contra quedas.", img: "cordao-celular.jpg", ficha: { "Tipo": "Cordão", "Instalação": "Universal" } },
    { id: 18, cat: 'acessorios', nome: "Chaveiros Diversos", preco: "R$ 15,00", descApple: "Detalhes que fazem a diferença. Design leve e acabamento premium para organizar suas chaves.", img: "chaveiros.jpg", ficha: { "Tipo": "Chaveiro", "Estilo": "Variados" } },
    { id: 19, cat: 'acessorios', nome: "Aromatizador automotivo", preco: "R$ 29,90", descApple: "Aromatizador cheirinho, enfeite e aroma automotivo, perfume para carro", img: "aromatizador.jpg", ficha: { "Marca": "Kapbom", "Fragância": "Diversa", }},
    
    
// CUIDADOS
    { id: 20, cat: 'cuidados', nome: "Máquina de Corte de Cabelo Holda", preco: "R$ 29,90", descApple: "Alta precisão e ergonomia. Lâminas afiadas para acabamentos perfeitos, ideal para quem busca praticidade.", img: "maquina-holda.jpg", ficha: { "Marca": "Holda", "Uso": "Cabelo e Barba" } }
];

const nomesCategorias = {
    'fones': "🎧 Fones de Ouvido",
    'smart': "⌚ Smartwatches & Rastreadores",
    'energia': "🔋 Energia & Baterias",
    'cabos': "🔌 Cabos de Alta Performance",
    'acessorios': "🎒 Acessórios",
    'cuidados': "💈 Cuidados Pessoais"
}

// 1. CONTROLE DO CARROSSEL DE BANNERS (TOPO DA HOME)
function atualizarCarrossel() {
    const container = document.getElementById('carrossel-slides');
    if (container) {
        container.style.transform = `translateX(-${slideAtual * 100}%)`;
    }
    
    const dots = document.querySelectorAll('#carrossel-dots button');
    dots.forEach((dot, index) => {
        if (index === slideAtual) {
            dot.classList.replace('bg-white/40', 'bg-white');
            dot.classList.add('w-5');
        } else {
            dot.classList.replace('bg-white', 'bg-white/40');
            dot.classList.remove('w-5');
        }
    });
}

function mudarSlide(direcao) {
    slideAtual += direcao;
    if (slideAtual >= totalSlides) slideAtual = 0;
    if (slideAtual < 0) slideAtual = totalSlides - 1;
    atualizarCarrossel();
}

function irParaSlide(index) {
    slideAtual = index;
    atualizarCarrossel();
}

// 2. FUNÇÃO MANTIDA LIMPA PARA VALORIZAR O SEU DESIGN CENTRALIZADO DO HTML
function renderizarProdutosHome() {
    // Mantido livre para não gerar conflitos ou códigos por cima da sua vitrine fixa
}

// 3. FILTRAGEM DO MENU SUPERIOR (EXIBIÇÃO EM LISTA MERCADO LIVRE)
function filtrarCategoria(cat) {
    ultimaCategoriaAtiva = cat;

    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('text-yellow-500', 'font-medium');
        btn.classList.add('text-neutral-400');
    });
    
    const btnAlvo = document.getElementById(`btn-${cat}`);
    if (btnAlvo) {
        btnAlvo.classList.replace('text-neutral-400', 'text-yellow-500');
        btnAlvo.classList.add('font-medium');
    }

    if(cat === 'todos') {
        document.getElementById('tela-categoria-lista').classList.replace('block', 'hidden');
        document.getElementById('tela-interna-produto').classList.replace('block', 'hidden');
        document.getElementById('tela-home').classList.replace('hidden', 'block');
        atualizarCarrossel();
        return;
    }

    const produtosFiltrados = produtos.filter(p => p.cat === cat);
    
    document.getElementById('nome-categoria-titulo').innerText = nomesCategorias[cat] || "Produtos";
    document.getElementById('qtd-itens-categoria').innerText = `(${produtosFiltrados.length} ${produtosFiltrados.length === 1 ? 'item' : 'itens'})`;

    const containerLista = document.getElementById('container-lista-mercadolivre');
    containerLista.innerHTML = "";

    produtosFiltrados.forEach(p => {
        const itemML = document.createElement('div');
        itemML.className = "bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 rounded-xl p-4 flex gap-4 md:gap-6 items-center cursor-pointer transition-all group";
        itemML.setAttribute('onclick', `irParaProduto(${p.id})`);

        itemML.innerHTML = `
            <div class="w-20 h-20 md:w-24 md:h-24 bg-black/60 rounded-lg p-2 flex justify-center items-center shrink-0">
                <img src="${p.img}" alt="${p.nome}" class="object-contain h-full w-full">
            </div>
            <div class="flex-grow flex flex-col justify-between py-0.5">
                <div>
                    <h4 class="text-sm md:text-base font-medium text-white group-hover:text-yellow-500 transition-colors line-clamp-1">${p.nome}</h4>
                    <p class="text-xs text-neutral-400 mt-1 font-light line-clamp-2 leading-relaxed">${p.descApple}</p>
                </div>
                <div class="mt-2 flex items-center gap-3">
                    <span class="text-base font-bold text-yellow-500">${p.preco}</span>
                    <span class="text-[9px] bg-neutral-900 text-neutral-400 border border-neutral-800 px-1.5 py-0.5 rounded tracking-wide uppercase">Pronta Entrega</span>
                </div>
            </div>
            <div class="text-neutral-600 group-hover:text-yellow-500 transition-colors pr-2 hidden sm:block">
                ➔
            </div>
        `;
        containerLista.appendChild(itemML);
    });

    document.getElementById('tela-home').classList.replace('block', 'hidden');
    document.getElementById('tela-interna-produto').classList.replace('block', 'hidden');
    document.getElementById('tela-categoria-lista').classList.replace('hidden', 'block');
}

// 4. PÁGINA INTERNA COM DETALHES E ZOOM ESTILO AMAZON
function irParaProduto(id) {
    const p = produtos.find(prod => prod.id === id);
    const alvo = document.getElementById('dados-pagina-produto');
    
    let linesFicha = "";
    let idx = 0;
    for(let key in p.ficha) {
        const bgRow = idx % 2 === 0 ? 'bg-neutral-900/60' : 'bg-neutral-950';
        linesFicha += `
    <div class="flex border-b border-neutral-800/80 ${bgRow} text-xs md:text-sm">
        <div class="w-1/2 p-4 font-medium text-neutral-400 border-r border-neutral-800/80">${key}</div>
        <div class="w-1/2 p-4 text-neutral-100 font-light break-words">${p.ficha[key]}</div>
    </div>
`;
    }

    alvo.innerHTML = `
        <div class="flex flex-col md:flex-row gap-12 items-center py-2">
            <div class="js-moldura-zoom w-full md:w-1/2 bg-neutral-900/40 border border-neutral-800 p-4 rounded-2xl flex justify-center items-center shadow-2xl overflow-hidden relative h-[280px] md:h-[420px]">
                <img src="${p.img}" alt="${p.nome}" class="js-foto-produto object-contain h-full w-full filter drop-shadow-[0_25px_50px_rgba(250,204,21,0.08)] transition-transform duration-100 origin-center">
            </div>
            <div class="w-full md:w-1/2">
                <span class="text-xs font-bold text-yellow-500 tracking-widest uppercase block mb-1">Retirada Imediata</span>
                <h2 class="text-2xl md:text-4xl font-bold tracking-tight text-white leading-tight">${p.nome}</h2>
                <p class="text-3xl font-semibold text-yellow-500 mt-4">${p.preco}</p>
                <div class="mt-6 pt-6 border-t border-neutral-900">
                    <h4 class="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Visão Geral</h4>
                    <p class="text-md text-neutral-300 font-light leading-relaxed">${p.descApple}</p>
                </div>
            </div>
        </div>

        <div class="mt-12">
            <h4 class="text-sm font-bold text-white mb-4 tracking-wide uppercase">Características Principais</h4>
            <div class="border border-neutral-800/80 rounded-xl overflow-hidden shadow-2xl">
                ${linesFicha}
            </div>
        </div>

        <div class="mt-10 bg-neutral-900 border border-yellow-500/30 p-5 rounded-xl text-center text-sm text-neutral-200">
            ⚡ <strong class="text-yellow-500 font-medium">Gostou?</strong> Avise ao motorista durante a corrida para retirar seu produto na hora.
        </div>
    `;

    document.getElementById('tela-home').classList.replace('block', 'hidden');
    document.getElementById('tela-categoria-lista').classList.replace('block', 'hidden');
    document.getElementById('tela-interna-produto').classList.replace('hidden', 'block');

    ativarEfeitoZoomAmazon();
}

function ativarEfeitoZoomAmazon() {
    const moldura = document.querySelector('.js-moldura-zoom');
    const imagem = document.querySelector('.js-foto-produto');

    if (!moldura || !imagem) return;

    moldura.addEventListener('mousemove', (e) => {
        const rect = moldura.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        imagem.style.transformOrigin = `${x}% ${y}%`;
        imagem.style.transform = 'scale(2.2)';
    });

    moldura.addEventListener('mouseleave', () => {
        imagem.style.transformOrigin = 'center center';
        imagem.style.transform = 'scale(1)';
    });
}

function voltarParaUltimoEstado() {
    if (ultimaCategoriaAtiva === 'todos') {
        voltarParaHome();
    } else {
        document.getElementById('tela-interna-produto').classList.replace('block', 'hidden');
        document.getElementById('tela-categoria-lista').classList.replace('hidden', 'block');
    }
}

function voltarParaHome() {
    ultimaCategoriaAtiva = 'todos';
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('text-yellow-500', 'font-medium');
        btn.classList.add('text-neutral-400');
    });
    document.getElementById('btn-todos').classList.replace('text-neutral-400', 'text-yellow-500');
    document.getElementById('btn-todos').classList.add('font-medium');

    document.getElementById('tela-categoria-lista').classList.replace('block', 'hidden');
    document.getElementById('tela-interna-produto').classList.replace('block', 'hidden');
    document.getElementById('tela-home').classList.replace('hidden', 'block');
    atualizarCarrossel();
}

// 5. INICIALIZAÇÃO DO CARROSSEL AUTOMÁTICO
window.onload = () => {
    atualizarCarrossel();
    
    // Troca de slide automática a cada 5 segundos
    setInterval(() => {
        mudarSlide(1);
    }, 5000);
};  
