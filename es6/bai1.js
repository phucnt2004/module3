    let courses = [
    {
        id: 1,
        title: "reactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "reactJS Tutorial 1",
        rating: 4,
    },
    {
        id: 3,
        title: "reactJS Tutorial 2",
        rating: 4.4,
    },
    {
        id: 4,
        title: "reactJS Tutorial",
        rating: 3,
    },
    {
        id: 5,
        title: "reactJS Tutorial",
        rating: 2,
    },
    ];

// Yêu cầu 1
    console.log("Yêu cầu 1");
    const newcourses = courses.filter((a,b) => a.rating >=4);
    newcourses.forEach((a,b) =>{
        console.log(`ID:  ${a.id} || Title:  ${a.title} || Rating: ${a.rating}`)
    });

// Yêu cầu 2
    console.log("Yêu cầu 2");
    const newcoursess = courses.filter((c,d) => c.rating < 4);
    newcoursess.forEach((c,d) =>{
        console.log(`<id>  ${c.id} - <Title>  ${c.title} - <Rating> ${c.rating}`)
    });
// Yêu cầu 3
    let addedCourses = [
    {
        id: 6,
        title:"reactJS Tutorial 6",
        rating: 3,
    },    
    {
        id: 7,
        title:"reactJS Tutorial 7",
        rating: 5,
    },
    {
        id: 8,
        title:"reactJS Tutorial 8",
        rating: 1,
    },
    {
        id: 9,
        title:"reactJS Tutorial 9",
        rating: 4,
    },
    {
        id: 10,
        title:"reactJS Tutorial 10",
        rating: 3,
    },
    ];
    console.log("Yêu cầu 3")
    const courses_addedcourse =[courses,addedCourses]
    console.log(courses_addedcourse);