"""The San Francisco page."""

from housing_risk.templates import template
import reflex as rx

@template(route="/california/san_francisco", title="state")
def san_francisco() -> rx.Component:
    """The dashboard page.

    Returns:
        The UI for the dashboard page.
    """
    return rx.chakra.vstack(
        rx.chakra.heading("San Franciso", font_size="4em"),
        rx.divider(),
        rx.chakra.vstack(
                rx.chakra.vstack(
                    rx.chakra.heading(
                    "San Francisco Earth Quakes",
                ),
                rx.chakra.text(
                    "Earthquake risk",
                ),
                rx.chakra.text(
                    "60%",
                    color="red",
                ),
                rx.chakra.image(
                src="/san_francisco_earthquake1.jpeg",  # URL of the image file
                alt="Seismic Hazards Map for Southern Californiale Earthquakes 1994-2024",  # Alt text for accessibility
                width="100%",  # Optional: Set the width of the image region
                height="auto",  # Optional: Set the height of the image region
                ),
            ),
            rx.divider(),
            rx.chakra.vstack(
                rx.chakra.heading(
                    "San Francisco Flooding",
                ),
                rx.chakra.text(
                    "There are ",
                    rx.chakra.span("6,328 properties", font_weight="bold", color="red"),
                    " in San Francisco that have greater than a ",
                    rx.chakra.span("26%", font_weight="bold", color="red"),
                    " chance of being severely",
                    " affected by flooding over the next 30 years. This represents",
                    rx.chakra.span(" 8%", font_weight="bold", color="red"),
                    " of all properties in San Francisco. ",
                    rx.chakra.span("Be careful where you buy your property", font_weight="bold", color="black"),
                ),
                
                rx.chakra.image(
                src="/san_francisco_flooding.png",  # URL of the image file
                alt="San Francisco Flooding",  # Alt text for accessibility
                width="100%",  # Optional: Set the width of the image region
                height="auto",  # Optional: Set the height of the image region
                ),
                rx.chakra.vstack(
                    rx.chakra.heading(
                        "Risks",
                    ),
                    rx.chakra.text(
                        "Residential: 9,906 out of 136,322 homes at risk",
                    ),
                    rx.chakra.text(
                        "Roads: 251 out of 1,427 miles at risk",
                    ),
                    rx.chakra.text(
                        "Commercial: 9,906 out of 136,322 homes at risk",
                    ),
                    rx.chakra.text(
                        "Social Facilities: 1,861 out of 10,193 properties at risk",
                    ),
                    
                ),
            ),
            rx.divider(),
            rx.chakra.vstack(
                rx.chakra.heading(
                    "San Francisco Fire",
                ),
                rx.chakra.text(
                    "There are ",
                    rx.chakra.span("23,206 properties", font_weight="bold", color="red"),
                    " in San Francisco that have some risk of being affected by wildfire over the next 30 years.",
                    " This represents ",
                    rx.chakra.span(" 15%", font_weight="bold", color="red"),
                    " of all properties in San Francisco. ",
                    rx.chakra.span("Be careful where you buy your property", font_weight="bold", color="black"),
                ),
                rx.chakra.image(
                src="/san_francisco_fires.png",  # URL of the image file
                alt="San Francisco fires",  # Alt text for accessibility
                width="100%",  # Optional: Set the width of the image region
                height="auto",  # Optional: Set the height of the image region
                ),
                rx.chakra.vstack(
                    rx.chakra.heading(
                        "Risks",
                    ),
                    rx.chakra.text(
                        "Residential: 21,516 out of 136,322 homes at risk",
                    ),
                    rx.chakra.text(
                        "Critical Infrastructure: 29 out of 529 facilities at risk",
                    ),
                    rx.chakra.text(
                        "Commercial: 685 out of 10,193 properties at risk",
                    ),
                    rx.chakra.text(
                        "Social Facilities: 103 out of 1,114 facilities at risk",
                    ),
                    
                ),
            ),
        ),
    )