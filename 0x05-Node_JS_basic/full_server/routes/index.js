import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

/**
 * Binds the routes to the appropriate handler in the
 * given Express application.
 * @param {Express} app The Express application.
 * @author Oluwatunmibi Favour <https://github.com/Favourite101>
 */
const mapRoutes = (app) => {
    app.get('/', AppController.getHomePage);
    app.get('/students', StudentsController.getAllStudents);
    app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

export default mapRoutes;
module.exports = mapRoutes;