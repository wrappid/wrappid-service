export function testGetFunc(req, res) {
    return res.status(200).json({ message: "This is a test GET API." });
}
export function testPatchFunc(req, res) {
    return res.status(200).json({ message: "This is a test PATCH API." });
}
export function testPostFunc(req, res) {
    return res.status(200).json({ message: "This is a test POST API." });
}
export function testPutFunc(req, res) {
    return res.status(200).json({ message: "This is a test PUT API." });
}