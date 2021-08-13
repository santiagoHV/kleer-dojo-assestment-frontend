export default {
    getLevel: (level) => {
        switch (level){
            case 1:
                return 'Novato'
            case 2:
                return 'Principiante'
            case 3:
                return 'Competente'
            case 4:
                return 'Avanzado'
            case 5:
                return 'Profesional'
            case 6:
                return 'Experto'
        }
    }
}