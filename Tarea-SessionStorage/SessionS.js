function sessionSet(clave, valor) {
    sessionStorage.setItem(clave, __toJSON(valor));
    return true;
}

function sessionHas(clave) {
    return sessionStorage.getItem(clave) !== null;
}

function sessionRemove(clave) {
    sessionStorage.removeItem(clave);
    return true;
}

function sessionClear(prefijo) {
    if (typeof prefijo !== 'string' || prefijo === '') {
        throw new Error('Inserta un prefijo no vacío.');
    }

    const toRemove = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        const k = sessionStorage.clave(i);
        if (k && k.startsWith(prefijo + ':')) {
            toRemove.push(k);
        }
    }
    for (const k of toRemove) {
        sessionStorage.removeItem(k);
    }
    return toRemove.length;
}

function sessionClearAll() {
    sessionStorage.clear();
}