export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  export const questions: Question[] = [
    {
      question: "Por que o princípio 'Software em funcionamento' é mais importante que documentação extensa no desenvolvimento ágil?",
      options: [
        "Porque foca na entrega de valor ao usuário e permite ajustes rápidos",
        "Porque reduz a necessidade de comunicação entre as equipes durante o projeto",
        "Porque a documentação detalhada pode atrasar a entrega, mesmo sem impactar o produto final",
        "Porque a documentação extensa é sempre dispensável no desenvolvimento de software"
      ],
      answer: "Porque foca na entrega de valor ao usuário e permite ajustes rápidos"
    },
    {
      question: "Como a capacidade de adaptação a mudanças no Agile impacta o sucesso de projetos de TI em comparação com métodos tradicionais?",
      options: [
        "Permite ajustes rápidos com base no feedback contínuo, garantindo alinhamento constante com as necessidades do cliente",
        "Reduz a necessidade de planejamento, o que pode levar a um produto final com falhas de qualidade",
        "Garante que as mudanças sejam evitadas, garantindo que o plano inicial seja seguido rigorosamente",
        "Foca mais na documentação do que no desenvolvimento do software, o que pode atrasar a entrega"
      ],
      answer: "Permite ajustes rápidos com base no feedback contínuo, garantindo alinhamento constante com as necessidades do cliente"
    },
    {
      question: "Quais são as vantagens de reduzir a documentação inicial em metodologias ágeis e como isso impacta a eficiência do projeto?",
      options: [
        "Permite que o time se concentre no desenvolvimento de software funcional e adaptável, aumentando a eficiência e reduzindo desperdícios",
        "Garante que os requisitos sejam documentados detalhadamente, mas com menos risco de mudanças, aumentando a previsibilidade do projeto",
        "Faz com que a equipe se dependa mais de reuniões, o que pode diminuir a produtividade, mas garante a qualidade",
        "Ajuda a evitar mudanças durante o projeto, o que permite uma entrega mais rápida e com menos revisões"
      ],
      answer: "Permite que o time se concentre no desenvolvimento de software funcional e adaptável, aumentando a eficiência e reduzindo desperdícios"
    },
    {
      question: "Como a governança de TI se integra à governança corporativa e qual seu papel na competitividade das organizações?",
      options: [
        "A governança de TI garante que as tecnologias estejam alinhadas com os objetivos da organização, apoiando a transparência e a inovação, o que fortalece a competitividade",
        "A governança de TI foca exclusivamente na redução de custos operacionais, sem impactar diretamente a estratégia ou a competitividade",
        "A governança de TI se limita a gerenciar a infraestrutura tecnológica, sem conexão com a governança corporativa ou os objetivos organizacionais",
        "A governança de TI prioriza a conformidade regulatória, sem considerar a competitividade ou a inovação tecnológica"
      ],
      answer: "A governança de TI garante que as tecnologias estejam alinhadas com os objetivos da organização, apoiando a transparência e a inovação, o que fortalece a competitividade"
    },
    {
      question: "Por que um profissional de governança de TI deve priorizar conhecimentos em gestão de riscos e segurança em vez de detalhes técnicos de desenvolvimento de software?",
      options: [
        "Porque a governança de TI foca em garantir que os riscos sejam minimizados e que a segurança da informação seja mantida, alinhando a TI aos objetivos de negócios",
        "Porque detalhes técnicos de desenvolvimento de software são irrelevantes para a gestão de TI e não afetam a segurança organizacional",
        "Porque a governança de TI envolve apenas aspectos financeiros e não está relacionada com a segurança ou a gestão de riscos",
        "Porque um profissional de governança deve se concentrar apenas em aspectos técnicos, deixando a segurança e os riscos para as equipes de TI"
      ],
      answer: "Porque a governança de TI foca em garantir que os riscos sejam minimizados e que a segurança da informação seja mantida, alinhando a TI aos objetivos de negócios"
    },
    {
      question: "Quais elementos devem constar em uma política de segurança da informação eficaz e como ela se relaciona com a governança de TI?",
      options: [
        "A política deve incluir responsabilidades claras, normas de uso, resposta a incidentes e garantir a confidencialidade, integridade e disponibilidade, alinhando-se aos objetivos de governança de TI para proteger os ativos da organização",
        "A política deve focar apenas na proteção contra ataques cibernéticos e não abordar questões de gestão de riscos ou governança",
        "A política de segurança deve ser restritiva, permitindo o mínimo de acessos possíveis, sem considerar a eficiência dos sistemas de TI ou os objetivos organizacionais",
        "A política de segurança da informação não precisa considerar a governança de TI, pois são áreas independentes com objetivos distintos"
      ],
      answer: "A política deve incluir responsabilidades claras, normas de uso, resposta a incidentes e garantir a confidencialidade, integridade e disponibilidade, alinhando-se aos objetivos de governança de TI para proteger os ativos da organização"
    },
    {
      question: "Por que a classificação de informações é um controle organizacional e não técnico na ISO 27001, e como ela contribui para a segurança corporativa?",
      options: [
        "A classificação de informações é um controle organizacional porque envolve políticas e processos para definir o acesso e a proteção das informações, ajudando a garantir que dados sensíveis sejam tratados de forma apropriada",
        "A classificação de informações é um controle técnico, pois depende de ferramentas automatizadas para definir níveis de acesso e proteger dados confidenciais",
        "A classificação de informações é irrelevante para a segurança corporativa, pois todos os dados devem ser tratados da mesma forma independentemente de sua importância",
        "A classificação de informações deve ser feita apenas em sistemas de TI, sem considerar as políticas organizacionais, pois são as ferramentas que determinam a segurança"
      ],
      answer: "A classificação de informações é um controle organizacional porque envolve políticas e processos para definir o acesso e a proteção das informações, ajudando a garantir que dados sensíveis sejam tratados de forma apropriada"
    },
    {
      question: "Como a gestão de projetos se diferencia da gestão empresarial tradicional e em quais aspectos elas se complementam?",
      options: [
        "A gestão de projetos é temporária e foca em entregas específicas com prazos e orçamentos definidos, enquanto a gestão empresarial é contínua e lida com operações rotineiras; elas se complementam nas habilidades de liderança, comunicação e tomada de decisão",
        "A gestão de projetos foca apenas no controle financeiro das operações, enquanto a gestão empresarial lida com recursos humanos e outras funções operacionais, sem interação entre ambas",
        "A gestão de projetos é mais rígida em relação às metodologias, enquanto a gestão empresarial tradicional é completamente flexível e não precisa de planejamento",
        "A gestão de projetos é exclusivamente voltada para o desenvolvimento de produtos, enquanto a gestão empresarial tradicional se concentra em marketing e vendas, sem elementos comuns"
      ],
      answer: "A gestão de projetos é temporária e foca em entregas específicas com prazos e orçamentos definidos, enquanto a gestão empresarial é contínua e lida com operações rotineiras; elas se complementam nas habilidades de liderança, comunicação e tomada de decisão"
    },
    {
      question: "Quais ferramentas e práticas você utilizaria para garantir um engajamento eficaz das partes interessadas em um projeto de TI desde seu início?",
      options: [
        "Utilizaria a matriz de poder e interesse para classificar stakeholders e elaboraria um plano de comunicação com atualizações regulares e canais definidos, garantindo alinhamento contínuo com as expectativas",
        "Focaria apenas na entrega final do projeto, minimizando a comunicação com as partes interessadas até o final para evitar distrações durante o desenvolvimento",
        "Prioritaria a comunicação exclusiva com os stakeholders mais poderosos, ignorando os de menor influência, já que eles têm menos impacto no resultado do projeto",
        "Envolveria as partes interessadas apenas nas fases de testes e entrega, pois neste momento elas teriam uma visão mais clara do produto final"
      ],
      answer: "Utilizaria a matriz de poder e interesse para classificar stakeholders e elaboraria um plano de comunicação com atualizações regulares e canais definidos, garantindo alinhamento contínuo com as expectativas"
    },
    {
      question: "Como você estruturaria um plano de ação para otimizar os processos de pesquisa em uma universidade, considerando as demoras na liberação de recursos e espaços laboratoriais?",
      options: [
        "Utilizaria a análise de processos para mapear os fluxos, identificar gargalos e aplicar técnicas como PDCA, promovendo melhorias graduais na liberação de verbas e na gestão de espaços laboratoriais, além de reduzir a burocracia nas aprovações",
        "Focaria em automatizar todas as etapas de solicitação de recursos e alocação de espaços sem realizar uma análise prévia dos processos, confiando apenas na tecnologia para resolver os problemas",
        "Implantaria uma mudança radical, como a troca de toda a equipe de gestão de processos, para melhorar a eficiência sem mapear ou entender as causas dos gargalos existentes",
        "Reduziria a quantidade de projetos acadêmicos para diminuir a carga de trabalho dos processos, sem considerar a otimização dos fluxos ou melhorias contínuas"
      ],
      answer: "Utilizaria a análise de processos para mapear os fluxos, identificar gargalos e aplicar técnicas como PDCA, promovendo melhorias graduais na liberação de verbas e na gestão de espaços laboratoriais, além de reduzir a burocracia nas aprovações"
    }
  ];




 