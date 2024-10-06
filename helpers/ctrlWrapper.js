const ctrlWrapper = (func) => {
    const wrappedFunc = async (req, res, next) => {
        try {
            await func(req, res, next);
        } catch (error) {
            next(error);
        }
    };
    return wrappedFunc;
};

module.exports = {
    ctrlWrapper
}