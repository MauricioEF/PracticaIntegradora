import coursesModel from "../models/courses.js";

export default class Courses{
    constructor(){
        console.log("Working courses with database in mongodb")
    }
    getAll = async () =>{
        let courses = await coursesModel.find();
        return courses;
    }
    saveCourse =async course =>{
        let result = await coursesModel.create(course);
        return result;
    }
    updateCourse = async (id,course) =>{
        let result = await coursesModel.updateOne({_id:id},course)
        return result;
    }
}