module.exports = async function(db, { proffyValue, classValue, classScheduledValues }) {
    // inserir dados na tabela de proffys
    const insertedProffy =  await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
   `) 

    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classes
    const insertedCLass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedCLass.lastID

    // Inserir dados na tabela class_schedule
    const insertedAllClassScheduledValues = classScheduledValues.map((classScheduledValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduledValue.weekday}",
                "${classScheduledValue.time_from}",
                "${classScheduledValue.time_to}"
            );
        `)
    })

    // aqui vou executar todos os db.run() das class_schedules
    await Promise.all(insertedAllClassScheduledValues)
}

