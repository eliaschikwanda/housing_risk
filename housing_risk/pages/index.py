"""The home page of the app."""

from housing_risk import styles
from housing_risk.templates import template

import reflex as rx


@template(route="/", title="Home", image="/earth.jpeg")
def index() -> rx.Component:
    """The home page.

    Returns:
        The UI for the home page.
    """
    # with open("README.md", encoding="utf-8") as readme:
    #     content = readme.read()
    # return rx.markdown(content, component_map=styles.markdown_style)
    return rx.box(
        rx.chakra.heading("How is your house exposed to natural disasters!")
    )
