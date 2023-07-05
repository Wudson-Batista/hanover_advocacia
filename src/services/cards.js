import briefcase from '../assets/icons/briefcase.png'
import worker from '../assets/icons/worker.png'
import family from '../assets/icons/family.png'
import money from '../assets/icons/money.png'
import handcuffs from '../assets/icons/handcuffs.png'
import hacker from '../assets/icons/hacker.png'
import shop from '../assets/icons/shop.png'
import home from '../assets/icons/home.png'

const cards = [
    {
        id: 1,
        icon: briefcase,
        title: "Direito Empresarial",
        description: "Somos um escritório de advocacia especialista em Direito Empresarial. Contamos com uma equipe multidisciplinar pronta para melhor defender nossos clientes.",
        text: 'Direito Empresarial e Societário é o ramo do direito relacionado ao estudo das sociedades empresárias (dentre as quais se destacam a sociedade por quotas de responsabilidade limitada e a sociedade anônima, entre outras), bem como das questões que dizem respeito aos sócios e acionistas dessas pessoas jurídicas e às diversas situações que possam ocorrer no seu seio, como alterações de controle e de participação, questões gerenciais, conflitos societários e outros fenômenos.',
        services: [
            { id: 1, service: 'Elaboração, revisão e alteração de contratos civis e comerciais;' },
            { id: 2, service: 'Estatuto, Contrato Social, Acordo de Acionista e Joint Venture;' },
            { id: 3, service: 'Constituição e planejamento de estruturas societárias no Brasil e no exterior;' },
            { id: 4, service: 'Representação no Brasil e no exterior de sociedades e/ou seus sócios e acionistas;' },
            { id: 5, service: 'Assessoria jurídica na prevenção de responsabilidade da sociedade e administradores;' },
            { id: 6, service: 'Restruturação societária;' },
            { id: 7, service: 'Due diligence, Governança Corporativa e Compliance;' },
            { id: 8, service: 'Assessoria jurídica para elaboração de Certificate of Incumbency;' }
        ],
        whatis: [
            {
                id: 1,
                content: 'Também chamado de Direito comercial ou direito empresarial, é um ramo do direito privado que pode ser entendido como o conjunto de normas disciplinadoras da atividade negocial do empresário, e de qualquer pessoa física ou jurídica, destinada a fins de natureza econômica, desde que habitual e dirigida à produção de bens ou serviços conducentes a resultados patrimoniais ou lucrativos, e que a exerça com a racionalidade própria de “empresa”, sendo um ramo especial de direito privado. Em Portugal, veja-se direito comercial português. Rege os atos tidos como comerciais. '
            },

            {
                id: 2,
                content: 'Assim entendido, o direito empresarial abrange um conjunto variado de matérias, incluindo as obrigações dos empresários, as sociedades empresárias, os contratos especiais de comércio, os títulos de crédito, a propriedade intelectual, entre outras. Desde 1886 nos Estados Unidos, as corporações passaram a ter direitos humanos, antes reservados apenas a pessoas físicas.'
            },

        ]
    },
    {
        id: 2,
        icon: worker,
        title: "Direito Trabalhista",
        description: "Relações familiares, por vezes, geram conflitos. Atuamos com perícia e cuidado nos assuntos advindos do Direito de Família.",
        text: 'O Direito do Trabalho é a área jurídica que trata das demandas que envolvem relações trabalhistas. Nosso escritório é especialista no assunto.'
        ,
        services: [
            { id: 1, service: 'Reclamação Trabalhista;' },
            { id: 2, service: ' Contratos trabalhistas internacionais para multinacionais;' },
            { id: 3, service: ' Defesa em procedimentos preparatórios e inquéritos civis públicos promovidos pelo Ministério Público do Trabalho(MPT); ' },
            { id: 4, service: 'Defesa em autos de infração lavrados pela Superintendência Regional do Trabalho e Emprego(SRTE); ' },
            { id: 5, service: 'Defesa em reclamações trabalhistas individuais e coletivas(ajuizadas por empregados ou pelo sindicato profissional);' },
            { id: 6, service: 'Defesa em ações civis públicas promovidas pelo MPT;' },
            { id: 7, service: 'Investigação de contingências e passivos ocultos na área trabalhista, em diligências legais(due diligence) de fusões e aquisições;' },
            { id: 8, service: 'Reestruturação e redução de empregados em operações de fusões e aquisições, extinção de estabelecimentos ou encerramento de atividades;' },
            { id: 9, service: 'Terceirização de serviços e contratação de fornecedores e representantes independentes;' },
            { id: 10, service: 'Revisão legal de estruturas de salários e benefícios;' },
            { id: 11, service: 'Planos de incentivo(bônus, opções de ações, unidades de ações restritas e planos de participação nos lucros);' },
            { id: 12, service: 'Contratação e transferência internacional de empregados expatriados, brasileiros ou estrangeiros;' },
            { id: 13, service: 'Contratação e desligamento de empregados e executivos;' },
            { id: 14, service: 'Revisão de políticas internas da empresa;' },
            { id: 15, service: 'Negociação coletiva com sindicatos de diversos setores;' },
            { id: 16, service: 'Questões relativas às atividades marítima e portuária.' },
        ],
        whatis: [
            {
                id: 1,
                content: 'O Direito do Trabalho é o ramo jurídico que se dedica a questões ligadas às relações trabalhistas. Uma de suas principais características é a existência de uma parte hipossuficiente  nos casos, isto é, uma parte considerada mais frágil (trabalhador) frente ao poder de decisão da outra parte (empregador).'
            },

            {
                id: 2,
                content: 'Essa hipossuficiência atribuída ao trabalhador na relação empregatícia é fundamento da proteção legal aos trabalhadores, preconizada nos arts. 6º a 11º da Constituição Federal de 1988, que instituem os corolários a serem seguidos na legislação infraconstitucional que disciplina a matéria, ou seja, na Consolidação das Leis do Trabalho(CLT).'
            },

        ]
    },
    {
        id: 3,
        icon: family,
        title: "Direito de Familia",
        description: "Relações familiares, por vezes, geram conflitos. Atuamos com perícia e cuidado nos assuntos advindos do Direito de Família.",
        text: 'Direito de Família é o ramo do direito que contém normas jurídicas relacionadas com a estrutura, organização e proteção da família. Ramo que trata das relações familiares e das obrigações e direitos decorrentes dessas relações, ou seja, é o ramo do Direito que regula e estabelece as normas de convivência familiar.'
        ,
        services: [
            { id: 1, service: 'Casamento;' },
            { id: 2, service: 'União Estável(reconhecimento e dissolução);' },
            { id: 3, service: ' Divórcio;' },
            { id: 4, service: 'Guarda e regulamentação de visita;' },
            { id: 5, service: 'Pensão alimentícia;' },
            { id: 6, service: 'Interdição e curatela;' },
            { id: 7, service: 'Planejamento familiar e sucessório;' },
            { id: 8, service: 'Investigação de paternidade;' },
            { id: 9, service: 'Adoção;' },
            { id: 10, service: 'Partilha de bens;' },
            { id: 11, service: 'Inventário e arrolamento;' },
            { id: 12, service: 'Testamento;' },
            { id: 13, service: 'Casamento(regime de bens e pacto antenupcial);' },
            { id: 14, service: 'Doação;' },
            { id: 15, service: 'Interdição;' },
            { id: 16, service: 'Filiação(adoção e investigação de paternidade);' },
            { id: 17, service: 'Medida cautelar de arrolamento de bens.' },
        ]
    },
    {
        id: 4,
        icon: money,
        title: "Direito Tributário",
        description: "O advogado em Direito Tributário realiza serviços de natureza judicial e administrativa, promovendo a defesa nas mais diversas áreas da esfera tributária.",
        text: 'É o segmento do direito financeiro que define como serão cobrados dos cidadãos (contribuintes) os tributos e outras obrigações a ele relacionadas, para gerar receita para o Estado (fisco). Tem como contraparte o direito fiscal ou orçamentário, que é o conjunto de normas jurídicas destinadas à regulamentação do financiamento das atividades do Estado. Direito tributário e direito fiscal estão ligados, por meio do direito financeiro, ao direito público.'
        ,
        services: [
            { id: 1, service: 'Assesoria e cosultoria estratégica' },
            { id: 2, service: 'Compliance tributário' },
            { id: 3, service: 'Defesa em execuções fiscais' },
            { id: 4, service: 'Execução Fiscal.' },
            { id: 5, service: 'Itcmd' },
            { id: 6, service: 'Lançamento tributário' },
            { id: 7, service: 'Planejamento patrimonial' },
            { id: 8, service: 'Recuperação crédito tributário' },
            { id: 9, service: 'Restituição icms' },
            { id: 10, service: 'Tributos federais' }
        ],
        whatis: [
            {
                id: 1,
                content: 'Direito de Família é o ramo do direito que contém normas jurídicas relacionadas com a estrutura, organização e proteção da família. Ramo que trata dUm escritório especializado em direito tributário pode ajudar as empresas e os contribuintes a entender e cumprir as obrigações fiscais de forma correta, evitando multas e problemas com a Receita Federal. Além disso, pode ajudar a identificar benefícios fiscais e créditos que a empresa possa ter direito, maximizando seus lucros.'
            },
            {
                id: 2,
                content: 'Um escritório especializado também pode ajudar a se defenderem em caso de autuações fiscais, representando-as em processos administrativos e judiciais. Isso é especialmente importante em casos de autuações indevidas ou em situações em que a empresa entende que não cometeu qualquer infração.'
            }
        ]
    },
    {
        id: 5,
        icon: handcuffs,
        title: "Direito Criminal",
        description: "O Direito Criminal se relaciona a atos dentro da esfera penal. Contamos com equipe capacitada na área para melhor defender os direitos de nossos clientes.",
        text: 'Um escritório de advocacia criminalista especializado na luta pelo direito de uma defesa ampla, justa e eficaz é aquele que age com respeito e dedicação em direção aos princípios constitucionais que protegem seus clientes.'
        ,
        services: [
            { id: 1, service: 'Crimes contra a honra e pessoa' },
            { id: 2, service: 'Habeas corpus' },
            { id: 3, service: 'Revisão criminal' },
            { id: 4, service: 'STJ e STF' },
            { id: 5, service: 'Defesa em inquérito policial' },
            { id: 6, service: 'Acompanhamento em delegacia' },
            { id: 7, service: 'Crimes econômicos' },
            { id: 8, service: 'Maria da penha' },
            { id: 9, service: 'Crime contra patrimônio' }
        ],
        whatis: [
            {
                id: 1,
                content: 'Nossos advogados em Direito Criminalista atuam na defesa dos interesses de nossos clientes com acompanhamento em Delegacias, Fóruns, Pesquisas e Defesas Criminais. Com atendimento personalizado e atento às necessidades do cliente, cuidando sempre dos aspectos teóricos e práticos que envolvem uma defesa criminal até o desfecho da causa.'
            },
            {
                id: 2,
                content: 'Quase sempre que você encontrar os termos “Direito Penal” e “Direito Criminal” na sua frente, eles serão sinônimos. Via de regra, um advogado penalista e um advogado criminalista atuam exatamente nas mesmas áreas. Por isso, no cotidiano, você pode sim considerar que ambos os termos se referem à mesma coisa.'
            }
        ]
    },
    {
        id: 6,
        icon: shop,
        title: "Direito do Consumidor",
        description: "O Direito do Consumidor está relacionado aos conflitos advindos das relações de consumo. Contamos com uma equipe especialista no assunto.",
        text: 'O Direito do Consumidor é a área jurídica relacionada aos conflitos advindos das relações consumeristas. A relação consumerista se caracteriza pela existência de uma parte hipossuficiente, isto é, considerada mais frágil (consumidor) frente ao poder de decisão da outra parte (fornecedor, comerciante, produtor).',
        services: [
            { id: 1, service: 'Ações contra bancos' },
            { id: 2, service: 'Danos morais' },
            { id: 3, service: 'Dívidas bancárias' },
            { id: 4, service: 'Golpes' },
            { id: 5, service: 'Liberdade de escolha' },
            { id: 6, service: 'Prazo de entrega' },
            { id: 7, service: 'Publicidade enganosa abusiva' },
            { id: 8, service: 'Seguro de vida' },
            { id: 9, service: 'Vício oculto e vício aparente' },
            { id: 10, service: 'Troca de produto com defeito' }
        ],
        whatis: [
            {
                id: 1,
                content: 'Por isso, para regular essas questões, existe o Código de Defesa do Consumidor (CDC) (norma jurídica que tem por finalidade evitar abusos em relação aos consumidores) para proporcionar equilíbrio nas atividades consumeristas.'
            },
            {
                id: 2,
                content: 'No artigo de hoje abordaremos as áreas que envolvem o direito do consumidor, seus principais problemas e como atua um advogado especialista em consumo. Ao final do artigo, ainda, separamos uma série de perguntas e respostas comuns sobre a questão. Confira!'
            }
        ]
    },
    {
        id: 7,
        icon: hacker,
        title: "Direito Cibernético",
        description: "Novas tecnologias levam, também, a novos conflitos. Prestamos serviços jurídicos especializados em Direito Cibernético.",
        text: 'O mundo digital está cada dia mais presente na sociedade, com o avanço da tecnologia e o crescimento da internet, paralelo a isso, acabam surgindo também conflitos digitais. Surge uma necessidade de definir padrões de comportamentos em redes sociais, sites, blogs e assim, escritórios de advocacia especialistas na área se fazem cada vez mais necessários para lidar com esses problemas.',
        services: [
            { id: 1, service: 'Compliance digital' },
            { id: 2, service: 'Lei de acesso a informação' },
            { id: 3, service: 'aplicação de leis no meio digital' },
            { id: 4, service: 'Garantia da liberdade de expressão' },
            { id: 5, service: 'Lei geral de proteção de dados pessoais' },
            { id: 6, service: 'Leis digitais' },
            { id: 7, service: 'Marco civil da internet' },
            { id: 8, service: 'Odrs' },
            { id: 9, service: 'Plataforma de pagamento e E-commerce' },
            { id: 10, service: 'Proteção da dignidade humana no meio digital' },
            { id: 11, service: 'Roubo digital' },
            { id: 12, service: 'Smart contracts' },
            { id: 13, service: 'Tecnologia jurídica' },
            { id: 14, service: 'Remoção de informações do google' },
            { id: 15, service: 'Registro de propriedade intelectual' },
        ],
        whatis: [
            {
                id: 1,
                content: 'É um conjunto de normas, aplicação e regulação das relações jurídicas feitas no âmbito digital. Ele cria padrões e regras para que as relações que acontecem no meio on-line ocorram de maneira respeitosa. Se com o uso da tecnologia as pessoas enviam e recebem informações, realizam negócios, emitem opiniões, tudo isso precisa de uma regra, uma diretriz.'
            },
            {
                id: 2,
                content: 'Uma de suas principais finalidades é impedir a prática de ações lesivas por meio da responsabilização do praticante pelos danos gerados. Como as relações criminais, cíveis, comerciais, tributarias, familiares e afins migraram para o ambiente digital, o Direito teve que acompanhar essas mudanças e se adaptar para praticar nesse novo cenário.'
            }
        ]
    },
    {
        id: 8,
        icon: home,
        title: "Direito Imobiliário",
        description: "Somos um escritório de advocacia especialista em Direito Imobiliário. Contamos com equipe multidisciplinar pronta para melhor defender nossos clientes.",
        text: 'O Direito Imobiliário é, como o próprio nome sugere, o ramo do Direito relacionado a imóveis e às questões que os permeiam. Em nosso escritório de advocacia, atuamos no ramo do Direito Imobiliário por meio de assessoria especializada nos diversos temas da área, buscando oferecer a nossos clientes o atendimento mais completo possível.',
        services: [
            { id: 1, service: 'Atraso na entrega de imóveis' },
            { id: 2, service: 'Distratos imobiliários' },
            { id: 3, service: 'Retificação de aluguel' },
            { id: 4, service: 'Embargos de terceiro' },
            { id: 5, service: 'Direito Urbanístico' },
            { id: 6, service: 'Incorporações Imobiliárias' },
            { id: 7, service: 'Usucapião judicial' },
            { id: 8, service: 'Ação de despejo' },
            { id: 9, service: 'Locação' },
            { id: 10, service: 'Regularização de imóveis' },
            { id: 11, service: 'Ações possessórias em geral' },
            { id: 12, service: 'Relações Condominiais' },
            { id: 13, service: 'Impostos imobiliários' },
            { id: 14, service: 'Negociação de imóveis' },
            { id: 15, service: 'Registro de Imóveis' },
        ],
        whatis: [
            {
                id: 1,
                content: 'Trabalhamos na elaboração de diversos tipos de contratos, na averiguação da situação de imóveis junto aos órgãos competentes, com ações revisionais e renovatórias de alugueis, ações indenizatórias por defeitos de construção e por atraso de entrega e, ainda, responsabilidade civil de construtores e incorporadores.'
            },
            {
                id: 2,
                content: 'A atuação de um escritório de advocacia especialista em direito imobiliário envolve diferentes temas, ações específicas e, até mesmo, atividades de assessoria regular. A seguir, listamos algumas das atividades mais comuns que realizamos neste sentido.'
            }
        ]
    }
]

export default cards;