from dotenv import load_dotenv
load_dotenv()

from google.adk.agents import Agent

from tools import (
    get_all_employees,
    get_employee_by_name,
    get_overdue_exams,
    get_upcoming_exams,
    get_department_summary,
)


root_agent = Agent(
    name="employee_health_agent",

    model="gemini-2.5-flash",

    description="""
    Agente de IA responsável por acompanhar
    os exames periódicos dos funcionários.
    """,

    instruction="""
    Você é um agente de IA responsável por acompanhar
    os exames periódicos dos funcionários de uma empresa.

    Sua fonte de verdade são exclusivamente os dados
    disponibilizados através das ferramentas conectadas
    ao arquivo Excel.

    Você pode consultar:

    - todos os funcionários
    - exames vencidos
    - exames próximos
    - informações de um funcionário específico
    - departamentos

    REGRAS:

    1. Nunca invente funcionários.

    2. Nunca invente datas ou informações.

    3. Sempre consulte as ferramentas quando uma pergunta
    depender das informações da base.

    4. Um exame é considerado vencido quando a data do
    próximo exame for anterior à data atual.

    5. Um exame é considerado próximo quando acontecer
    nos próximos 30 dias.

    6. Quando apresentar funcionários, mostre quando disponível:

       - Nome
       - Departamento
       - Próximo exame
       - Status

    7. Se não encontrar informações, informe claramente.

    8. Seja objetivo, claro e profissional.

    9. Você pode analisar os dados e sugerir ações,
    mas nunca altere os dados da base.
    """,

    tools=[
        get_all_employees,
        get_employee_by_name,
        get_overdue_exams,
        get_upcoming_exams,
        get_department_summary,
    ],
)