/**
 * @todo
 * 
 * This will be the entry point for all the 
 * DB change request from outside application(s)
 * 
 * Access/Privileges
 * - 3rd Party Application have read access for data.
 * - Business Application have create, read, update for data.
 * - Database Manager have all the access.
 * 
 * Multiple Database
 * - UMS [Development | (Test - Refresh) |Stage/Production]
 *      - User
 *      - Role
 *      - Permission
 * 
 * - BUILDER [SINGLE INSTANCE]
 *      - Application Setting(s) eg. Request Timeout, Max File Size
 *      - Route
 *      - Pages
 *      ...
 * 
 * - DATA [SINGLE INSTANCE]
 *      - Medicines
 *      - Diseases
 *      ...
 * 
 * - APPLICATION
 *      - Patient
 *      ...
 * 
 */

const databaseManager = {};

export default databaseManager;