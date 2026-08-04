let hospitalName="Medly";
const year=2026;
const specialisation=[
    "Cardiologist",
    "Dermatologist",
    "Gynacologist",
    "Neurologist",
    "Orthopedic"
];

const doctors=[
    {
        name:"Dr. Stephen Hawkins",
        specialisation:"Cardiologist",
        fee:1000,
        experience:"5 years"

    },
    {
        name:"Dr. Gabrianna Tiffany",
        specialisation:"Neurologist",
        fee:5000,
        experience:"10 years"

    },
    {
        name:"Dr. Mysoginst tate",
        specialisation:"Dermatologist",
        fee:4000,
        experience:"15 years"

    }
];

function showDoctor(doctor)
{
    console.log(doctor.name);
}

for(let i=0;i<doctors.length;i++)
{
    showDoctor(doctors[i]);
}

const doc_card_container=document.querySelector(".doc_cards");

for(let x=0;x<doctors.length;x++){

    const doctor=doctors[x];

    const card=document.createElement("div");

    card.classList.add("doc_card");

    card.innerHTML=`
    <h3>${doctor.name}</h3>
    <p>${doctor.specialisation}</p>
    <p>₹${doctor.fee}</p>
    <p>${doctor.experience}</p>
    <button>Book</button>
    `;

doc_card_container.appendChild(card);
}