exports.create = async ()=> {
    try {
        return { success: true, body: "{}"};
    } catch (error) {
        return { success: false, error: error.message};
    }
}

exports.read = async ()=> {
    try {
        return { success: true, body: "{}"};
    } catch (error) {
        return { success: false, error: error.message};
    }
}

exports.update = async ()=> {
    try {
        return { success: true, body: "{}"};
    } catch (error) {
        return { success: false, error: error.message};
    }
}

exports.delete = async ()=> {
    try {
        return { success: true, body: "{}"};
    } catch (error) {
        return { success: false, error: error.message};
    }
}