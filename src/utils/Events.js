const events = new Map();

export default {
    $on(eventName,fn) {
        if(!events.has(eventName)) {
            events.set(eventName, []);
        }
        events.get(eventName).push(fn);
    },

    $off(eventName,fn) {
        throw {message: 'Not implemented yet'};
    },

    $emit(emitName,data) {
        if(!events.has(emitName)) {
            throw {message: 'Event not found'};
        }
        events.get(emitName).forEach(fn => fn(data));
    }
}