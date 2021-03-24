const database = require('./db.js')
const createProffy = require('./createProffy')

 database.then(async (db) => {

    proffyValue = {
        name: "Lucas Andrade",
        avatar: "https://avatars.githubusercontent.com/u/63925588?s=460&u=b6442d7150ebfd1e4c35a89604ac62c9136ff461&v=4",
        whatsapp: "71991255175",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas emlaboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por umas das minhas explosões"
    },

        classValue = {
            subject: "Química",
            cost: "20"
        },

        classScheduleValues = [
            {
                weekday: 1,
                time_from: 720,
                time_to: 1220
            },

            {
                weekday: 0,
                time_from: 520,
                time_to: 1220
            }

        ]

    const selectedProffys = await db.all("SELECT * FROM proffys")


    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.* 
        FROM class_schedule
        WHERE class_schedule.class_id classes.id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "420"
    `)

}) 


/* const proffys = [
    {
        name: "Lucas Andrade",
        avatar: "https://avatars.githubusercontent.com/u/63925588?s=460&u=b6442d7150ebfd1e4c35a89604ac62c9136ff461&v=4",
        whatsapp: "71991255175",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas emlaboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por umas das minhas explosões",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Lucas Andrade",
        avatar: "https://avatars.githubusercontent.com/u/63925588?s=460&u=b6442d7150ebfd1e4c35a89604ac62c9136ff461&v=4",
        whatsapp: "71991255175",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas emlaboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por umas das minhas explosões",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Diego Fernandes",
        avatar: "https://avatars.githubusercontent.com/u/63925588?s=460&u=b6442d7150ebfd1e4c35a89604ac62c9136ff461&v=4",
        whatsapp: "71991255175",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas emlaboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por umas das minhas explosões",
        subject: "Química",
        cost: "20",
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    }
]
*/