"""The dashboard page."""
from housing_risk.templates import template

import reflex as rx


@template(route="/arizona", title="Arizona", image="/marizona.gif")
def dashboard() -> rx.Component:
    """The dashboard page.

    Returns:
        The UI for the dashboard page.
    """
    return rx.chakra.vstack(
        rx.chakra.heading("Arizona", font_size="3em"),
        rx.chakra.text("Welcome to Reflex!"),
        rx.chakra.text(
            "You can edit this page in ",
            rx.chakra.code("{your_app}/pages/dashboard.py"),
        ),
    )
