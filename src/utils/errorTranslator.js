export const errorTranslator = error => {
    switch (error) {
        case 'no credentials':
            return 'Inicia sesión para continuar';
        case 'expired token':
            return 'Sesión refrescada';
    }
}