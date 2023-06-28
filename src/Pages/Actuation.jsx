import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../Components/Banner'
import banner from '../assets/banner-bg-empresa.png'

function Actuation() {
    const { actuation } = useParams()

    const content = [
        {
            id: 1,
            title: "Direito Empresarial",
            description: "Direito Empresarial e Societário é o ramo do direito relacionado ao estudo das sociedades empresárias (dentre as quais se destacam a sociedade por quotas de responsabilidade limitada e a sociedade anônima, entre outras), bem como das questões que dizem respeito aos sócios e acionistas dessas pessoas jurídicas e às diversas situações que possam ocorrer no seu seio, como alterações de controle e de participação, questões gerenciais, conflitos societários e outros fenômenos.",
            services: [
                'Elaboração, revisão e alteração de contratos civis e comerciais;',
                'Estatuto, Contrato Social, Acordo de Acionista e Joint Venture;',
                'Constituição e planejamento de estruturas societárias no Brasil e no exterior;',
                'Representação no Brasil e no exterior de sociedades e/ou seus sócios e acionistas;',
                'Assessoria jurídica na prevenção de responsabilidade da sociedade e administradores;',
                'Restruturação societária;',
                'Due diligence, Governança Corporativa e Compliance;',
                'Assessoria jurídica para elaboração de Certificate of Incumbency;'
            ],
            p1: 'Também chamado de Direito comercial ou direito empresarial, é um ramo do direito privado que pode ser entendido como o conjunto de normas disciplinadoras da atividade negocial do empresário, e de qualquer pessoa física ou jurídica, destinada a fins de natureza econômica, desde que habitual e dirigida à produção de bens ou serviços conducentes a resultados patrimoniais ou lucrativos, e que a exerça com a racionalidade própria de “empresa”, sendo um ramo especial de direito privado. Em Portugal, veja-se direito comercial português. Rege os atos tidos como comerciais. ',
            p2: 'Assim entendido, o direito empresarial abrange um conjunto variado de matérias, incluindo as obrigações dos empresários, as sociedades empresárias, os contratos especiais de comércio, os títulos de crédito, a propriedade intelectual, entre outras. Desde 1886 nos Estados Unidos, as corporações passaram a ter direitos humanos, antes reservados apenas a pessoas físicas.'

        },
        {
            id: 2,
            title: "Direito teste",
            description: "Direito Empresarial e Societário é o ramo do direito relacionado ao estudo das sociedades empresárias (dentre as quais se destacam a sociedade por quotas de responsabilidade limitada e a sociedade anônima, entre outras), bem como das questões que dizem respeito aos sócios e acionistas dessas pessoas jurídicas e às diversas situações que possam ocorrer no seu seio, como alterações de controle e de participação, questões gerenciais, conflitos societários e outros fenômenos.",
            services: [
                'Elaboração, revisão e alteração de contratos civis e comerciais;',
                'Estatuto, Contrato Social, Acordo de Acionista e Joint Venture;',
                'Constituição e planejamento de estruturas societárias no Brasil e no exterior;',
                'Representação no Brasil e no exterior de sociedades e/ou seus sócios e acionistas;',
                'Assessoria jurídica na prevenção de responsabilidade da sociedade e administradores;',
                'Restruturação societária;',
                'Due diligence, Governança Corporativa e Compliance;',
                'Assessoria jurídica para elaboração de Certificate of Incumbency;'
            ],
            p1: 'Também chamado de Direito comercial ou direito empresarial, é um ramo do direito privado que pode ser entendido como o conjunto de normas disciplinadoras da atividade negocial do empresário, e de qualquer pessoa física ou jurídica, destinada a fins de natureza econômica, desde que habitual e dirigida à produção de bens ou serviços conducentes a resultados patrimoniais ou lucrativos, e que a exerça com a racionalidade própria de “empresa”, sendo um ramo especial de direito privado. Em Portugal, veja-se direito comercial português. Rege os atos tidos como comerciais. ',
            p2: 'Assim entendido, o direito empresarial abrange um conjunto variado de matérias, incluindo as obrigações dos empresários, as sociedades empresárias, os contratos especiais de comércio, os títulos de crédito, a propriedade intelectual, entre outras. Desde 1886 nos Estados Unidos, as corporações passaram a ter direitos humanos, antes reservados apenas a pessoas físicas.'

        }
    ]

    return (
        <Banner bg={banner}>
            <div>
                {
                    content.filter(item => item.title.toLowerCase() === actuation.toLocaleLowerCase().split('-').join(' '))
                        .map(actuation => (
                            <div>
                                <h2 className="title">{actuation.title}</h2>
                            </div>
                        ))
                }
            </div>
        </Banner>
    )
}

export default Actuation