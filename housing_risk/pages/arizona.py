"""The Arizona page."""
from housing_risk.templates import template

import reflex as rx

arizona_counties = [
    "Apache", "Cochise", "Coconino", "Gila", "Graham", "Greenlee", "La Paz",
    "Maricopa", "Mohave", "Navajo", "Pima", "Pinal", "Santa Cruz", "Yavapai", "Yuma"
]

@template(route="/arizona", title="Arizona", image="/flag_arizona.png")
def arizona() -> rx.Component:
    """The dashboard page.

    Returns:
        The UI for the dashboard page.
    """
    return rx.chakra.vstack(
        rx.chakra.heading("Arizona", font_size="4em"),
        rx.divider(),
        rx.chakra.vstack(
            *[
                rx.chakra.box(
                    rx.chakra.text(county),
                    font_size="1.5em",
                )
                for county in arizona_counties
            ],
        ),
    )
