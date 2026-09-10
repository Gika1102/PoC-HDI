# HDI PoC - Saúde Ocupacional com IA Agêntica

Prova de Conceito de um agente inteligente para gerenciamento proativo de exames periódicos e conformidade com a NR-7 (Norma Regulamentadora de Saúde Ocupacional).

## 🎯 Visão Geral

Este projeto demonstra como um **agente de IA autônomo** pode ser aplicado ao contexto de Recursos Humanos, especificamente na gestão de exames periódicos de funcionários. O agente monitora a base corporativa, entende o contexto individual de cada colaborador e dispara ações necessárias de forma proativa, garantindo conformidade com regulamentações de saúde ocupacional.

### Características Principais

- **Agente de IA Conversacional**: Interface chat para consultas sobre exames periódicos
- **Centro de Comando em Tempo Real**: Visualização interativa da telemetria e estado dos processos
- **Jornada de Autonomia**: Demonstração de 4 estágios de evolução do agente (observe → sugira → execute → autônomo)
- **Integração com Dados**: Leitura de base de funcionários em Excel com informações de exames
- **Conformidade NR-7**: Gestão alinhada com normas de saúde ocupacional

## 📋 Pré-requisitos

- **Python 3.9+**
- **Node.js** (opcional, para desenvolvimento frontend)
- **Chave de API Google Gemini**

## 🚀 Instalação e Setup

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/HDI-PoC.git
cd HDI-PoC-main
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto ou na pasta `backend/`:

```bash
GOOGLE_API_KEY=sua-chave-gemini-aqui
```

### 3. Instalar Dependências do Backend

```bash
cd backend
python -m venv .venv

# Windows
.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate

pip install -r requirements.txt
```

### 4. Preparar Dados

Coloque seu arquivo Excel com os dados de funcionários e exames no diretório `backend/`. O arquivo deve conter colunas para:
- Nome do funcionário
- Departamento
- Data do próximo exame
- Status do exame

## 💻 Executando o Projeto

### Iniciar o Backend (FastAPI + Agente)

```bash
cd backend
python -m uvicorn api:app --reload
```

O servidor estará disponível em: `http://localhost:8000`

### Acessar o Frontend

Abra seu navegador e acesse:

```
http://localhost:8000
```

Você será redirecionado para o portal principal com as três seções:

1. **Início / Visão Geral** - Introdução ao projeto
2. **Centro de Comando** - Interface chat com o agente IA
3. **Jornada & Autonomia** - Demonstração dos níveis de evolução

## 📁 Estrutura do Projeto

```
HDI_PoC-main/
├── backend/                      # Backend Python/FastAPI
│   ├── agent.py                 # Definição do agente raiz
│   ├── api.py                   # Endpoints FastAPI
│   ├── tools.py                 # Ferramentas disponíveis ao agente
│   ├── config.py                # Configurações
│   ├── requirements.txt          # Dependências Python
│   └── .venv/                   # Ambiente virtual
├── css/                          # Estilos globais
│   ├── variables.css            # Variáveis de design (cores, tokens)
│   ├── layout.css               # Layout geral
│   ├── agent-chat.css           # Estilos do chat
│   ├── command-center.css       # Estilos do Centro de Comando
│   └── drawer.css               # Estilos do painel lateral
├── js/                           # JavaScript frontend
│   └── navigation.js            # Lógica de navegação
├── index.html                   # Página inicial
├── command-center.html          # Centro de Comando
├── agent-journey.html           # Jornada de Autonomia
└── README.md                    # Este arquivo
```

## 🤖 Como o Agente Funciona

### Tecnologias Utilizadas

- **LLM**: Google Gemini 2.5 Flash
- **Framework**: Google ADK (Agentic Development Kit)
- **Backend**: FastAPI + Uvicorn
- **Frontend**: HTML5, CSS3, JavaScript vanilla

### Ferramentas Disponíveis ao Agente

O agente tem acesso às seguintes funções:

1. **`get_all_employees()`** - Retorna lista completa de funcionários
2. **`get_employee_by_name(name)`** - Busca informações de um funcionário específico
3. **`get_overdue_exams()`** - Lista exames vencidos
4. **`get_upcoming_exams()`** - Lista exames próximos (próximos 30 dias)
5. **`get_department_summary(department)`** - Resumo por departamento

