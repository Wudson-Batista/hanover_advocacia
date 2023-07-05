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
        id: 3,
        icon: family,
        title: "Direito de Familia",
        description: "Relações familiares, por vezes, geram conflitos. Atuamos com perícia e cuidado nos assuntos advindos do Direito de Família.",
    },
    {
        id: 4,
        icon: money,
        title: "Direito Tributário",
        description: "O advogado em Direito Tributário realiza serviços de natureza judicial e administrativa, promovendo a defesa nas mais diversas áreas da esfera tributária.",
    },
    {
        id: 5,
        icon: handcuffs,
        title: "Direito Criminal",
        description: "O Direito Criminal se relaciona a atos dentro da esfera penal. Contamos com equipe capacitada na área para melhor defender os direitos de nossos clientes.",
    },
    {
        id: 6,
        icon: shop,
        title: "Direito do Consumidor",
        description: "O Direito do Consumidor está relacionado aos conflitos advindos das relações de consumo. Contamos com uma equipe especialista no assunto.",
    },
    {
        id: 7,
        icon: hacker,
        title: "Direito Cibernético",
        description: "Novas tecnologias levam, também, a novos conflitos. Prestamos serviços jurídicos especializados em Direito Digital.",
    },
    {
        id: 8,
        icon: home,
        title: "Direito Imobiliário",
        description: "Somos um escritório de advocacia especialista em Direito Imobiliário. Contamos com equipe multidisciplinar pronta para melhor defender nossos clientes.",
    },
]

export default cards;