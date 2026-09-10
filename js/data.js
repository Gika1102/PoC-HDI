const departmentData = {
  copilotAgent: {
    title: "Kyndryl Agentic Hub • Copilot Studio",
    summary: "Interpretação e Tomada de Decisão Autônoma",
    owner: "Orquestrador IA Agêntica",
    color: "#FF462D",
    actions: [
      {
        name: "1. Consulta e Raciocínio sobre a Base",
        status: "ACTIVE",
        desc: "Agente avalia data do próximo exame, status atual e existência de agendamento em vez de aplicar apenas regras estáticas.",
        lastRun: "Tempo Real",
        channel: "Cérebro Copilot"
      },
      {
        name: "2. Priorização Autônoma de Pendências",
        status: "ACTIVE",
        desc: "Identificou 4 colaboradores que requerem atenção: 1 vencido (prioridade máxima) e 3 próximos do vencimento.",
        lastRun: "Agora",
        channel: "Algoritmo de Priorização"
      },
      {
        name: "3. Disparo de Instruções para o Power Automate",
        status: "ACTIVE",
        desc: "Gera o payload estruturado com texto personalizado e clínica sugerida para cada funcionário pendente.",
        lastRun: "Live",
        channel: "Orquestração"
      }
    ]
  },
  database: {
    title: "Base de Dados Fictícia de Funcionários",
    summary: "Dataverse / SharePoint List / Excel",
    owner: "Camada de Dados RH",
    color: "#29707A",
    actions: [
      {
        name: "Consulta de Registros de Funcionários",
        status: "ACTIVE",
        desc: "Acesso aos campos: Employee ID, Nome, E-mail, Data Nasc., Gênero, Área, Gestor, Último Exame e Status.",
        lastRun: "Sincronizado",
        channel: "Dataverse Connector"
      },
      {
        name: "Consulta Filtrada por Status Ocupacional",
        status: "ACTIVE",
        desc: "Leitura automatizada executada pelo agente sem necessidade de manipulação manual de planilhas.",
        lastRun: "2m atrás",
        channel: "Query Read"
      },
      {
        name: "Identificação de Agendamentos Existentes (Pedro Santos)",
        status: "ACTIVE",
        desc: "Pedro Santos possui exame próximo, porém já agendado. Decisão do agente: Não incomodar o colaborador.",
        lastRun: "Ignorado c/ Sucesso",
        channel: "Filtro Inteligente"
      }
    ]
  },
  externalBases: {
    title: "Bases Externas • Ministério da Saúde",
    summary: "Normas Regulamentadoras & Diretrizes NR-7",
    owner: "Ministério da Saúde / Governo Federal",
    color: "#3B82F6",
    actions: [
      {
        name: "Validação de Periodicidade Legal (NR-7)",
        status: "ACTIVE",
        desc: "Conformidade automática com a periodicidade anual e bienal de exames clínicos por faixa etária e grau de risco.",
        lastRun: "Conectado",
        channel: "API Governamental"
      },
      {
        name: "Consulta a Protocolos de Riscos Ocupacionais",
        status: "ACTIVE",
        desc: "Verificação dos exames complementares obrigatórios para funções com ruído, produtos químicos ou esforço repetitivo.",
        lastRun: "Atualizado",
        channel: "Base Normativa"
      },
      {
        name: "Monitoramento de Portarias e Atualizações",
        status: "ACTIVE",
        desc: "Integração contínua para aplicar alterações regulatórias sem necessidade de reconfiguração manual de fluxos.",
        lastRun: "Live Feed",
        channel: "Data Stream"
      }
    ]
  },
  clinics: {
    title: "Rede Credenciada & Geolocalização",
    summary: "Sugestão Inteligente de Clínicas",
    owner: "Saúde Ocupacional",
    color: "#B687AC",
    actions: [
      {
        name: "Clínica Demo Paulista (São Paulo - SP)",
        status: "ACTIVE",
        desc: "Sugerida automaticamente para colaboradores alocados no polo de São Paulo (Ex: Ana Silva).",
        lastRun: "Live",
        channel: "Geo Match"
      },
      {
        name: "Clínica Demo Centro (Rio de Janeiro - RJ)",
        status: "ACTIVE",
        desc: "Sugerida para os colaboradores da região central / RJ com pendência crítica (Ex: João Silva).",
        lastRun: "Live",
        channel: "Geo Match"
      },
      {
        name: "Validação de Horários Disponíveis",
        status: "INACTIVE",
        desc: "Integração futura para reserva de slots em tempo real diretamente pelo chat do Teams.",
        lastRun: "Evolução Futura",
        channel: "API de Terceiros"
      }
    ]
  },
  triage: {
    title: "Motor de Contexto e Classificação",
    summary: "Casos Reais Identificados na Base de Demonstração",
    owner: "Módulo de Inteligência",
    color: "#4AC5BB",
    actions: [
      {
        name: "Caso A: Funcionário em Dia",
        status: "INACTIVE",
        desc: "Exame válido por mais de 60 dias. Decisão do agente: Nenhuma ação ou contato necessário.",
        lastRun: "Dispensado",
        channel: "Bypass Automático"
      },
      {
        name: "Caso B: Ana Silva — Próximo do Vencimento",
        status: "ACTIVE",
        desc: "Vencimento em 15/09/2026 sem agendamento prévio. Decisão: Enviar lembrete com link da Clínica Demo Paulista.",
        lastRun: "Fila de Envio",
        channel: "Alerta Proativo"
      },
      {
        name: "Caso C: João Silva — Exame Vencido",
        status: "ACTIVE",
        desc: "Pendente desde 01/08/2026. Decisão: Comunicação prioritária de regularização urgente na Clínica Demo Centro.",
        lastRun: "Urgente",
        channel: "Alerta Crítico"
      }
    ]
  },
  promptEngine: {
    title: "Gerador de Mensagens Personalizadas",
    summary: "Geração de Linguagem Natural (LLM)",
    owner: "Copilot Generative AI",
    color: "#F4D25A",
    actions: [
      {
        name: "Template Lembrete: Ana Silva",
        status: "ACTIVE",
        desc: "'Olá, Ana. Identificamos que seu exame periódico deverá ser renovado até 15/09/2026. Clínica sugerida: Clínica Demo Paulista.'",
        lastRun: "Gerado",
        channel: "Mensagem Amigável"
      },
      {
        name: "Template Regularização Urgente: João Silva",
        status: "ACTIVE",
        desc: "'Olá, João. Identificamos que seu exame encontra-se pendente desde 01/08/2026. Pedimos agendamento imediato.'",
        lastRun: "Gerado",
        channel: "Mensagem Formal"
      },
      {
        name: "Validação Anti-Alucinação e Tom Corporativo",
        status: "ACTIVE",
        desc: "Garante que nenhuma data incorreta seja informada e respeita o contexto de cada colaborador.",
        lastRun: "Validado",
        channel: "Guardrails"
      }
    ]
  },
  dispatch: {
    title: "Power Automate • Disparador de Ações",
    summary: "Execução Proativa nos Canais Corporativos",
    owner: "Camada de Automação",
    color: "#FF462D",
    actions: [
      {
        name: "Disparo via Microsoft Teams (Adaptive Card)",
        status: "ACTIVE",
        desc: "Envio de cartão interativo direto no chat privado do colaborador com botão de agendamento.",
        lastRun: "Pronto",
        channel: "MS Teams Bot"
      },
      {
        name: "Disparo de Notificação por E-mail",
        status: "ACTIVE",
        desc: "Envio de e-mail institucional formatado com cópia oculta para registro de Saúde Ocupacional.",
        lastRun: "Pronto",
        channel: "Outlook 365"
      },
      {
        name: "Escalonamento para o Gestor (Carlos Souza)",
        status: "INACTIVE",
        desc: "Notificar gestores apenas se o exame permanecer vencido após 15 dias do primeiro aviso.",
        lastRun: "Programado",
        channel: "Trigger Automático"
      }
    ]
  },
  compliance: {
    title: "Compliance, NR-7 & Rastreabilidade",
    summary: "Registro de Auditoria e Governança",
    owner: "Recursos Humanos & Jurídico",
    color: "#187E3F",
    actions: [
      {
        name: "Registro de Envio na Base (Log de Auditoria)",
        status: "ACTIVE",
        desc: "Data, horário e canal da notificação são gravados automaticamente na linha do colaborador para comprovação.",
        lastRun: "Gravando",
        channel: "SharePoint / Dataverse"
      },
      {
        name: "Relatório de Exames Ocupacionais (NR-7)",
        status: "ACTIVE",
        desc: "Dashboard em tempo real para a equipe de Medicina do Trabalho acompanhar o índice de conformidade da empresa.",
        lastRun: "Atualizado",
        channel: "Power BI Feed"
      },
      {
        name: "Tratamento de Privacidade & LGPD",
        status: "ACTIVE",
        desc: "Apenas dados de datas e status são processados, sem exposição de prontuários médicos sensíveis.",
        lastRun: "Conforme",
        channel: "Security Policy"
      }
    ]
  }
};

// Aliases para garantir retrocompatibilidade em qualquer script
const modulesData = departmentData;
window.departmentData = departmentData;
window.modulesData = departmentData;