### Instruções do Agente

O agente segue regras estritas:

- ✅ Consulta ferramentas antes de responder
- ✅ Nunca inventa dados
- ✅ Apresenta informações de forma clara e profissional
- ✅ Analisa dados e sugere ações
- ❌ Nunca altera a base de dados original
- ❌ Nunca assume informações não disponíveis nas ferramentas

## 🎨 Estilo e Design

O projeto utiliza o design system Kyndryl:

- **Cores principais**: Dark (#1C2325), Teal (#00A4A6), Red (#D7373A)
- **Tipografia**: System fonts (Arial, Helvetica, sans-serif)
- **Componentes**: Cards, badges, navegação lateral, drawers

Todas as cores e tokens estão centralizados em `css/variables.css`.

## 📡 API Endpoints

### Chat com Agente

```http
POST /chat
Content-Type: application/json

{
  "message": "Quais funcionários têm exames vencidos?"
}
```

### Status do Sistema

```http
GET /
```

Retorna status da API e informações básicas.

## 🔄 Estágios de Autonomia

O projeto demonstra 4 níveis de evolução do agente:

1. **Observe** 👀 - Agente monitora e apresenta dados
2. **Suggest** 💡 - Agente analisa e sugere ações
3. **Execute** ⚙️ - Agente executa ações (com aprovação)
4. **Autonomous** 🚀 - Agente age autonomamente dentro de conformidade

Conheça mais visitando a página **Jornada & Autonomia**.

## 🛠️ Desenvolvimento

### Adicionar Nova Ferramenta

Edite `backend/tools.py` e adicione sua função:

```python
def minha_ferramenta(parametro: str) -> str:
    """Descrição da ferramenta"""
    # Implementação
    return resultado
```

Depois, adicione à lista de `tools` em `agent.py`.

### Modificar Instruções do Agente

Edite o campo `instruction` em `backend/agent.py` para alterar o comportamento.

### Atualizar Interface

Modifique os arquivos HTML e CSS em `css/` e `js/` conforme necessário.

## 📊 Base de Dados

O projeto lê dados de um arquivo Excel. Certifique-se de que o arquivo está na pasta `backend/` e contém as colunas esperadas.

**Colunas necessárias:**
- `Nome` - Nome do funcionário
- `Departamento` - Departamento
- `Próximo Exame` - Data do próximo exame (YYYY-MM-DD)
- `Status` - Status atual (Vencido, Em Dia, Próximo)

## 🔐 Segurança

- A API está configurada com CORS aberto (`allow_origins=["*"]`)
- **Para produção**, restrinja os origens CORS
- Nunca exponha chaves de API em código
- Use variáveis de ambiente (`.env`)

## 📝 Logs e Debugging

O FastAPI está configurado com `--reload` em desenvolvimento. Para ver logs detalhados:

```bash
python -m uvicorn api:app --reload --log-level debug
```

## 🤝 Contribuindo

1. Crie uma branch: `git checkout -b feature/minha-feature`
2. Faça commit das mudanças: `git commit -m 'Adiciona minha-feature'`
3. Push para a branch: `git push origin feature/minha-feature`
4. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas:
- Consulte a documentação do Google ADK: [adk.dev](https://adk.dev)
- FastAPI docs: [fastapi.tiangolo.com](https://fastapi.tiangolo.com)
- Verifique se suas dependências estão atualizadas

## 📜 Licença

Este projeto é um PoC interno da Kyndryl. Verifique a política de uso interno.

## 🎓 Referências

- **Google Gemini API**: Modelos de IA generativa
- **Google ADK**: Framework para desenvolvimento de agentes
- **FastAPI**: Web framework modern para Python
- **NR-7**: Norma Regulamentadora de Saúde Ocupacional
- **Microsoft Copilot Studio**: Plataforma de copilots

---

**Versão**: MVP NR-7  
**Data de Atualização**: Setembro 2026  
**Desenvolvido por**: Kyndryl • Equipe de IA Agêntica
