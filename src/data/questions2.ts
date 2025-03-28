export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  export const questions: Question[] = [
    {
      question: "No contexto da governança de TI, qual é o principal objetivo do COBIT?",
      options: [
        "Fornecer diretrizes para desenvolvimento de software",
        "Garantir conformidade regulatória e alinhamento estratégico",
        "Implementar metodologias ágeis em projetos de TI",
        "Gerenciar redes corporativas de maneira eficiente"
      ],
      answer: "Garantir conformidade regulatória e alinhamento estratégico"
    },
    {
      question: "O que caracteriza um bom modelo de governança corporativa em TI?",
      options: [
        "Uso exclusivo de metodologias ágeis para gestão de projetos",
        "Decisões descentralizadas e independentes das áreas de negócio",
        "Alinhamento dos processos de TI com os objetivos estratégicos da empresa",
        "Foco exclusivo na redução de custos operacionais"
      ],
      answer: "Alinhamento dos processos de TI com os objetivos estratégicos da empresa"
    },
    {
      question: "Qual é a principal vantagem de adotar um modelo ITIL em uma organização?",
      options: [
        "Aprimorar a gestão de serviços de TI por meio de boas práticas",
        "Reduzir a necessidade de equipes especializadas em TI",
        "Criar sistemas mais seguros contra ataques cibernéticos",
        "Automatizar completamente todos os processos de TI"
      ],
      answer: "Aprimorar a gestão de serviços de TI por meio de boas práticas"
    },
    {
      question: "Como um bom planejamento estratégico de TI impacta uma empresa?",
      options: [
        "Garante que todos os processos de TI sejam terceirizados",
        "Elimina a necessidade de controles financeiros",
        "Reduz a flexibilidade organizacional para mudanças",
        "Melhora a eficiência e o alinhamento com os objetivos da empresa"
      ],
      answer: "Melhora a eficiência e o alinhamento com os objetivos da empresa"
    },
    {
      question: "Qual é a relação entre governança de TI e gestão de riscos?",
      options: [
        "A governança de TI minimiza riscos ao estabelecer diretrizes e controles",
        "A gestão de riscos substitui a governança de TI em decisões estratégicas",
        "Governança de TI e gestão de riscos são áreas sem correlação direta",
        "A governança de TI apenas documenta os riscos, sem atuar na mitigação"
      ],
      answer: "A governança de TI minimiza riscos ao estabelecer diretrizes e controles"
    },
    {
      question: "No contexto da gestão de TI, o que é Shadow IT?",
      options: [
        "Sistemas e soluções tecnológicas utilizados sem aprovação do setor de TI",
        "Um framework de cibersegurança para redes empresariais",
        "Um modelo de outsourcing para infraestrutura de TI",
        "Uma metodologia para desenvolvimento seguro de software"
      ],
      answer: "Sistemas e soluções tecnológicas utilizados sem aprovação do setor de TI"
    },
    {
      question: "O que diferencia um KPI de um OKR no gerenciamento de TI?",
      options: [
        "Os KPIs são voltados para metas fixas, enquanto os OKRs focam em metas desafiadoras",
        "OKRs são métricas operacionais e KPIs são metas estratégicas",
        "KPIs são indicadores qualitativos e OKRs são quantitativos",
        "OKRs são utilizados apenas em startups e KPIs em grandes empresas"
      ],
      answer: "Os KPIs são voltados para metas fixas, enquanto os OKRs focam em metas desafiadoras"
    },
    {
      question: "Qual dos seguintes é um princípio da governança corporativa segundo o IBGC?",
      options: [
        "Centralização de decisões exclusivamente na diretoria de TI",
        "Transparência na divulgação de informações relevantes",
        "Foco exclusivo na redução de custos operacionais",
        "Uso obrigatório de tecnologia proprietária"
      ],
      answer: "Transparência na divulgação de informações relevantes"
    },
    {
      question: "O que diferencia um modelo de TI centralizado de um descentralizado?",
      options: [
        "Modelos centralizados possuem menor custo, enquanto os descentralizados são mais flexíveis",
        "TI centralizada significa terceirização total dos serviços",
        "Na descentralização, a TI toma decisões sem envolver as áreas de negócio",
        "Modelos centralizados eliminam completamente a necessidade de segurança da informação"
      ],
      answer: "Modelos centralizados possuem menor custo, enquanto os descentralizados são mais flexíveis"
    },
    {
      question: "Qual é um dos desafios da implementação de governança de TI em grandes empresas?",
      options: [
        "Baixa resistência da equipe técnica",
        "Excesso de regulação governamental",
        "Dificuldade em integrar TI aos objetivos estratégicos",
        "Falta de frameworks disponíveis no mercado"
      ],
      answer: "Dificuldade em integrar TI aos objetivos estratégicos"
    },
    {
      question: "Qual a importância do compliance em TI?",
      options: [
        "Garantir que a empresa siga normas e regulamentos aplicáveis",
        "Evitar o uso de tecnologias emergentes no ambiente corporativo",
        "Garantir que apenas a equipe de TI possa tomar decisões estratégicas",
        "Reduzir os custos com licenciamento de software"
      ],
      answer: "Garantir que a empresa siga normas e regulamentos aplicáveis"
    },
    {
      question: "O que caracteriza um contrato SLA bem definido?",
      options: [
        "Metas claras de desempenho e suporte técnico estabelecido",
        "Flexibilidade total para alterar termos sem aviso prévio",
        "Exclusão de penalidades em caso de descumprimento",
        "Garantia de 100% de disponibilidade dos serviços"
      ],
      answer: "Metas claras de desempenho e suporte técnico estabelecido"
    },
    {
      question: "Qual é um dos principais desafios da gestão de TI em empresas multinacionais?",
      options: [
        "Necessidade de alinhar políticas de TI entre diferentes legislações",
        "Ausência de regulamentações para tecnologias emergentes",
        "Inexistência de frameworks de governança de TI no mercado",
        "Redução do orçamento de TI devido à descentralização"
      ],
      answer: "Necessidade de alinhar políticas de TI entre diferentes legislações"
    },
    {
      question: "Como a TI pode agregar valor ao negócio de uma empresa?",
      options: [
        "Alinhando tecnologia com objetivos estratégicos e inovação",
        "Reduzindo a autonomia das áreas de negócio sobre suas operações",
        "Eliminando processos tradicionais e manuais sem análise prévia",
        "Centralizando todas as decisões estratégicas no setor de TI"
      ],
      answer: "Alinhando tecnologia com objetivos estratégicos e inovação"
    },
    {
      question: "Qual é o papel da TI no modelo de governança corporativa?",
      options: [
        "Apoiar e sustentar a estratégia empresarial por meio da tecnologia",
        "Atuar isoladamente na empresa sem necessidade de alinhamento estratégico",
        "Garantir apenas a funcionalidade de sistemas e infraestrutura",
        "Controlar exclusivamente a segurança da informação"
      ],
      answer: "Apoiar e sustentar a estratégia empresarial por meio da tecnologia"
    },
    {
        question: "Como a TI pode contribuir para a gestão de riscos corporativos?",
        options: [
          "Implementando controles, monitoramento contínuo e mitigação de ameaças",
          "Garantindo que todos os sistemas funcionem offline para evitar ataques",
          "Abolindo o uso de softwares de terceiros na empresa",
          "Limitando o uso de redes sociais pelos funcionários"
        ],
        answer: "Implementando controles, monitoramento contínuo e mitigação de ameaças"
      },
      {
        question: "O que é um Comitê de Governança de TI?",
        options: [
          "Um grupo responsável por alinhar TI à estratégia do negócio",
          "Uma equipe que gerencia exclusivamente a segurança cibernética",
          "Uma entidade reguladora que fiscaliza compliance em TI",
          "Um comitê que supervisiona apenas projetos de inovação tecnológica"
        ],
        answer: "Um grupo responsável por alinhar TI à estratégia do negócio"
      },
      {
        question: "No contexto da governança de TI, o que é um framework TOGAF?",
        options: [
          "Uma estrutura para desenvolvimento de arquiteturas empresariais",
          "Uma metodologia ágil para desenvolvimento de software",
          "Uma ferramenta para gerenciamento de redes de TI",
          "Um protocolo de segurança para ambientes corporativos"
        ],
        answer: "Uma estrutura para desenvolvimento de arquiteturas empresariais"
      },
      {
        question: "O que é a Matriz RACI na governança de TI?",
        options: [
          "Uma ferramenta para definir responsabilidades e papéis em projetos",
          "Um modelo para priorização de investimentos em TI",
          "Um framework para gerenciamento de riscos cibernéticos",
          "Uma metodologia para definir KPIs de TI"
        ],
        answer: "Uma ferramenta para definir responsabilidades e papéis em projetos"
      },
      {
        question: "Como um modelo de governança de TI eficiente impacta a inovação?",
        options: [
          "Facilita a implementação de novas tecnologias com alinhamento estratégico",
          "Elimina riscos e desafios associados a mudanças tecnológicas",
          "Garante que todas as decisões sejam tomadas exclusivamente pelo setor de TI",
          "Impede investimentos em tecnologias disruptivas"
        ],
        answer: "Facilita a implementação de novas tecnologias com alinhamento estratégico"
      },
      {
        question: "Qual é a importância da arquitetura corporativa na governança de TI?",
        options: [
          "Definir um modelo estruturado que alinhe tecnologia aos objetivos do negócio",
          "Criar um ambiente tecnológico isolado para proteger informações sigilosas",
          "Garantir que todas as soluções tecnológicas sejam proprietárias",
          "Evitar a digitalização de processos críticos da empresa"
        ],
        answer: "Definir um modelo estruturado que alinhe tecnologia aos objetivos do negócio"
      },
      {
        question: "No contexto de governança de TI, o que é um Roadmap Tecnológico?",
        options: [
          "Um planejamento estratégico sobre adoção e evolução tecnológica",
          "Uma metodologia para desenvolvimento ágil de software",
          "Uma ferramenta de monitoramento de segurança cibernética",
          "Uma estratégia para reduzir custos de TI em longo prazo"
        ],
        answer: "Um planejamento estratégico sobre adoção e evolução tecnológica"
      },
      {
        question: "O que diferencia governança de TI de gestão de TI?",
        options: [
          "A governança define diretrizes estratégicas, enquanto a gestão executa processos",
          "A governança trata apenas de infraestrutura de TI",
          "A gestão de TI se preocupa exclusivamente com segurança da informação",
          "A governança de TI é uma área separada que não se relaciona com a gestão de TI"
        ],
        answer: "A governança define diretrizes estratégicas, enquanto a gestão executa processos"
      },
      {
        question: "Como a TI pode apoiar a conformidade regulatória de uma organização?",
        options: [
          "Implementando controles, auditorias e políticas de segurança",
          "Reduzindo o número de sistemas utilizados na empresa",
          "Garantindo que todas as decisões tecnológicas sejam tomadas pelo setor jurídico",
          "Criando um ambiente totalmente offline para evitar vazamentos de dados"
        ],
        answer: "Implementando controles, auditorias e políticas de segurança"
      },
      {
        question: "O que é um BSC (Balanced Scorecard) na gestão de TI?",
        options: [
          "Um modelo para medir e gerenciar desempenho estratégico",
          "Uma metodologia de desenvolvimento de software",
          "Um padrão de segurança para proteger infraestruturas críticas",
          "Uma técnica de gerenciamento de redes corporativas"
        ],
        answer: "Um modelo para medir e gerenciar desempenho estratégico"
      },
      {
        question: "Qual a relação entre governança de TI e ESG?",
        options: [
          "A governança de TI apoia práticas sustentáveis, sociais e éticas nas empresas",
          "O ESG substitui a necessidade de governança de TI",
          "Governança de TI e ESG são áreas completamente independentes",
          "ESG foca exclusivamente em práticas ambientais, sem envolvimento da TI"
        ],
        answer: "A governança de TI apoia práticas sustentáveis, sociais e éticas nas empresas"
      },
      {
        question: "O que é a ISO 27001?",
        options: [
          "Uma norma internacional para gestão da segurança da informação",
          "Um framework para gestão ágil de projetos de TI",
          "Um padrão para desenvolvimento de software seguro",
          "Uma certificação obrigatória para todas as empresas de TI"
        ],
        answer: "Uma norma internacional para gestão da segurança da informação"
      },
      {
        question: "O que caracteriza um modelo de TI bimodal?",
        options: [
          "A coexistência de TI tradicional com TI ágil e inovadora",
          "A implementação exclusiva de soluções baseadas em nuvem",
          "A separação completa entre TI estratégica e operacional",
          "O uso obrigatório de inteligência artificial em processos empresariais"
        ],
        answer: "A coexistência de TI tradicional com TI ágil e inovadora"
      },
      {
        question: "Como a gestão de TI pode impactar a experiência do cliente?",
        options: [
          "Melhorando a eficiência operacional e a personalização dos serviços",
          "Eliminando a necessidade de interação humana em serviços",
          "Centralizando todas as decisões de atendimento no setor de TI",
          "Substituindo todos os processos tradicionais por automação"
        ],
        answer: "Melhorando a eficiência operacional e a personalização dos serviços"
      },
      {
        question: "Por que a mensuração do ROI em TI é importante?",
        options: [
          "Para avaliar o retorno financeiro e o impacto das iniciativas tecnológicas",
          "Para garantir que todas as soluções adotadas sejam proprietárias",
          "Para evitar qualquer tipo de investimento em novas tecnologias",
          "Para centralizar todas as decisões de TI no departamento financeiro"
        ],
        answer: "Para avaliar o retorno financeiro e o impacto das iniciativas tecnológicas"
      }
  ];