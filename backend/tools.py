import pandas as pd
from datetime import datetime
from pathlib import Path


# Caminho da pasta onde este arquivo está
BASE_DIR = Path(__file__).resolve().parent

# Arquivo Excel
EXCEL_PATH = BASE_DIR / "employees.xlsx"


def load_employees():
    """
    Carrega o arquivo Excel com os funcionários.
    """

    df = pd.read_excel(EXCEL_PATH)

    # Converte as colunas de data
    if "Last Exam" in df.columns:
        df["Last Exam"] = pd.to_datetime(
            df["Last Exam"],
            errors="coerce"
        )

    if "Next Exam" in df.columns:
        df["Next Exam"] = pd.to_datetime(
            df["Next Exam"],
            errors="coerce"
        )

    return df


def get_all_employees() -> dict:
    """
    Retorna todos os funcionários existentes na base.

    Use esta ferramenta quando precisar consultar
    informações gerais sobre os funcionários.
    """

    df = load_employees()

    # Converte datas para texto para facilitar
    # a leitura pelo modelo
    for column in ["Last Exam", "Next Exam"]:
        if column in df.columns:
            df[column] = df[column].dt.strftime("%Y-%m-%d")

    df = df.fillna("")

    return {
        "total": len(df),
        "employees": df.to_dict(orient="records")
    }


def get_overdue_exams() -> dict:
    """
    Retorna funcionários cujo exame periódico está vencido.
    """

    df = load_employees()

    today = pd.Timestamp(datetime.now().date())

    overdue = df[
        (df["Next Exam"].notna())
        & (df["Next Exam"] < today)
    ].copy()

    overdue["Next Exam"] = overdue[
        "Next Exam"
    ].dt.strftime("%Y-%m-%d")

    overdue = overdue.fillna("")

    return {
        "total": len(overdue),
        "employees": overdue.to_dict(orient="records")
    }


def get_upcoming_exams(days: int = 30) -> dict:
    """
    Retorna funcionários cujo exame acontecerá
    nos próximos X dias.

    Args:
        days: quantidade de dias a considerar.
    """

    df = load_employees()

    today = pd.Timestamp(datetime.now().date())

    limit_date = today + pd.Timedelta(days=days)

    upcoming = df[
        (df["Next Exam"].notna())
        & (df["Next Exam"] >= today)
        & (df["Next Exam"] <= limit_date)
    ].copy()

    upcoming["Next Exam"] = upcoming[
        "Next Exam"
    ].dt.strftime("%Y-%m-%d")

    upcoming = upcoming.fillna("")

    return {
        "period_days": days,
        "total": len(upcoming),
        "employees": upcoming.to_dict(orient="records")
    }


def get_employee_by_name(name: str) -> dict:
    """
    Busca um funcionário pelo nome.

    Args:
        name: nome completo ou parcial do funcionário.
    """

    df = load_employees()

    result = df[
        df["Employee"]
        .astype(str)
        .str.contains(
            name,
            case=False,
            na=False
        )
    ].copy()

    if result.empty:
        return {
            "found": False,
            "message": "Funcionário não encontrado."
        }

    for column in ["Last Exam", "Next Exam"]:
        if column in result.columns:
            result[column] = result[column].dt.strftime(
                "%Y-%m-%d"
            )

    result = result.fillna("")

    return {
        "found": True,
        "employees": result.to_dict(
            orient="records"
        )
    }


def get_department_summary() -> dict:
    """
    Retorna um resumo da quantidade de funcionários
    por departamento.
    """

    df = load_employees()

    summary = (
        df.groupby("Department")
        .size()
        .reset_index(name="Employees")
    )

    return {
        "departments": summary.to_dict(
            orient="records"
        )
    }