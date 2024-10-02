/**
 * Contains the miscellaneous route handlers.
 * @author Oluwatunmibi Favour <https://github.com/Favourite101>>
 */
class AppController {
    static getHomePage = (request, response) => {
        response.status(200).send("Hello Holberton School!");
    }
}

export default AppController;
module.exports = AppController;