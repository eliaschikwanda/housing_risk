"""The California page."""

from housing_risk.templates import template

import reflex as rx

california_counties = [ "Alameda", "Alpine", "Amador", "Butte", "Calaveras", "Colusa", "Contra" "Costa", "Del Norte", "El Dorado", "Fresno",
                       "Glenn", "Humboldt", "Imperial", "Inyo", "Kern", "Kings", "Lake", "Lassen", "Los Angeles", "Madera", "Marin", "Mariposa",
                       "Mendocino", "Merced", "Modoc", "Mono", "Monterey", "Napa", "Nevada", "Orange", "Placer", "Plumas", "Riverside", "Sacramento",
                       "San Benito", "San Bernardino", "San Diego"]
california_counties1 = ["San Joaquin", "San Luis Obispo", "San Mateo", "Santa Barbara", "Santa Clara",
                         "Santa Cruz", "Shasta", "Sierra", "Siskiyou", "Solano", "Sonoma", "Stanislaus", "Sutter", "Tehama", "Trinity", "Tulare", "Tuolumne",
                         "Ventura", "Yolo", "Yuba" ]


@template(route="/california", title="California", image="/flag_california.webp")
def california() -> rx.Component:
    """The California page.

    Returns:
        The UI for the settings page.
    """
    return rx.chakra.vstack(
        rx.chakra.heading("California", font_size="4em"),
        rx.divider(),
        rx.chakra.vstack(
            *[
                rx.chakra.box(
                    rx.chakra.text(county),
                    font_size="1.5em",
                )
                for county in california_counties
            ],
            rx.chakra.link(
                "San Francisco",  # Text displayed for the link
                href="/california/san_francisco",  # URL to navigate to when the link is clicked
                color="black",  # Optional: Setting the color of the link
                font_size="1.5em",  # Optional: Setting the font size of the link text
                _hover={"textDecoration": "underline"},  # Optional: Adding underline on hover
            ),
            *[
                rx.chakra.box(
                    rx.chakra.text(county1),
                    font_size="1.5em",
                )
                for county1 in california_counties1
            ],
        ),
    )
