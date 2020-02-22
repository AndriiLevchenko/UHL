 const dateWord=(dateNumber)=>{
            switch(dateNumber.substr(0, 2)){
            case '01': return ('Січень' + dateNumber.substr(2, 9))
            case '02': return ('Лютий' + dateNumber.substr(2, 9))
            case '03': return ('Березень' + dateNumber.substr(2, 9))
            case '04': return ('Квітень' + dateNumber.substr(2, 9))
            case '05': return ('Травень' + dateNumber.substr(2, 9))
            case '06': return ('Червень' + dateNumber.substr(2, 9))
            case '07': return ('Липень' + dateNumber.substr(2, 9))
            case '08': return ('Серпень' + dateNumber.substr(2, 9))
            case '09': return ('Вересень' + dateNumber.substr(2, 9))
            case '10': return ('Жовтень' + dateNumber.substr(2, 9))
            case '11': return ('Листопад' + dateNumber.substr(2, 9))
            case '12': return ('Грудень' + dateNumber.substr(2, 9))

              default:console.log(dateNumber.substr(0, 2)); 
              return dateNumber
            }
        }
        export default dateWord;