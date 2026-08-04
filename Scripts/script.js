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
        experience:5

    },
    {
        name:"Dr. Gabrianna Tiffany",
        specialisation:"Neurologist",
        fee:5000,
        experience:10

    },
    {
        name:"Dr. Mysoginst tate",
        specialisation:"Dermatologist",
        fee:4000,
        experience:15

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