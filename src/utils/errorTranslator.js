export const errorTranslator = error => {
    switch (error) {
        case 'no credentials':
            return 'Tiempo de sesión expirado, inicia sesión nuevamente';
    }
}