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
    },
    getAverage: (assessment) => {
        let list = []
        for(let item in assessment){
            if(typeof(assessment[item]) === 'number'){
                list.push(assessment[item])
            }
        }
        let sum = list.reduce((init, item) => {
            return init += item
        }, 0)
        let averange = Math.trunc(sum / 6)
        return averange
    }
}