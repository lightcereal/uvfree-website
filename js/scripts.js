/*!
* Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

const events = [
    {
        title: "Donation Drive",
        date: "Friday, September 12",
        description: "yo show up",
        imgPath: "./assets/img/designer.jpg"
    }
];

const faqs = [
    {
        id: 1,
        question: "What does SPF stand for?",
        answer: "SPF stands for Sun Protection Factor. It measures the level of protection a sunscreen offers against UVB rays, which cause sunburn and contribute to skin cancer."
    },
    {
        id: 2,
        question: "How much sunscreen should I be using?",
        answer: "Dermatologists universally recommend a sunscreen usage of about an ounce per day. This is about the amount of your palm– or you can think about it as two finger-lengths worth every time you apply."
    },
    {
        id: 3,
        question: "How often should I apply sunscreen?",
        answer: "Apply sunscreen generously 15-30 minutes before sun exposure. Reapply every two hours, or more frequently if swimming or sweating."
    },
    {
        id: 4,
        question: "Do I need to wear sunscreen on cloudy days?",
        answer: "Absolutely! Up to 80% of UV rays can penetrate clouds, so sunscreen is necessary even on overcast days."
    },
    {
        id: 5,
        question: "How does SPF reduce the risk of skin cancer?",
        answer: "SPF (Sun Protection Factor) measures a sunscreen's ability to block UVB radiation, which is primarily responsible for sunburn and is a significant contributor to skin carcinogenesis. By absorbing or reflecting UVB rays, SPF helps prevent DNA damage in skin cells, thereby reducing the likelihood of mutations that can lead to skin cancer."
    },
    {
        id: 6,
        question: "What SPF level is recommended to minimize skin cancer risk?",
        answer: "The American Academy of Dermatology recommends using a broad-spectrum sunscreen with at least SPF 30 for daily activities. Higher SPFs, such as SPF 50 or more, provide additional protection, especially for individuals at higher risk of skin cancer due to factors like fair skin, history of sunburns, or a family history of skin cancer."
    },
    {
        id: 7,
        question: "How frequently should I apply sunscreen to ensure effective protection?",
        answer: "For optimal protection, sunscreen should be applied generously 15-30 minutes prior to sun exposure and reapplied every two hours. If swimming or sweating, it is critical to reapply immediately afterward, as water and perspiration can reduce the efficacy of the product."
    },
    {
        id: 8,
        question: "What are the differences between UVA and UVB rays in relation to skin cancer?",
        answer: "UVB rays are primarily responsible for causing sunburn and are directly linked to the development of skin cancer, particularly melanoma and non-melanoma types. UVA rays penetrate deeper into the skin and contribute to photoaging and immunosuppression, which can also facilitate carcinogenesis. Broad-spectrum sunscreens protect against both UVA and UVB radiation."
    },
    {
        id: 9,
        question: "Who is at the highest risk for developing skin cancer?",
        answer: "Individuals with fair skin, light hair, and blue or green eyes are at the highest risk. Their skin contains less melanin, making it more susceptible to UV damage."
    },
    {
        id: 10,
        question: "Are people with darker skin tones immune to skin cancer?",
        answer: "No, while individuals with darker skin have more melanin, which offers some protection, they can still develop skin cancer, particularly melanoma. It may be diagnosed at a later stage due to a lack of awareness."
    },
    {
        id: 11,
        question: "How does age affect skin cancer risk?",
        answer: "Risk increases with age, as cumulative sun exposure over time contributes to skin damage. Most skin cancer cases are diagnosed in individuals over 50."
    }
];

let nextFAQId = 12;

function createAccordHeader(faq) {
    const accordHeader = document.createElement("h2");
    accordHeader.classList.add("accordion-header");
    accordHeader.setAttribute("id", `header${faq.id}}`);
    
    const accordButton = document.createElement("button");
    accordButton.classList.add("accordion-button");
    accordButton.setAttribute("type", "button");
    accordButton.setAttribute("data-bs-toggle", "collapse");
    accordButton.setAttribute("data-bs-target", `#collapse${faq.id}`);
    accordButton.setAttribute("aria-expanded", "true");
    accordButton.setAttribute("aria-controls", `collapse${faq.id}`);
    accordButton.textContent = faq.question;

    return accordHeader;
}

function createAccordCollapseDiv(faq) {
    const accordCollapseDiv = document.createElement("div");
    accordCollapseDiv.classList.add("accordion-collapse", "collapse", "show");
    accordCollapseDiv.setAttribute("id", `collapse${faq.id}}`);
    accordCollapseDiv.setAttribute("aria-labelledby", `heading${faq.id}}`);
    accordCollapseDiv.setAttribute("data-bs-parent", "#faqsleft");

    accordCollapseDiv
        .appendChild(
            document
                .createElement("div")
                .classList.add("accordion-body")
                .textContent = faq.answer
        );

    return accordCollapseDiv;
}

function createAccordItemDiv(faq) { 
    return document
        .createElement("div")
        .classList.add("accordion-item")
        // was here
}

function renderQuestions(faq) {
    document
        .getElementById("faqsleft")
        .replaceChildren(...faqs
            .map(createAccordItemDiv)
        );
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //renderQuestions(faqs); 
});
