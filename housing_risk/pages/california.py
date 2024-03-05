"""The California page."""

from housing_risk.templates import template

import reflex as rx


@template(route="/california", title="California", image="/flag_california.webp")
def california() -> rx.Component:
    """The California page.

    Returns:
        The UI for the settings page.
    """
    return rx.chakra.vstack(
        rx.chakra.heading("California", font_size="3em"),
        rx.chakra.text("Welcome to Reflex!"),
        rx.chakra.text(
            "You can edit this page in ",
            rx.chakra.code("{your_app}/pages/settings.py"),
        ),
    )
