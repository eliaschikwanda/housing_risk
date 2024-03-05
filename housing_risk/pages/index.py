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
        rx.chakra.vstack(
            rx.chakra.heading("Do you know your property risk to some disasters?"),
            rx.chakra.text(
                "Problem Statement",
                font_weight="bold",
                font_size="1.75em",
            ),
            rx.divider(),
            rx.chakra.text(
                "How might I use my computer programming skills to reduce environmental injustice to people of color?",
                font_size="1.25em",
            ),
            rx.chakra.text(
                "What I did",
                font_weight="bold",
                font_size="1.75em",
            ),
            rx.chakra.text(
                "Due to climate change black people and other people of color are facing environmental injustice and most of the time, they contribute less to climate change. One way to change and shape the lives of people of color to reduce the environmental justice that’s going on is to give them a heads up and to keep them informed about how much risk their property is exposed to. In this prototype, I just looked at San Francisco to provide data about that county.",
                font_size="1.25em",
            ),
            rx.chakra.text(
                "How I did it ",
                font_weight="bold",
                font_size="1.75em",
            ),
            rx.chakra.text(
                "I collected data from several US government sites and calculated the probabilities of flooding, fire, and earthquake in San Francisco. I used some mapping sites to get the flooding map, fire map, and earthquake, and snippets for San Francisco are on my site.",
                font_size="1.25em",
            ),
            rx.chakra.text(
                "How I felt",
                font_weight="bold",
                font_size="1.75em",
            ),
            rx.chakra.text(
                "To build this website I used Reflex (Python Framework). I had never used Reflex, when I’m building websites I usually use Django. But from previous classes, the one thing I got is that when designing something don’t worry about the tool that you will use. Just lay your idea on paper and figure the the tools later. That’s what I did and I wanted to use something that I hadn’t before, just to challenge myself. It took a lot of time going through the docs to learn how the framework works but it’s satisfying when you do ‘reflex run’ and everything compiles without errors.",
                font_size="1.25em",
            ),
            rx.chakra.text(
                "Visual element (Demo)",
                font_weight="bold",
                font_size="1.75em",
            ),
            rx.chakra.text(
                "What I learned",
                font_weight="bold",
                font_size="1.75em",
            ),
            rx.chakra.text(
                "Although I only did it for San Francisco, if you notice I put 10 states on the side and their respective counties. This allowed me to learn about the US geography. I didn’t know that each state had subdivisions but now I know which is great.",
                font_size="1.25em",
            ),
            rx.chakra.text(
                "Next steps",
                font_weight="bold",
                font_size="1.75em",
            ),
            rx.chakra.text(
                "Although this project might not be useful to anyone. It’s satisfying to work on, Since I have 49 more states and their respective counties I have a lot to do. But I will work on it bit by bit as I add more data to the website. I would like to add an interactive map where a user just selects their location from the map and all the statistics of that location are shown and calculated because right now the data I have is static.",
                font_size="1.25em",
            ),
        ),
    )
