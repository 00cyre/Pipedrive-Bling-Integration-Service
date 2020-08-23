const validateRequest = (req) => {
    if (req.body) {
        const previous = req.body.previous;
        const current = req.body.current;
        if (previous.won_deals_count < current.won_deals_count) {
            return true
        }
    }
    return true

}
module.exports = { validateRequest }