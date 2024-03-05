"""The Oregon page."""

from housing_risk.templates import template
import reflex as rx

@template(route="/oregon", title="Oregon", image="/flag_oregon.png")
def oregon() -> rx.Component:
    """The Oregon page.

    Returns:
        The UI for the settings page.
    """
    return rx.chakra.vstack(
        rx.chakra.heading("California", font_size="3em"),
        rx.chakra.text("Welcome to Reflex!"),
        rx.chakra.text(
            "You can edit this page in ",
        )
    )