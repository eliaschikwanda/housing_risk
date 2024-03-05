"""The Oregon page."""

from housing_risk.templates import template
import reflex as rx

oregon_counties = [
    "Baker", "Benton", "Clackamas", "Clatsop", "Columbia", "Coos", "Crook", 
    "Curry", "Deschutes", "Douglas", "Gilliam", "Grant", "Harney", "Hood River", 
    "Jackson", "Jefferson", "Josephine", "Klamath", "Lake", "Lane", "Lincoln", 
    "Linn", "Malheur", "Marion", "Morrow", "Multnomah", "Polk", "Sherman", 
    "Tillamook", "Umatilla", "Union", "Wallowa", "Wasco", "Washington", "Wheeler", 
    "Yamhill"
]

@template(route="/oregon", title="Oregon", image="/flag_oregon.png")
def oregon() -> rx.Component:
    """The Oregon page.

    Returns:
        The UI for the settings page.
    """
    return rx.chakra.vstack(
        rx.chakra.heading("Oregon", font_size="4em"),
        rx.divider(),
        rx.chakra.vstack(
            *[
                rx.chakra.box(
                    rx.chakra.text(county),
                    font_size="1.5em",
                )
                for county in oregon_counties
            ],
        ),
    )