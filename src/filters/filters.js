export function getSex(value){
    switch(value){
        case 'man':
            return "男";
        case 'women':
            return "女";
        default:
            return value
    }
}