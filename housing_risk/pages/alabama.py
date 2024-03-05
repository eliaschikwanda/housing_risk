"""The Alabama page."""
from housing_risk.templates import template

import reflex as rx

alabama_counties = [
    "Autauga", "Baldwin", "Barbour", "Bibb", "Blount", "Bullock", "Butler", "Calhoun", "Chambers", "Cherokee",
    "Chilton", "Choctaw", "Clarke", "Clay", "Cleburne", "Coffee", "Colbert", "Conecuh", "Coosa", "Covington",
    "Crenshaw", "Cullman", "Dale", "Dallas", "DeKalb", "Elmore", "Escambia", "Etowah", "Fayette", "Franklin",
    "Geneva", "Greene", "Hale", "Henry", "Houston", "Jackson", "Jefferson", "Lamar", "Lauderdale", "Lawrence",
    "Lee", "Limestone", "Lowndes", "Macon", "Madison", "Marengo", "Marion", "Marshall", "Mobile", "Monroe",
    "Montgomery", "Morgan", "Perry", "Pickens", "Pike", "Randolph", "Russell", "St. Clair", "Shelby", "Sumter",
    "Talladega", "Tallapoosa", "Tuscaloosa", "Walker", "Washington", "Wilcox", "Winston"
]

@template(route="/alabama", title="Alabama", image="/flag_alabama.png")
def alabama() -> rx.Component:
    """The dashboard page.

    Returns:
        The UI for the dashboard page.
    """
    return rx.chakra.vstack(
        rx.chakra.heading("Alabama", font_size="4em"),
        rx.divider(),
        rx.chakra.vstack(
            *[
                rx.chakra.box(
                    rx.chakra.text(county),
                    font_size="1.5em",
                )
                for county in alabama_counties
            ],
        ),
    )